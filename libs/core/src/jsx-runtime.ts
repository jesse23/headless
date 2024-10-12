
const exports = {
  jsx: () => {
    throw new Error('jsx is not implemented');
  },
  jsxs: () => {
    throw new Error('jsxs is not implemented');
  },
  Fragment: () => {
    throw new Error('Fragment is not implemented');
  },
} as Record<string, unknown>;

export function registerJsxRuntime(entry: { jsx: unknown; jsxs: unknown; Fragment: unknown }) {
  exports.jsx = entry.jsx;
  exports.jsxs = entry.jsxs;
  exports.Fragment = entry.Fragment;
}

exports.registerJsxRuntime = registerJsxRuntime;

export default exports;