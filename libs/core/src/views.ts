import { ViewModelDefinition } from "@headless/core";

const _ctx = {
    views: {} as Record<string,unknown>,
    viewStoreService: null as ViewStoreService | null,
}

interface ViewStoreService {
    getView: (viewName: string, _: unknown) => ViewModelDefinition;
    updateView: (viewName: string, viewDef: ViewModelDefinition) => void;
    listViews: () => string[];
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
export const registerViewStoreService = (svc: ViewStoreService) => {
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
export const getViewDeps = async (viewName: string, defineComponentDecl: (viewDef: ViewModelDefinition) => (props: Record<string, unknown>) => JSX.Element) => {
    if( !_ctx.views[viewName] && _ctx.viewStoreService ) {
        // Mock remote view model
        const viewDef = await _ctx.viewStoreService.getView(viewName, {});
        _ctx.views[viewName] = defineComponentDecl(viewDef);
    }
    return getViewDepsCached(viewName) || {};
};

