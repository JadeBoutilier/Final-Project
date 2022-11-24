import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleMapsProvider } from './GoogleMapsContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleMapsProvider>
    <App />
    </GoogleMapsProvider>
  </React.StrictMode>
);