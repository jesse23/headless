
import '@headless/reactivity/stencil';
import { EventExampleContainerViewModel } from "@headless/components/models";
import { defineComponentDeclViewSync } from '@headless/core';
import { removeImports } from '@headless/reactivity/stencil';

// note: need to remove imports since it is using web-component
export const EventExampleContainer = defineComponentDeclViewSync(removeImports(EventExampleContainerViewModel));
// export default EventExampleContainer;
