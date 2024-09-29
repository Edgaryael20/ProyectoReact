import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App2.jsx';

import { AuthProvider } from './AuthContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider >
      <App></App>
    </AuthProvider>
  </React.StrictMode>
);
