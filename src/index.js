import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import Stores from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={Stores}>
      <App />
    </Provider>
  </React.StrictMode>
);

// <React.StrictMode></React.StrictMode> it will give us double value
// if we remove <React.StrictMode></React.StrictMode> so we will get only one value in console