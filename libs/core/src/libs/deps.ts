import { FunctionType } from "@headless/types";

const _libDeps = {} as Record<string,Promise<Record<string, FunctionType>>>;

/**
 * register libraries
 * 
 * @param libName name of the lib
 * @param deps lib implementation
 */
export const registerLibDeps = (libName: string, deps: Promise<Record<string, FunctionType>>) => {
    _libDeps[libName] = deps;
};

/**
 * get libraries
 * 
 * @param libName name of the lib
 */
export const getLibDeps = async (libName: string) => {
    return (await _libDeps[libName]) || {};
}