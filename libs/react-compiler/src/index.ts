export * from './compiler';

// add to globalThis
import * as compiler from './';

const globalSwf = globalThis as unknown as { swf: { [key: string]: unknown } };

globalSwf.swf = {
  ...globalSwf.swf,
  react: {
    ...(globalSwf.swf.react as object),
    compiler
  }
}
