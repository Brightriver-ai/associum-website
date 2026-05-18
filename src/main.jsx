import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.scss';

window.addEventListener('error', (event) => {
  const root = document.getElementById('root');
  if (!root) return;
  root.innerHTML = `<pre style="padding:24px;font:14px/1.5 monospace;white-space:pre-wrap;color:#b00020;background:#fff">Runtime error:\n${event.message}\n\n${event.filename}:${event.lineno}:${event.colno}</pre>`;
});

window.addEventListener('unhandledrejection', (event) => {
  const root = document.getElementById('root');
  if (!root) return;
  const reason = event.reason instanceof Error ? event.reason.stack || event.reason.message : String(event.reason);
  root.innerHTML = `<pre style="padding:24px;font:14px/1.5 monospace;white-space:pre-wrap;color:#b00020;background:#fff">Unhandled rejection:\n${reason}</pre>`;
});

import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
