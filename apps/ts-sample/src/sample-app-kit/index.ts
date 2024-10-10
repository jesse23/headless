import { registerLibDeps, registerViewDeps } from '@headless/core';

//// Only needed for UI builder
registerLibDeps('js/buttonExampleService', import('./js/buttonExampleService'));
registerLibDeps(
  'js/commandExampleService',
  import('./js/commandExampleService')
);

// view

import ButtonExample from './viewmodel/buttonExampleViewModel';
import CommandExample from './viewmodel/commandExampleViewModel';
import PanelExample from './viewmodel/panelExampleViewModel';

// view deps registratimn
//// Only should be needed for UI builder case For now needed for view deps.
import {
  SimpleButton,
  SimpleCommandBar,
  registerCommandViewModel,
  ComponentJsExample,
} from '@headless/components';
import { LoadPanelExample, FormExample, ComponentDeclExample } from '@headless/kit-sample';

registerViewDeps('SimpleButton', SimpleButton);
registerViewDeps('SimpleCommandBar', SimpleCommandBar);
registerViewDeps('ButtonExample', ButtonExample);

// command
import commandViewModel from './commandViewModel.json';
registerCommandViewModel(commandViewModel);

// export
// export * from './js/buttonExampleService'
// as a app kit, only external view needs to be exported
export { LoadPanelExample, FormExample, ComponentDeclExample, CommandExample, PanelExample, ComponentJsExample };
