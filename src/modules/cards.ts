import {
  createAsyncAction,
  ActionType,
  createReducer,
  createAction,
} from "typesafe-actions";
import { AxiosError } from "axios";
import { getCards } from "../lib/api";
import { takeEvery, call, put, select } from "redux-saga/effects";
import { startLoading, finishLoading } from "./loading";
import * as localStorageUtil from "../lib/localStorageUtil";

export const GET_CARDS = "cards/GET_CARDS";
export const GET_CARDS_SUCCESS = "cards/GET_CARDS_SUCCESS";
export const GET_CARDS_FAILURE = "cards/GET_CARDS_FAILURE";

export const TOGGLE_SCRAP_CARD = "cards/TOGGLE_SCRAP_CARD";
export const ADD_SCRAP_CARD = "cards/ADD_SCRAP_CARD";
export const REMOVE_SCRAP_CARD = "cards/REMOVE_SCRAP_CARD";

export const TOGGLE_FILTER_ONLY_SCRAP = "cards/TOGGLE_FILTER_ONLY_SCRAP";

export const getCardsAsync = createAsyncAction(
  GET_CARDS,
  GET_CARDS_SUCCESS,
  GET_CARDS_FAILURE
)<number, Card[], AxiosError>();

export const toggleScrapCard = createAction(TOGGLE_SCRAP_CARD)<Card>();
export const addScrapCard = createAction(ADD_SCRAP_CARD)<Card>();
export const removeScrapCard = createAction(REMOVE_SCRAP_CARD)<number>();

export const toggleFilterOnlyScrap = createAction(TOGGLE_FILTER_ONLY_SCRAP)();

const actions = {
  getCardsAsync,
  toggleScrapCard,
  addScrapCard,
  removeScrapCard,
  toggleFilterOnlyScrap,
};
type CardsAction = ActionType<typeof actions>;

function* getCardsSaga(action: ReturnType<typeof getCardsAsync.request>) {
  yield put(startLoading(GET_CARDS));
  try {
    const { data } = yield call(getCards, action.payload);

    const scrapCards: Card[] = yield select((state) => state.cards.scrapCards);

    const nextCards = data.map((card: Card) => {
      const isBookmarked = scrapCards.find(
        (scrapCard) => scrapCard.id === card.id
      );
      return {
        ...card,
        isBookmarked,
      };
    });

    yield put(getCardsAsync.success(nextCards));
  } catch (e) {
    console.log(e);
    yield put(getCardsAsync.failure(e));
  }
  yield put(finishLoading(GET_CARDS));
}

function* toggleScrapCardSaga({
  payload: card,
}: ReturnType<typeof toggleScrapCard>) {
  const nextCard = { ...card, isBookmarked: !card.isBookmarked };

  if (nextCard.isBookmarked) {
    yield put({
      type: ADD_SCRAP_CARD,
      payload: nextCard,
    });
  } else {
    yield put({
      type: REMOVE_SCRAP_CARD,
      payload: nextCard.id,
    });
  }
}

function* addScrapCardSaga({ payload: card }: ReturnType<typeof addScrapCard>) {
  yield call(localStorageUtil.addScrapCard, card);
}

function* removeScrapCardSaga({
  payload: id,
}: ReturnType<typeof removeScrapCard>) {
  yield call(localStorageUtil.removeScrapCard, id);
}

export function* cardsSaga() {
  yield takeEvery(GET_CARDS, getCardsSaga);
  yield takeEvery(TOGGLE_SCRAP_CARD, toggleScrapCardSaga);
  yield takeEvery(ADD_SCRAP_CARD, addScrapCardSaga);
  yield takeEvery(REMOVE_SCRAP_CARD, removeScrapCardSaga);
}

export type Card = {
  id: number;
  image_url: string;
  nickname: string;
  profile_image_url: string;
  isBookmarked: boolean;
};

type CardsState = {
  cards: Card[];
  scrapCards: Card[];
  error: Error | null;
  filter: {
    onlyScrap: boolean;
  };
};

const initialState: CardsState = {
  cards: [],
  scrapCards: localStorageUtil.getScrapCards(),
  error: null,
  filter: {
    onlyScrap: false,
  },
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
  [TOGGLE_SCRAP_CARD]: (state, { payload: card }) => ({
    ...state,
    cards: state.cards.map((prevCard) =>
      prevCard.id === card.id
        ? { ...prevCard, isBookmarked: !prevCard.isBookmarked }
        : prevCard
    ),
  }),
  [ADD_SCRAP_CARD]: (state, { payload: card }) => ({
    ...state,
    scrapCards: state.scrapCards.concat(card),
  }),
  [REMOVE_SCRAP_CARD]: (state, { payload: id }) => ({
    ...state,
    scrapCards: state.scrapCards.filter((card) => card.id !== id),
  }),
  [TOGGLE_FILTER_ONLY_SCRAP]: (state) => ({
    ...state,
    filter: {
      ...state.filter,
      onlyScrap: !state.filter.onlyScrap,
    },
  }),
});

export default cards;
