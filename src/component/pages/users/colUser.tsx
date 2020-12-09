import React from "react"
import { Localization } from '../../../config/localization/localization';
import { IUser } from "../../../model/model.user";
import { AppButton } from "../../form/button";


export const columnDef = function (
    deleteUser: (userId: string) => void,
    editUser: (user: IUser) => void
) {


    const cellName = (user: IUser) => {
        return user.name
    }
    const cellUserName = (user: IUser) => {
        return user.username
    }

    const cellPhone = (user: IUser) => {
        return user.phone
    }

    const cellMethod = (user: IUser) => {

        return (
            <div>
                <AppButton
                    onClick={() => { editUser(user) }}
                    className="btn-primary m-1">
                    {Localization.edit}

                </AppButton>

                <AppButton
                    onClick={() => { deleteUser(user.id) }}
                    className="btn-danger m-1">
                    {Localization.delete}
                </AppButton>

            </div>
        )


    }

    return [
        {
            title: Localization.name,
            key: "name",
            displayValue: (user: IUser) => { return cellName(user) }
        },
        {
            title: Localization.username,
            key: "username",
            displayValue: (user: IUser) => { return cellUserName(user) }
        },
        {
            title: Localization.phone,
            key: "phone",
            displayValue: (user: IUser) => { return cellPhone(user) }
        },
        {
            title: "",
            key: "method",
            displayValue: (user: IUser) => { return cellMethod(user) }
        },
    ]
}
