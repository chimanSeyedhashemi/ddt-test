
import { IUser } from "../../../model/model.user";
import { EACTIONS } from "../../actionsEnum";
import { UserAction } from "./action.user";

export function action_user_logged_in(user: IUser): UserAction {
  return {
    type: EACTIONS.LOGGED_IN,
    payload: user,
  };
}

export function action_user_logged_out(): UserAction {
  return {
    type: EACTIONS.LOGGED_OUT,
    payload: null,
  };
}
