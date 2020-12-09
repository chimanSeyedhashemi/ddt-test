import React from "react"
import { Localization } from '../../../config/localization/localization';
import { IUser } from "../../../model/model.user";
import { AppButton } from "../../form/button";
import { IGiphy } from "./search";


export const columnDef = function () {


    const cellTitle = (giph: IGiphy) => {
        return giph.title
    }
    const cellUserName = (user: IGiphy) => {
        return user.username
    }

    const cellRating = (user: IGiphy) => {
        return user.rating
    }

    return [
        {
            title: "Rating",
            key: "rating",
            displayValue: (user: IGiphy) => { return cellRating(user) }
        },
        {
            title: "Title",
            key: "title",
            displayValue: (user: IGiphy) => { return cellTitle(user) }
        },
        {
            title: Localization.username,
            key: "username",
            displayValue: (user: IGiphy) => { return cellUserName(user) }
        },


    ]
}
