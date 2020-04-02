import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '../reducers';
import { rootSaga } from '../sagas';

let store: any;

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    sagaMiddleware,
    // logger,
  ];

  store = createStore(rootReducer, applyMiddleware(...middleware));

  sagaMiddleware.run(rootSaga);
  return store;
};
