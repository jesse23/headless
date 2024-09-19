

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
 * path context as `data.a.b` => { scope: 'data', path: 'a.b'}
 */
export interface PathContext {
  scope: string;
  path: string;
}

/**
 * view definition with 'view' and 'viewmodel'
 */
export interface ViewDefinition {
  /**
   * schema version of the view model JSON
   */
  schemaVersion: string;
  /**
   * data definition for the view model
   */
  data: Data;
  /**
   * action definitions for the view model
   */
  actions: Data;
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
  }
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
  styles?: unknown;
  /**
   * view name
   */
  name?: string;
}

/**
 * primitive type in store
 */
export type FunctionType = (...args: unknown[]) => unknown;

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

