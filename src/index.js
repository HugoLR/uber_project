import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers } from 'redux';
import { accountReducer } from './reducers/index';
import { reducer as formReducer } from 'redux-form'
import 'bootstrap/dist/css/bootstrap.css'


import App from './routes/App';

const initialState = {
  'user': {},
  'ride': {},
  'favoritePlaces':[],
  'driver':{}, 
  'form': formReducer
};

const reducers = {
  user: accountReducer,
  form:formReducer
}

const rootReducer = combineReducers(reducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('app'),
);
