import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { useCallback } from "react";
import { addToast, removeToast } from "../modules/toasts";

export default function useToast() {
  const toasts = useSelector((state: RootState) => state.toasts);

  const dispatch = useDispatch();

  const onAddToast = useCallback((text: string) => dispatch(addToast(text)), [
    dispatch,
  ]);
  const onRemoveToast = useCallback((id: number) => dispatch(removeToast(id)), [
    dispatch,
  ]);

  return { toasts, onAddToast, onRemoveToast };
}
