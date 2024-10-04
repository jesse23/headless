import { EventExampleWrongChild } from './EventExampleWrongChild';
import { EventExampleCorrectChild } from './EventExampleCorrectChild';
import { EventExampleContainerViewModel } from '../../models';
import { Component, defineComponentDeclViewSync } from '@headless/core';

export const EventExampleContainer = defineComponentDeclViewSync(EventExampleContainerViewModel, {
  EventExampleWrongChild,
  EventExampleCorrectChild,
}) as unknown as Component;

export default EventExampleContainer;
