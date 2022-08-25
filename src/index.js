import React from 'react';
import ReactDOM from 'react-dom/client';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import App from './pages/App';
import { stores } from './store/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(stores, applyMiddleware(thunk))

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
