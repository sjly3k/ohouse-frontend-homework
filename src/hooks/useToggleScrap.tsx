import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { toggleScrap, Card } from "../modules/cards";

export default function useToggleScrap(card: Card) {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(toggleScrap(card)), [dispatch, card]);
}
