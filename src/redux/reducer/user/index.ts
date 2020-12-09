import { IUser } from "../../../model/model.user";
import { UserAction } from "../../action/user/action.user";
import { EACTIONS } from "../../actionsEnum";

export function reducer(
  state: IUser | null | undefined,
  action: UserAction
): IUser | null {
  switch (action.type) {
    case EACTIONS.LOGGED_IN:
      return action.payload;
    case EACTIONS.LOGGED_OUT:
      return action.payload;
    default:
      return state ? state : null;
  }
}
