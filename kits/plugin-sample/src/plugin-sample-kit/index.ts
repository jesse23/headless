import { registerLibDeps, registerViewDeps } from '@headless/core';
import { defineComponentDecl } from '@headless/react';
import PluginPanelView from './viewmodel/pluginPanelViewModel.json';
import commandViewModel from './commandViewModel.json';

// js
registerLibDeps('js/pluginPanelService', import('./js/pluginPanelService'));

// view
import { SimpleList, registerCommandViewModel } from '@headless/components';
registerViewDeps('SimpleList', SimpleList);
registerViewDeps('LoadPanel', defineComponentDecl(PluginPanelView));

// command
registerCommandViewModel( commandViewModel);