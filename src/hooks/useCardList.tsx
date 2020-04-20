import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { GET_CARDS, getCardsAsync, addPage } from "../modules/cards";
import { useCallback } from "react";

export default function useCardList() {
  const {
    cards: { cards, scrapCards, error, filter, page, isLastPage },
    loading,
  } = useSelector((state: RootState) => ({
    ...state,
    loading: state.loading[GET_CARDS],
  }));

  const dispatch = useDispatch();
  const onGetCards = useCallback(
    (page: number) => dispatch(getCardsAsync.request(page)),
    [dispatch]
  );
  const onAddPage = useCallback(() => dispatch(addPage()), [dispatch]);

  return {
    cards,
    scrapCards,
    error,
    filter,
    page,
    isLastPage,
    loading,
    onGetCards,
    onAddPage,
  };
}
