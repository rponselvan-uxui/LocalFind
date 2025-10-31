import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// This path is now corrected:
import { AuthProvider } from './components/hooks/AuthContext'; 

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);