import { persistStore } from 'redux-persist';
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";

import persistReducers from "./modules/reduxPersist";

import rootReducer from "./modules/rootReducer"; 
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistReducers(rootReducer), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;