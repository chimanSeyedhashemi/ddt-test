import React from "react";
import { Route } from "react-router-dom";
import { General } from "./general";

export const RouteGeneral = ({ component: Component, ...rest }: { [key: string]: any }) => {
    return (
        <Route {...rest} render={matchProps => (
            <General {...matchProps}>
                <Component {...matchProps} />
            </General>
        )} />
    )
};