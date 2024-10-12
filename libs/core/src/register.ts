import * as core from '.'; 
import jsxRuntime from './jsx-runtime';

const global = globalThis as unknown as {
  swf: { [key: string]: unknown };
};

global.swf = {
  ...global.swf,
  core: {
    ...core,
    jsxRuntime,
  },
  // put dummy transform
  transform: global.swf?.transform || {},
};
