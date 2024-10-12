/*
export * from './libs/decl-components';
export * from './libs/decl-runtime-components';
export * from './libs/jsx-components';
export * from './libs/models';
*/

// class-components
export * from './esm/ComponentClassExample';

// decl-components
export * from './esm/SimpleButton';
export * from './esm/SimpleCheckbox';
export * from './esm/SimpleTextbox';

// decl-runtime-components
export * from './esm/ComponentRtExample';

// js-components
export * from './esm/ComponentJsExample';

// jsx-components
export * from './esm/SimpleList';
export * from './esm/SimpleCommandBar';

// TODO: move it out later
export * from './libs/decl-runtime-components';

export { registerCommandViewModel } from './libs/jsx-components/commands/commands.service';
export type { CommandViewModelJson } from './libs/jsx-components/commands/commands.type';
