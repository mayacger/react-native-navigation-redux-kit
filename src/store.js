import { createStore, applyMiddleware } from 'redux';

import getRootReducer from "./Reducers";

import createSagaMiddleware from 'redux-saga';

import sagas from './Sagas';


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default function getStore() {
    const store = createStore(
        getRootReducer(),
        //applyMiddleware(thunk)
        //applyMiddleware(logger)
        applyMiddleware(sagaMiddleware)
    );

    // then run the saga
    sagaMiddleware.run(sagas)

    return store;
}
