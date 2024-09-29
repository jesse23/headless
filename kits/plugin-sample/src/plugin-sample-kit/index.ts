import { FunctionType, registerLibDeps, registerViewDeps } from '@headless/core';
import { defineComponentDecl } from '@headless/react';
import PluginPanelView from './viewmodel/pluginPanelViewModel.json';
import commandViewModel from './commandViewModel.json';

// js
import * as loadPanelExampleService from './js/pluginPanelService'
registerLibDeps('js/pluginPanelService', loadPanelExampleService as Record<string, FunctionType>)

// view
import { SimpleList, registerCommandViewModel } from '@headless/components';
registerViewDeps('SimpleList', SimpleList);
registerViewDeps('LoadPanel', defineComponentDecl(PluginPanelView));

// command
registerCommandViewModel( commandViewModel);