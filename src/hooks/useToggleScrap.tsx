import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { toggleScrapCard, Card } from "../modules/cards";

export default function useToggleScrap(card: Card) {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(toggleScrapCard(card)), [dispatch, card]);
}
