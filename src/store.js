import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
