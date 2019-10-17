import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import { createStore, compose } from 'redux';
import App from './routes/App';
import NotFound from './containers/NotFound'
import Footer from './components/Footer'
//import reducer from './reducers';


//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  
//const store = createStore(reducer, initialState, composeEnhancers());


ReactDOM.render(<App />, document.getElementById('app')
);