export * from './utils';
export * from './actions';
export * from './hooks';
export * from './events';
export * from './types';
export * from './utils';
export * from './deps';
export * from './views';

// add to globalThis
import * as core from './';

const globalSwf = globalThis as unknown as { swf: { [key: string]: unknown } };

globalSwf.swf = {
  ...globalSwf.swf,
  core
}