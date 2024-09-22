import { initActions } from "./actions";
import { Store, ViewModelDefinition } from "./types";
import { cloneJson } from "./utils";

export const initViewModel = (viewDef: ViewModelDefinition, store: Store,   getProps: () => Record<string, unknown>) => {
    const data = cloneJson(viewDef.data);

    const actions = initActions(viewDef.actions || {}, store, getProps);

    return { data, actions };
  }
