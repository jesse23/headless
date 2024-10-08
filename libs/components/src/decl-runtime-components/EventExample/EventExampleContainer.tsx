import { Component } from '@headless/types';
import { defineComponentDeclViewSync } from '@headless/core';
import { EventExampleWrongChild } from './EventExampleWrongChild';
import { EventExampleCorrectChild } from './EventExampleCorrectChild';
import { EventExampleContainerViewModel } from '../../models';

export const EventExampleContainer = defineComponentDeclViewSync(EventExampleContainerViewModel, {
  EventExampleWrongChild,
  EventExampleCorrectChild,
}) as unknown as Component;

export default EventExampleContainer;
