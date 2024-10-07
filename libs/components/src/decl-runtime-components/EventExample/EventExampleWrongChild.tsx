import { Component } from '@headless/types';
import { defineComponentDeclViewSync } from '@headless/core';
import { EventExampleWrongChildViewModel } from '../../models';

export const EventExampleWrongChild = defineComponentDeclViewSync(EventExampleWrongChildViewModel) as unknown as Component;
export default EventExampleWrongChild;
