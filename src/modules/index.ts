import { combineReducers } from "redux";
import loading from "./loading";
import cards from "./cards";
import toasts from "./toasts";
import { all } from "redux-saga/effects";
import { cardsSaga } from "./cards";

const rootReducer = combineReducers({
  loading,
  cards,
  toasts,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([cardsSaga()]);
}
