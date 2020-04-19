import { useSelector } from "react-redux";
import { RootState } from "../modules";
import { GET_CARDS } from "../modules/cards";

export default function useCardList() {
  const {
    cards: { cards, scrapCards, error, filter },
    loading,
  } = useSelector((state: RootState) => ({
    ...state,
    loading: state.loading[GET_CARDS],
  }));

  return {
    cards,
    scrapCards,
    error,
    filter,
    loading,
  };
}
