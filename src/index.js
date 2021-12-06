import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import movies from './reducers';


const store = createStore(movies);
console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
