import { IToken } from "../../../model/model.token";
import { TokenAction } from "../../action/token/action.token";
import { EACTIONS } from "../../actionsEnum";


export function reducer(
  state: IToken | null,
  action: TokenAction
): IToken | null {
  switch (action.type) {
    case EACTIONS.SET_TOKEN:
      return action.payload;
    case EACTIONS.REMOVE_TOKEN:
      return action.payload;
  }
  if (state) {
    return state;
  }
  return null;
}
