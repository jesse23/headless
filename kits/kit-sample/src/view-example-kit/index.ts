import { registerViewDeps } from '@headless/core';
import LoadPanelView from './viewmodel/loadPanelViewModel.json';
import commandViewModel from './commandViewModel.json';

// js
// registerLibDeps('js/loadPanelService', import('./js/loadPanelService'));

import LoadPanelExample from './viewmodel/loadPanelExampleViewModel';
import VmoSampleForm from './viewmodel/vmoSampleFormViewModel';
import FormExample from './viewmodel/formExampleViewModel';

// view
import {
  SimpleButton,
  SimpleCheckbox,
  SimpleTextbox,
  SimpleList, registerCommandViewModel
} from '@headless/components';
registerViewDeps('SimpleButton', SimpleButton);
registerViewDeps('SimpleTextbox', SimpleTextbox);
registerViewDeps('SimpleCheckbox', SimpleCheckbox);
registerViewDeps('SimpleList', SimpleList);
registerViewDeps('LoadPanel', LoadPanelView);
registerViewDeps('VmoSampleForm', VmoSampleForm);

// command
registerCommandViewModel(commandViewModel);

export { FormExample, LoadPanelExample };