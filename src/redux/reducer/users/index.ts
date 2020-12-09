import { IUser } from "../../../model/model.user";
import { UsersAction } from "../../action/users/action.users";
import { EACTIONS } from "../../actionsEnum";

const defaultState: Array<IUser> = [
  { name: "Gholi", phone: "01236", id: "1", username: "gholi" },
  { name: "Gholi1", phone: "01234", id: "2", username: "gholi1" },
  { name: "Gholi2", phone: "01235", id: "3", username: "gholi2" },
];

export function reducer(
  state: Array<IUser> = defaultState,
  action: UsersAction
): Array<IUser> {
    
  switch (action.type) {
    case EACTIONS.UPDATE_USERS:
      return action.payload;
    default:
      return state ? state : defaultState;
  }
}
