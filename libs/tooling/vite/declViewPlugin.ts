// https://github.com/vitejs/vite/issues/5370
// either we use approach below or we have to prebuild the tooling package
// import {transpileViewModelJson, transpileJson } from '@headless/tooling';
import {transpileJson, transpileViewModel } from '../utils';

// https://github.com/vitejs/vite/discussions/12788
export const declViewPlugin = ()/*: PluginOption*/ => {
  return {
    name: 'declViewPlugin',
    async load(id) {
      if (/^.*ViewModel\.json$/g.test(id)) {

        // TODO: in vite devServer, load will not resolve import statement correctly while in build it will
        // workaround for now
        const resolvedMap = {
          '@headless/core': (await this.resolve('@headless/core')).id,
        }
        /*
        console.log(await this.resolve('react'));
        */

        const jsonPath = id;
        const code = id.endsWith('commandViewModel.json')
          ? await transpileJson(jsonPath)
          : await transpileViewModel(jsonPath, resolvedMap);

        // NOTE: need to fix
        const htmlPath = jsonPath
          .replace('ViewModel.json', 'View.html')
          .replace('/viewmodel/', '/view/');
        this.addWatchFile(htmlPath);

        return { code };
      }
    },
    configResolved(resolvedConfig) {
      // skip vite:json since it will compile *ViewModel.json too
      resolvedConfig.plugins = resolvedConfig.plugins.filter(
        (p) => p.name !== 'vite:json'
      );
    },
  };
};