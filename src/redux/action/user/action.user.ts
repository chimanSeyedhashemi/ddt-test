import { Action } from "redux";
import { IUser } from "../../../model/model.user";
import { EACTIONS } from "../../actionsEnum";

export interface UserAction extends Action<EACTIONS> {
  payload: IUser | null;
}