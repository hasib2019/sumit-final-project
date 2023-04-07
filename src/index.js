/* eslint-disable no-unused-vars */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <NotificationContainer />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
