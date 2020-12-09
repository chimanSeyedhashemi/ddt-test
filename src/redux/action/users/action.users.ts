import { Action } from "redux";
import { IUser } from "../../../model/model.user";
import { EACTIONS } from "../../actionsEnum";

export interface UsersAction extends Action<EACTIONS> {
  payload: Array<IUser>;
}