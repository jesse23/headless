/**
 * https://github.com/SunshowerC/blog/issues/7
 * https://github.com/microsoft/TypeScript/issues/1897
 * https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md#type
 * https://stackoverflow.com/questions/53718296/index-d-ts-vs-normal-type-file
 *
 * we only allow name-value pair for now
 */

/**
 * value in the data store.
 * Could be any primitive, array or map with string as key
 */
export type Value =
  | string
  | number
  | boolean
  | null
  | Value[]
  | { [key: string]: Value };

/**
 * data store
 */
export type Data = Record<string, Value>;


/**
 * view definition with 'view' and 'viewmodel'
 */
export interface ViewModelDefinition {
  schemaVersion?: string;
  /**
   * data definition for the view model
   */
  data: Data;
  /**
   * action definitions for the view model
   */
  actions: Record<string, ActionDefinition>;
  /**
   * lifecycle hook definitions for the view model
   */
  lifecycleHooks?: {
    /**
     * onMount hook is called when the view is mounted
     */
    onMount?: string;
    /**
     * onUnmount hook is called when the view is unmounted
     */
    onUnmount?: string;
    /**
     * onUpdate hook is called when the view is updated
     */
    onUpdate?: string;
  };
  /**
   * view dependency definitions for the view model
   */
  imports?: string[];
  /**
   * view template as string, used by loader
   */
  view?: string;
  /**
   * css module imports, used by loader
   */
  styles?: Record<string, string>;
  /**
   * view name
   */
  name: string;
  /**
   * onEvent
   */
  onEvent?: {
    eventId: string;
    action: string;
    condition?: string;
  }[];
}

/**
 * primitive type in store
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FunctionType = (...args: any[]) => unknown;

export type Primitive = boolean | number | string;

export type DataPrimitiveStore = Record<string, Primitive>;

/**
 * store APIS
 */
export interface Store {
  /**
   * Get API for store
   * @returns store data object
   */
  getData: () => Data;
  /**
   * Update API for store
   * @param action update key value pair where key as path and value as value
   */
  updateData: ({ path, value }: Data) => void;
}

///////////////////////////////////
// DECL Concepts

/**
 * view model property
 */
export interface ViewModelProperty {
  /**
   * name of the property
   */
  name: string;
  /**
   * type of the property
   */
  type: 'STRING' | 'NUMBER' | 'BOOLEAN';
  /**
   * internal value of the property
   */
  dbValue: unknown;
}

/**
 * view model object as a standard client side object in SWF
 */
export interface ViewModelObject {
  /**
   * object name
   */
  name: string;
  /**
   * object properties
   */
  props?: Record<string, ViewModelProperty>;
}

/**
 * data provider for object list that needs paging and other advanced features
 */
export interface DataProvider {
  /**
   * load objects stored in the data provider
   */
  loadedViewModelObjects: ViewModelObject[];
  /**
   * total number of objects for the action
   */
  totalFound: number;
}

export type InitFn = () => Data;

export type UseStoreFn = (initFn: InitFn) => Store;

/**
 * Action that used in view model, which will be used in view directly
 */
export type Action = (eventData?: unknown) => Promise<void>;

/**
 * Action function that used in view model, which will return patch as key value pair
 */
export type ActionFn = (
  data: Data,
  props: Record<string, unknown>,
  eventData?: Data
) => Promise<Data | void> | Data | void;

interface ActionDefinitionBase {
  actionType?: string,
  inputData: Data,
  outputData?: Record<string, string>,
}

export interface ActionDefinition extends ActionDefinitionBase {
  method: string,
  deps: string,
}

export interface ActionDefinitionWithFn extends ActionDefinitionBase {
  fn: FunctionType,
}

/**
 * Condition function that used in view model, which will return boolean
 */
export type ConditionFn = (
  data: Data,
  props: Record<string, unknown>,
  eventData?: Data
) => boolean;


export type RenderFn = ({
    props,
    data,
    actions,
    styles,
    functions,
    components,
  }: {
    props: Record<string, unknown>;
    data: Data;
    actions: Record<string, Action>;
    styles: Record<string, string>;
    functions: Record<string, FunctionType>;
    components: Record<string,Component>;
  }) => JSX.Element;


export type SubscriptionDefinition = {
  eventId: string;
  action: ActionFn;
  condition: ConditionFn;
};



export interface ComponentDefinition {
  name: string;
  data: Data;
  extends?: Partial<ComponentDefinition>;
  actions?: Record<string, ActionFn>;
  lifecycleHooks?: Record<string, ActionFn>;
  onEvent?: SubscriptionDefinition[];
  styles?: Record<string, string>;
  render?: RenderFn;
  imports?: string[];
}

export type Component = (props: Record<string, unknown>) => JSX.Element

export type GetPartialStoreFn = (store: Store, path: string) => Store;

export type DefineComponentFn = (componentDef: ComponentDefinition, viewDeps?: Record<string,Component>) => Component;