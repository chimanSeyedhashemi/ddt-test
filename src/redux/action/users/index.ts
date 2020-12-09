
import { IUser } from "../../../model/model.user";
import { EACTIONS } from "../../actionsEnum";
import { UsersAction } from "./action.users";

export function action_updateUsers(users: Array<IUser>): UsersAction {
  return {
    type: EACTIONS.UPDATE_USERS,
    payload: users,
  };
}

