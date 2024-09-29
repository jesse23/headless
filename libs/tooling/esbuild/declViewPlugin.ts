import {Plugin} from 'esbuild';
import {transpileViewModelJson, transpileJson } from '../src';

export const declViewPlugin: Plugin = {
  name: 'declViewPlugin',
  setup(build) {
    // Load paths tagged with the "env-ns" namespace and behave as if
    // they point to a JSON file containing the environment variables.
    build.onLoad({ filter: /ViewModel.json$/ }, async (args) => {
      const jsonPath = args.path.replace(/\\/g, '/');
      const contents = jsonPath.endsWith('commandViewModel.json')
        ? await transpileJson(jsonPath)
        : await transpileViewModelJson(jsonPath);
      return {
        contents,
        loader: 'ts',
      };
    });
  },
};