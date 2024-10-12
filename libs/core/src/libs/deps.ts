import { FunctionType, Component } from "@headless/types";
import { getConfigs, setConfigs } from './configs';

const CONFIG_VIEW_DEPS_KEY = 'components';
const CONFIG_LIB_DEPS_KEY = 'services';

/**
 * register libraries
 * 
 * @param libName name of the lib
 * @param deps lib implementation
 */
export const registerLibDeps = (libName: string, deps: Promise<Record<string, FunctionType>>) => {
    setConfigs(CONFIG_LIB_DEPS_KEY, {
        ...getConfigs<Record<string, Promise<Record<string, FunctionType>>>>(CONFIG_LIB_DEPS_KEY),
        [libName]: deps
    });
};

/**
 * get libraries
 * 
 * @param libName name of the lib
 */
export const getLibDeps = async (libName: string) => {
    return (await getConfigs<Record<string, Promise<Record<string, FunctionType>>>>(CONFIG_LIB_DEPS_KEY))?.[libName] || {};
}



let viewStoreService:ComponentStoreService = null;

interface ComponentStoreService {
  getComponent: (viewName: string, _: unknown) => Promise<Component>;
}

/**
 * register views
 *
 * @param viewName name of the view
 * @param deps view implementation
 */
export const registerViewDeps = (viewName: string, deps: unknown) => {
  setConfigs(CONFIG_VIEW_DEPS_KEY, {
    ...getConfigs<Record<string, Component>>(CONFIG_VIEW_DEPS_KEY),
    [viewName]: deps
  });
};

/**
 * register views loader
 *
 * @param viewName name of the view
 * @param deps view implementation
 */
export const registerViewStoreService = (svc: ComponentStoreService) => {
  viewStoreService = svc;
};

/**
 * get view dependencies from cache
 *
 * @param viewName name of the view
 */
const getViewDepsCached = (viewName: string): Component | null => {
  return getConfigs<Record<string, Component>>(CONFIG_VIEW_DEPS_KEY)?.[viewName];
};

/**
 * get view dependencies
 *
 * @param viewName name of the view
 */
const getViewDep = async (viewName: string) => {
  const viewConfigs = getConfigs<Record<string, Component>>(CONFIG_VIEW_DEPS_KEY) || {};
  if (!viewConfigs[viewName] && viewStoreService) {
    const view = await viewStoreService.getComponent(viewName, {});
    registerViewDeps(viewName, view);
  }
  return getViewDepsCached(viewName) || {};
};

export const getViewDeps = async (depNames: string[]) => {
  return (
    await Promise.all(
      depNames.map(
        async (depName): Promise<[string, unknown]> => [
          depName,
          await getViewDep(depName),
        ]
      )
    )
  ).reduce(
    (prev, [depName, dep]) => ({
      ...prev,
      [depName]: dep,
    }),
    {}
  );
};
