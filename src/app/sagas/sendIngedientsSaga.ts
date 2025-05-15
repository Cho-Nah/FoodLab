import { call, put, takeLatest } from "redux-saga/effects";
import { sendIngredients, setRecipes } from "../slices/sendIngredientsSlice";
import axios from "axios";

function* sendIngredientsSaga(action: { payload: string }) {
  try {
    const response = yield call(axios.post, "http://localhost:8080/search", {
      ingredients: action.payload.split(" "),
    });
    yield put(setRecipes(response.data.recipes));
  } catch (error) {
    console.error("Ошибка загрузки ингредиентов", error);
  }
}

export function* searchWatcher() {
  yield takeLatest(sendIngredients, sendIngredientsSaga);
}
