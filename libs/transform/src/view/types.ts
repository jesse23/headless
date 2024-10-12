
export interface ViewTransformContext {
    index: number;
    level: number;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformFn?: any;
    context?: string;
    toTemplate?: boolean;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    deps?: Record<string, any>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    props?: Record<string, any>;
}

export interface ViewTransformResult {
    contents: string[];
    deps?: Record<string, string>;
    scope?: Record<string, string>;
    options?: Record<string, boolean>;
    partialStore?: Record<string, boolean>;
}

export interface PathContext {
    scope: string;
    path: string | undefined;
}

export interface TransformContext {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export interface TransformResult {
  contents: string[],
  inlineDeps: Record<string, string>,
  viewDeps: Record<string, string>,
  libDeps: Record<string, string>,
  options: Record<string, string>,
  partialStore: Record<string, string>,
  props: Record<string, string>
}

export interface ViewTransformFn {
    ( node: HTMLElement, context: ViewTransformContext ): TransformResult;
}
