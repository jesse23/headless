import {
  Data,
  Store,
  cloneJson,
  getValue,
  UseStoreFn,
  ViewModelDefinition,
  applyValues,
  initActions,
  execLifecycleHook,
  subscribeEvents,
  unsubscribeEvents,
} from '@headless/core';
import { useRef, useEffect, useState } from 'react';
import lodashFpSet from 'lodash/fp/set';

type UsePartialStoreFn = (store: Store, path: string) => Store;

// not used yet
export const usePartialStore: UsePartialStoreFn = (store, path) => {
  const { getData: getStoreData, updateData: updateStoreData } = store;

  const getData = useRef(() => getValue(getStoreData(), path) as Data).current;
  const updateData = useRef((values: Data): void => {
    const updatedValues = Object.entries(values).reduce(
      (prev, [path, value]) => {
        const prevValue = getValue(prev, path);
        return prevValue === value ? prev : lodashFpSet(path, value, prev);
      },
      getData()
    );
    updateStoreData({ [path]: updatedValues });
  }).current;

  return { getData, updateData };
};

export const useStore: UseStoreFn = (initFn) => {
  const lastState = useRef(initFn());

  const getData = useRef(() => lastState.current).current;

  const [ _, setData ] = useState(getData());

  const updateData = useRef((values: Data): void => {
    setData(lastState.current = applyValues(getData(), values));
  }).current;

  return { getData, updateData };
};

export const useViewModel = (
  viewDef: ViewModelDefinition,
  props: Record<string, unknown>
) => {
  // props
  // - use it as a ref hook since we don't want to listen to props change
  //   - for UI driven action, it will always be the latest value
  //   - for Model driven action, it may not be the latest if the UI rendering is delayed.
  const propsRef = useRef({} as Record<string, unknown>);
  const getProps = useRef(() => propsRef.current).current;
  propsRef.current = props;

  // data
  const { getData, updateData } = useStore(() => cloneJson(viewDef.data));

  // actions
  const actions = useRef(initActions(viewDef.actions || {}, { getData, updateData }, getProps)).current;

  // lifecycle hooks
  useEffect(() => {
    execLifecycleHook(viewDef, actions, 'onMount');
    return () => {
      execLifecycleHook(viewDef, actions, 'onUnmount');
    };
    // action hook is stable since it is with useStore
  }, [actions, viewDef]);

  // onUpdate
  useEffect(() => {
    execLifecycleHook(viewDef, actions, 'onUpdate');
  });

  // onEvent
  useEffect(() => {
    const subscriptions = subscribeEvents(viewDef, actions);
    return () => {
      unsubscribeEvents(subscriptions);
    };
  }, [actions, viewDef]);

  return {
    getData,
    updateData,
    actions,
    data: getData(),
  };
};
