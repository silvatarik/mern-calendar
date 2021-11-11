import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';


const composeEnhancers = composeWithDevTools({}) || compose;

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

// Then run the saga
sagaMiddleware.run(rootSaga);