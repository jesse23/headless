import { Component } from '@headless/types';
import { defineComponentDeclViewSync } from '@headless/core';
import { EventExampleCorrectChildViewModel } from '../../models';

export const EventExampleCorrectChild = defineComponentDeclViewSync(EventExampleCorrectChildViewModel) as unknown as Component;
export default EventExampleCorrectChild;
