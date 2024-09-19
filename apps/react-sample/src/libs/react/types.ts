import { ViewDefinition } from "../core";

/**
 * view definition with 'view' and 'viewmodel'
 */
export interface CreateViewFn {
    ( viewDef: ViewDefinition ): React.FunctionComponent;
}