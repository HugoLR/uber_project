import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers } from 'redux';
import { accountReducer, initialLocationReducer } from './reducers/index';
import { reducer as formReducer } from 'redux-form'
import 'bootstrap/dist/css/bootstrap.css';
import App from './routes/App';
import { LoadScript } from '@react-google-maps/api';

// Const
import { GOOGLE_MAPS_API_KEY }  from './constans/app'

const initialState = {
  'user': {},
  'initialLocation': null,
  'ride': {},
  'favoritePlaces':[],
  'driver':{}, 
  'form': formReducer
};

const reducers = {
  user: accountReducer,
  locations: initialLocationReducer,
  form:formReducer
}

const rootReducer = combineReducers(reducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <LoadScript
      id="script-loader"
      googleMapsApiKey={GOOGLE_MAPS_API_KEY}
      libraries={["places"]}
    >
      <App />
    </LoadScript>
  </Provider>
  ,
  document.getElementById('app'),
);
