import { Component } from '@headless/types';
// NOTE: this import will have side effect
// import { DataExampleViewModel } from '../models';
import { DataExampleViewModel } from '../models/DataExampleViewModel';
import { defineComponentDeclViewSync } from '@headless/core';

export const DataExample = defineComponentDeclViewSync(DataExampleViewModel) as unknown as Component;
export default DataExample;
