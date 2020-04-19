import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { toggleScrap } from "../modules/cards";

export default function useToggleScrap(id: number) {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(toggleScrap(id)), [dispatch, id]);
}
