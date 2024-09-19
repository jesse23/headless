import { FunctionType } from "./types";

const _libDeps = {} as Record<string,Record<string, FunctionType>>;

/**
 * register libraries
 * 
 * @param libName name of the lib
 * @param deps lib implementation
 */
export const registerLibDeps = (libName: string, deps: Record<string, FunctionType>) => {
    _libDeps[libName] = deps;
};

/**
 * get libraries
 * 
 * @param libName name of the lib
 */
export const getLibDeps = (libName: string) => {
    return _libDeps[libName] || {};
}