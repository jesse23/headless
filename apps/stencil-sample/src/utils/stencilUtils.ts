import { Data, getValue } from "@headless/core";
import lodashFpSet from 'lodash/fp/set';

export const dispatch = ( prev: Data, values: Data ): Data => {
  return Object.entries(values).reduce((prev, [path, value]): Data => {
    const prevValue = getValue(prev, path);
    return prevValue === value ? prev : lodashFpSet(path, value, prev);
  }, prev);
}
