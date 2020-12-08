import React from "react"
import { Route } from "react-router-dom";
import { Layout } from "./layout";

export const RouteLayoutValidUser = ({ ...rest }: { [key: string]: any }) => {
    return (
        <Route {...rest} render={matchProps => (
            <Layout {...matchProps} />
        )} />
    )
};
