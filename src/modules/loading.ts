import { createAction, ActionType, createReducer } from "typesafe-actions";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

export const startLoading = createAction(START_LOADING)<string>();
export const finishLoading = createAction(FINISH_LOADING)<string>();

const actions = { startLoading, finishLoading };
type CardsAction = ActionType<typeof actions>;

type LoadingState = {
  [key: string]: boolean;
};
const initialState: LoadingState = {};

const loading = createReducer<LoadingState, CardsAction>(initialState, {
  [START_LOADING]: (state, { payload }) => ({
    ...state,
    [payload]: true,
  }),
  [FINISH_LOADING]: (state, { payload }) => ({
    ...state,
    [payload]: false,
  }),
});

export default loading;
