import { defineComponentDecl } from '@headless/react'
import { registerLibDeps, registerViewDeps } from '@headless/core';

// js

//// Only needed for UI builder
registerLibDeps('js/buttonExampleService', import('./js/buttonExampleService'));
registerLibDeps('js/commandExampleService', import('./js/commandExampleService'));

// view
import VmoSampleFormView from './viewmodel/vmoSampleFormViewModel.json';
import ButtonExampleView from './viewmodel/buttonExampleViewModel.json';
import CommandExampleView from './viewmodel/commandExampleViewModel.json';
import FormExampleView from './viewmodel/formExampleViewModel.json';
import PanelExampleView from './viewmodel/panelExampleViewModel.json';

const ButtonExample = defineComponentDecl(ButtonExampleView);
const FormExample = defineComponentDecl(FormExampleView);
const PanelExample = defineComponentDecl(PanelExampleView);
const CommandExample = defineComponentDecl(CommandExampleView);
const VmoSampleForm = defineComponentDecl(VmoSampleFormView);

// view deps registration
//// Only should be needed for UI builder case For now needed for view deps.
import { SimpleButton, SimpleCheckbox, SimpleTextbox, SimpleCommandBar, registerCommandViewModel } from '@headless/components';
import { LoadPanelExample } from '@headless/kit-sample';

registerViewDeps('SimpleButton', SimpleButton);
registerViewDeps('SimpleTextbox', SimpleTextbox);
registerViewDeps('SimpleCheckbox', SimpleCheckbox);
registerViewDeps('SimpleCommandBar', SimpleCommandBar);
registerViewDeps('VmoSampleForm', VmoSampleForm);
registerViewDeps('ButtonExample', ButtonExample);

// command
import commandViewModel from './commandViewModel.json';
registerCommandViewModel( commandViewModel);

// export
// export * from './js/buttonExampleService'
// as a app kit, only external view needs to be exported
export {
  FormExample,
  PanelExample,
  LoadPanelExample,
  CommandExample,
}
