import { Component } from '@headless/types';

const _ctx = {
  views: {} as Record<string, unknown>,
  viewStoreService: null as ComponentStoreService | null,
};

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
  _ctx.views[viewName] = deps;
};

/**
 * register views loader
 *
 * @param viewName name of the view
 * @param deps view implementation
 */
export const registerViewStoreService = (svc: ComponentStoreService) => {
  _ctx.viewStoreService = svc;
};

/**
 * get view dependencies from cache
 *
 * @param viewName name of the view
 */
const getViewDepsCached = (viewName: string) => {
  return _ctx.views[viewName] || {};
};

/**
 * get view dependencies
 *
 * @param viewName name of the view
 */
export const getViewDep = async (viewName: string) => {
  if (!_ctx.views[viewName] && _ctx.viewStoreService) {
    // Mock remote view model
    _ctx.views[viewName] = await _ctx.viewStoreService.getComponent(
      viewName,
      {}
    );
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
