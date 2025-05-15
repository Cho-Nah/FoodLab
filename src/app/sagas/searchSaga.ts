import { call, put, takeLatest } from "redux-saga/effects";
import { fetchIngredients, setIngredients } from "../slices/hintSlice";
import axios from "axios";

function* fetchIngredientsSaga(action: { payload: string }) {
  try {
    const response = yield call(axios.post, "http://localhost:8080", {
      ingredients: [action.payload],
    });
    yield put(setIngredients(response.data));
  } catch (error) {
    console.error("Ошибка загрузки ингредиентов", error);
  }
}

export function* hintWatcher() {
  yield takeLatest(fetchIngredients, fetchIngredientsSaga);
}
