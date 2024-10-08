import { Component } from '@headless/types';
import { DataExampleViewModel } from '../models';
import { defineComponentDeclViewSync } from '@headless/core';

export const DataExample = defineComponentDeclViewSync(DataExampleViewModel) as unknown as Component;
export default DataExample;
