import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';

//Currying logger
// const logger = function({dispatch, getState}){
//   return function(next){
//     return function(action){
//       // Middleware Operations
//       console.log("Action_Type = ", action.type);
//       next(action);
//     }
//   }
// }


const logger = ({dispatch, getState}) => (next) =>(action) => {
  if(typeof action!=='function'){
    console.log("Action_Type = ", action.type);
  }
  next(action);
}


// const thunk = ({dispatch, getState}) => (next) =>(action) => {
//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
ReactDOM.render(
  <React.StrictMode>
    <App store ={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
