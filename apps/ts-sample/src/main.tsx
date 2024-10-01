import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { registerViewStoreService } from '@headless/core';
import { mockViewStore } from './mockDeclServer/mockViewStoreService.ts';
import './index.css';

// plugin system
import '@headless/core/register';
import '@headless/view/register';
import '@headless/react/register';
import '@headless/components/register';
import './plugin';

registerViewStoreService(mockViewStore);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
