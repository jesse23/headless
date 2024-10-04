import { EventExampleCorrectChildViewModel } from '../../models';
import { Component, defineComponentDeclViewSync } from '@headless/core';

export const EventExampleCorrectChild = defineComponentDeclViewSync(EventExampleCorrectChildViewModel) as unknown as Component;
export default EventExampleCorrectChild;
