import { all } from "redux-saga/effects";
import { searchWatcher } from "./sendIngedientsSaga";
import { hintWatcher } from "./searchSaga";
import { watchRegisterSaga } from "./RegisterSaga";

export default function* rootSaga() {
  yield all([searchWatcher(), hintWatcher(), watchRegisterSaga()]);
}
