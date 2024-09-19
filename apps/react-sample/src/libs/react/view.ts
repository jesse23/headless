import {
  Data,
  Store,
  cloneJson,
  createActionFn,
  getValue,
  ViewDefinition,
} from '../core';
import { useRef, useReducer, useEffect, useState } from 'react';
import lodashFpSet from 'lodash/fp/set';
import { get } from 'lodash';

type InitFn = () => Data;

type UseStoreFn = (initFn: InitFn) => Store;

type UsePartialStoreFn = (store: Store, path: string) => Store;

export const useStore: UseStoreFn = (initFn) => {
  const lastState = useRef({} as Data);

  // to prevent reducer called twice, per: https://github.com/facebook/react/issues/16295
  const reducer = useRef(
    (data: Data, values: Data): Data =>
      (lastState.current = Object.entries(values).reduce(
        (prev, [path, value]) => {
          return lodashFpSet(path, value, prev);
        },
        data
      ))
  ).current;

  const [_, updateData] = useReducer(
    reducer,
    null,
    () => (lastState.current = initFn())
  );

  const getData = useRef(() => lastState.current).current;

  return { getData, updateData };
};

export const usePartialStore: UsePartialStoreFn = (store, path) => {
  const { getData: getStoreData, updateData: updateStoreData } = store;

  const getData = useRef(() => getValue(getStoreData(), path) as Data).current;
  const updateData = useRef((values: Data): void => {
    const updatedValues = Object.entries(values).reduce(
      (prev, [path, value]) => {
        return lodashFpSet(path, value, prev);
      },
      getData()
    );
    updateStoreData({ [path]: updatedValues });
  }).current;

  return { getData, updateData };
};

export const useViewModel = (viewDef: ViewDefinition, props: Record<string, unknown>) => {
    // props 
    // - use it as a ref hook since we don't want to listen to props change
    //   - for UI driven action, it will always be the latest value
    //   - for Model driven action, it may not be the latest if the UI rendering is delayed.
    const propsRef = useRef({} as Record<string, unknown>);
    propsRef.current = props;
    const getProps = useRef(() => propsRef.current).current;

    // data
    const data = useStore(() => cloneJson(viewDef.data));
    const { getData, updateData } = data;

    // actions
    const [actions, setActions] = useState({} as Record<string, () => void>);

    useEffect(() => {
      setActions(
        Object.entries(viewDef.actions || {}).reduce(
          (prev, [actionName, actionDef]) => {
            return {
              ...prev,
              [actionName]: createActionFn(actionDef as Data, {
                getData,
                updateData,
                
              }, getProps),
            };
          },
          {} as Record<string, () => void>
        )
      );
      // TODO: quickly hack field here
    }, [getData, updateData]);

    // lifecycle hooks
    useEffect(() => {
      if (Object.keys(actions).length === 0) return;
      const onMountFnName = viewDef.lifecycleHooks?.onMount;
      if (onMountFnName) {
        const onMountFn = actions[onMountFnName];
        onMountFn();
      }
      return () => {
        const onUnmountFnName = viewDef.lifecycleHooks?.onUnmount;
        if (onUnmountFnName) {
          const onUnmountFn = actions[onUnmountFnName];
          onUnmountFn();
        }
      };
      // action hook is stable since it is with useStore
    }, [actions]);

    return { getData, updateData, actions };
};