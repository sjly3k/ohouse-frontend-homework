import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { toggleFilterOnlyScrap } from "../modules/cards";
import { RootState } from "../modules";

export default function useCardListFilter() {
  const filter = useSelector((state: RootState) => state.cards.filter);
  const dispatch = useDispatch();

  const onToggleFilterOnlyScrap = useCallback(
    () => dispatch(toggleFilterOnlyScrap()),
    [dispatch]
  );

  return {
    filter,
    onToggleFilterOnlyScrap,
  };
}
