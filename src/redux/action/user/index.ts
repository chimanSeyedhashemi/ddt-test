
import { IUser } from "../../../model/model.user";
import { EACTIONS } from "../../actionsEnum";
import { UserAction } from "./action.user";

    /**
* login user and add to redux store
*
* @remarks
* This method is part of the {@link core-library#redux-action | TDD subsystem}.
*
* @param user - The first input is user
* @returns - the user action
*
* @beta
*/

export function action_user_logged_in(user: IUser): UserAction {
  return {
    type: EACTIONS.LOGGED_IN,
    payload: user,
  };
}

    /**
* delete user from redux
*
* @remarks
* This method is part of the {@link core-library#redux-action | TDD subsystem}.
*
* @param user - The first input is user
* @returns - the user action
*
* @beta
*/

export function action_user_logged_out(): UserAction {
  return {
    type: EACTIONS.LOGGED_OUT,
    payload: null,
  };
}
