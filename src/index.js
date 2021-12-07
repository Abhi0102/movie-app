import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import combineReducers from './reducers';


const store = createStore(combineReducers);
ReactDOM.render(
  <React.StrictMode>
    <App store ={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
