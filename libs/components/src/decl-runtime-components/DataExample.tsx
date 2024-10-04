import { DataExampleViewModel } from '../models';
import { Component, defineComponentDeclViewSync } from '@headless/core';

export const DataExample = defineComponentDeclViewSync(DataExampleViewModel) as unknown as Component;
export default DataExample;
