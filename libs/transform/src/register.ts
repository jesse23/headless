import { createRenderFn } from './view';

const global = globalThis as unknown as {
  swf: { [key: string]: unknown };
};

global.swf = {
  ...global.swf,
  transform: {
    // only view transform is needed
    createRenderFn,
  },
};
