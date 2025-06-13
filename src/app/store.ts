import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/hintSlice";
import sendReducer from "./slices/sendIngredientsSlice";
import { registerReducer } from "./slices/RegisterSlice";
import FavoriteSlice from "../app/slices/Favorite";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    search: searchReducer,
    send: sendReducer,
    register: registerReducer,
    favorite: FavoriteSlice,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
