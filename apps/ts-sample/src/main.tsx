import '@headless/reactivity/react';

import { registerViewStoreService } from '@headless/core';
import { mockViewStore } from './mockDeclServer/mockViewStoreService.ts';
import App from './App.tsx'
import './index.css';

// plugin system
import '@headless/core/register';
import '@headless/transform/register';
import '@headless/interop/register';
import './plugin';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

registerViewStoreService(mockViewStore);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
