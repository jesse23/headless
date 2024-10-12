// overall shared store for the app
// will provide update function later

const _ctx = {} as Record<string, unknown>;

export const getConfigs = <T>(key: string): T => {
    return _ctx[key] as T;
};

export const setConfigs = <T>(key: string, value: T) => {
    _ctx[key] = value;
}

// hook it to the window object
const global = globalThis as unknown as {
  swf: { ctx: unknown };
};

// TODO: need a more secure way
global.swf = {
  ...global.swf,
  ctx: _ctx,
};
