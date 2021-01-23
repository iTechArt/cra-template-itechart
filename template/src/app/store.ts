import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "../ducks/rootReducer";
import { rootSaga } from "../ducks/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(sagaMiddleware);

export const store = createStore(rootReducer, composeWithDevTools(middlewares));

sagaMiddleware.run(rootSaga);
