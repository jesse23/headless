// decl component (pre compile)
import SimpleButton from './viewmodel/SimpleButtonViewModel.json';
import SimpleTextbox from './viewmodel/SimpleTextboxViewModel.json';
import SimpleCheckbox from './viewmodel/SimpleCheckboxViewModel.json';
export { SimpleButton, SimpleTextbox, SimpleCheckbox };

// react component
export { SimpleList } from './js/SimpleList';
export { SimpleCommandBar } from './js/SimpleCommandBar';

// js API
export { registerCommandViewModel } from './js/services/commands.services';
export type { CommandViewModelJson } from './js/services/commands.services';
