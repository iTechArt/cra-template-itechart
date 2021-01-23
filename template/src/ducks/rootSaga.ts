import { all } from 'redux-saga/effects';
import counterSaga from './counter/sagas';

export function* rootSaga() {
    yield all([
        counterSaga(),
    ])
}
