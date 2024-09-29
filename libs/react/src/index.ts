export * from './reactUtils';

// add to globalThis
import * as react from './';

const globalSwf = globalThis as unknown as { swf: { [key: string]: unknown } };

globalSwf.swf = {
  ...globalSwf.swf,
  react
}
