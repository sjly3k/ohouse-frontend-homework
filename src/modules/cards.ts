import { createAsyncAction, ActionType, createReducer } from "typesafe-actions";
import { AxiosError } from "axios";
import { getCards } from "../lib/api";
import { takeEvery, call, put } from "redux-saga/effects";

export type Card = {
  id: number;
  image_url: string;
  nickname: string;
  profile_image_url: string;
  isBookmarked: boolean;
};

const GET_CARDS = "cards/GET_CARDS";
const GET_CARDS_SUCCESS = "cards/GET_CARDS_SUCCESS";
const GET_CARDS_FAILURE = "cards/GET_CARDS_FAILURE";

export const getCardsAsync = createAsyncAction(
  GET_CARDS,
  GET_CARDS_SUCCESS,
  GET_CARDS_FAILURE
)<number, Card[], AxiosError>();

function* getCardsSaga(action: ReturnType<typeof getCardsAsync.request>) {
  try {
    const { data } = yield call(getCards, action.payload);
    const mappedCard = data.map((card: Card) => ({
      ...card,
      isBookmarked: false,
    }));
    yield put(getCardsAsync.success(mappedCard));
  } catch (e) {
    console.log(e);
    yield put(getCardsAsync.failure(e));
  }
}

export function* cardsSaga() {
  yield takeEvery(GET_CARDS, getCardsSaga);
}

const actions = { getCardsAsync };
type CardsAction = ActionType<typeof actions>;

type CardsState = {
  cards: Card[];
  error: Error | null;
};

const initialState: CardsState = {
  cards: [],
  error: null,
};

const cards = createReducer<CardsState, CardsAction>(initialState, {
  [GET_CARDS]: (state) => ({
    ...state,
    error: null,
  }),
  [GET_CARDS_SUCCESS]: (state, { payload: cards }) => ({
    ...state,
    error: null,
    cards: state.cards.concat(cards),
  }),
  [GET_CARDS_FAILURE]: (state, { payload: error }) => ({
    ...state,
    error: error,
  }),
});

export default cards;
