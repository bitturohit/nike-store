import './index.css';

import React from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { createRoot } from 'react-dom/client';

import App from './App';
import { store } from './store';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
  <Provider store={store}>
    <Toaster position="top-center" reverseOrder={false} />
    <App />
  </Provider>
);
