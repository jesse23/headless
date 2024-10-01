import { registerViewDeps } from '@headless/core';
import LoadPanelExampleView from './viewmodel/loadPanelExampleViewModel.json';
import LoadPanelView from './viewmodel/loadPanelViewModel.json';
import commandViewModel from './commandViewModel.json';

// js
// registerLibDeps('js/loadPanelService', import('./js/loadPanelService'));

// command
registerCommandViewModel( commandViewModel);

// view
import { SimpleList, registerCommandViewModel } from '@headless/components';
registerViewDeps('SimpleList', SimpleList);
registerViewDeps('LoadPanel', LoadPanelView);

export const LoadPanelExample = LoadPanelExampleView;