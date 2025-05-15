import { PayloadAction } from "@reduxjs/toolkit";
import { RegisterForSaga, User } from "../slices/RegisterSlice";
import axios from "axios";
import { call, takeLatest } from "redux-saga/effects";

function* registerSaga(action: PayloadAction<User>) {
  console.log("Сага активирована");
  try {
    const response = yield call(
      axios.post,
      "http://localhost:8080/register",
      action.payload
    );
    console.log("Пользователь зарегистрирован", response.data);
  } catch (error) {
    console.log("Ошибка при регистрации", error);
  }
}

export function* watchRegisterSaga() {
  yield takeLatest(RegisterForSaga, registerSaga);
}
