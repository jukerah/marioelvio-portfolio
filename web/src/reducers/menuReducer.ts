import { reducerActionType } from "../types/reducerActionType";

export type MenuType = { status: boolean };

export const menuInitialState: MenuType = { status: false };

export const menuReducer = (state: MenuType, action: reducerActionType) => {
  if (action.type === "CHANGE_MENU") return { ...state, status: action.payload.status };
  return state;
};
