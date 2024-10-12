import { ViewModelDefinition } from '@headless/types';
import { transform as transformViewModel } from './viewmodel';
import { transform as transformView } from './view';

/**
 * Transform DECL Component to JS Component content
 *
 * @param viewDef view model definition
 * @param node parsed view as HTMLElement
 * @returns component JS content as array of strings
 */
export const transformDeclComponent = (
  viewDef: ViewModelDefinition,
  node: HTMLElement
): string[] => {
  return [
    `
// component definition
const componentDef = ${transformViewModel(viewDef, {}).join('\n')};

// styles placeholder

// render function
componentDef.render = ${transformView(viewDef, node).join('\n')};

// define component
export const Component = defineComponent(componentDef); 
export default Component;
  `.trim(),
  ];
};