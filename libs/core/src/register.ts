import * as core from '.'; 

const global = globalThis as unknown as {
  swf: { [key: string]: unknown };
};

global.swf = {
  ...global.swf,
  core,
};
