import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { GET_CARDS, getCardsAsync } from "../modules/cards";
import { useCallback } from "react";

export default function useCardList() {
  const {
    cards: { cards, scrapCards, error, filter, page },
    loading,
  } = useSelector((state: RootState) => ({
    ...state,
    loading: state.loading[GET_CARDS],
  }));

  const dispatch = useDispatch();
  const getGetCards = useCallback(
    () => dispatch(getCardsAsync.request(page + 1)),
    [dispatch, page]
  );

  return {
    cards,
    scrapCards,
    error,
    filter,
    page,
    loading,
    getGetCards,
  };
}
