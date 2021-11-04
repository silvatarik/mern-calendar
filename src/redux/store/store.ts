import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from '../reducers/rootReducer';


const composeEnhancers = composeWithDevTools({}) || compose;

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(createSagaMiddleware())
  ));