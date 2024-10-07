
export interface CompileContext {
    index: number;
    level: number;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    compileFn?: any;
    context?: string;
    toTemplate?: boolean;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    deps?: Record<string, any>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    props?: Record<string, any>;
}

export interface CompileResult {
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

export type TransformFn = ( node: HTMLElement, context: CompileContext ) => TransformResult;
