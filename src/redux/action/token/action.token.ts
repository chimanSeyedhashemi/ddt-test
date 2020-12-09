import { Action } from "redux";
import { IToken } from "../../../model/model.token";
import { EACTIONS } from "../../actionsEnum";

export interface TokenAction extends Action<EACTIONS> {
  payload: IToken | null;
}