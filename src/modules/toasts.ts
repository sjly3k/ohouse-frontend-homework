import { ActionType, createReducer, createAction } from "typesafe-actions";

export const ADD_TOAST = "TOAST/ADD_TOAST";
export const REMOVE_TOAST = "TOAST/REMOVE_TOAST";

export const addToast = createAction(ADD_TOAST)<string>();
export const removeToast = createAction(REMOVE_TOAST)<number>();

const actions = {
  addToast,
  removeToast,
};
type ToastAction = ActionType<typeof actions>;

export type Toast = {
  id: number;
  text: string;
};

type ToastState = Toast[];

const initialState: ToastState = [];

const toasts = createReducer<ToastState, ToastAction>(initialState, {
  [ADD_TOAST]: (state, { payload: text }) =>
    state.concat({
      id: Math.floor(Math.random() * 9999999),
      text,
    }),
  [REMOVE_TOAST]: (state, { payload: id }) =>
    state.filter((toast) => toast.id !== id),
});

export default toasts;
