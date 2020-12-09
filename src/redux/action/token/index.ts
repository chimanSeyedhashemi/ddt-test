import { IToken } from "../../../model/model.token"
import { EACTIONS } from "../../actionsEnum"
import { TokenAction } from "./action.token"


export function action_set_token(token: IToken): TokenAction {
    return {
        type: EACTIONS.SET_TOKEN,
        payload: token
    }
}

export function action_remove_token(): TokenAction {
    return {
        type: EACTIONS.REMOVE_TOKEN,
        payload: null
    }
}