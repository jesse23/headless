
export * from './view-example-kit';

// add to globalThis
import * as components from './';

const globalSwf = globalThis as unknown as { swf: { [key: string]: unknown } };

globalSwf.swf = {
  ...globalSwf.swf,
  components
}
