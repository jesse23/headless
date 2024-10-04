import { EventExampleWrongChildViewModel } from '../../models';
import { Component, defineComponentDeclViewSync } from '@headless/core';

export const EventExampleWrongChild = defineComponentDeclViewSync(EventExampleWrongChildViewModel) as unknown as Component;
export default EventExampleWrongChild;
