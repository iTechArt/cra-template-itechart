import { put, takeEvery, all } from "redux-saga/effects";
import { COUNTER_ACTIONS } from "./types";
import { delay } from "../../utils";
import { addAmount } from "./actions";

function* incrementAsync() {
  yield delay(1000);
  yield put({ type: COUNTER_ACTIONS.INCREMENT });
}

function* addAmountAsync(action: any) {
  yield delay(1000);
  yield put(addAmount(action.count));
}

export function* watchIncrementAsync() {
  yield takeEvery(COUNTER_ACTIONS.INCREMENT_ASYNC, incrementAsync);
}

export function* watchAddAsync() {
  yield takeEvery(COUNTER_ACTIONS.ADD_AMOUNT_ASYNC, addAmountAsync);
}

export default function* counterSaga() {
  yield all([
      watchIncrementAsync(),
      watchAddAsync()
  ])
}