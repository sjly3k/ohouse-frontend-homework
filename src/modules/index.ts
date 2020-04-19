import { combineReducers } from "redux";
import loading from "./loading";
import cards from "./cards";
import { all } from "redux-saga/effects";
import { cardsSaga } from "./cards";

const rootReducer = combineReducers({
  loading,
  cards,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([cardsSaga()]);
}
