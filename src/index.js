import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';

import './index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';

//Currying logger
const logger = function({dispatch, getState}){
  return function(next){
    return function(action){
      // Middleware Operations
      console.log("Action_Type = ", action.type);
      next(action);
    }
  }
}

const store = createStore(rootReducer, applyMiddleware(logger));
ReactDOM.render(
  <React.StrictMode>
    <App store ={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
