import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/hintSlice";
import sendReducer from "./slices/sendIngredientsSlice";
import { registerReducer } from "./slices/RegisterSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    search: searchReducer,
    send: sendReducer,
    register: registerReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
