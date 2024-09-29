import { defineComponentDecl } from '@headless/react';
import { FunctionType, registerLibDeps, registerViewDeps } from '@headless/core';
import LoadPanelExampleView from './viewmodel/loadPanelExampleViewModel.json';
import LoadPanelView from './viewmodel/loadPanelViewModel.json';
import commandViewModel from './commandViewModel.json';

// js
import * as loadPanelExampleService from './js/loadPanelService'
registerLibDeps('js/loadPanelService', loadPanelExampleService as Record<string, FunctionType>)

// command
registerCommandViewModel( commandViewModel);

// view
import { SimpleList, registerCommandViewModel } from '@headless/components';
registerViewDeps('SimpleList', SimpleList);
registerViewDeps('LoadPanel', defineComponentDecl(LoadPanelView));

export const LoadPanelExample = defineComponentDecl(LoadPanelExampleView);