import React from "react";
import { Localization } from "../../../config/localization/localization";

export class GeneralHeader extends React.Component{
render(){
    return(
        <>
        <header className="general-header-wrapper p-1">
    <h4 className="text">{Localization.ddt_test}</h4>
        </header>
        </>
    )
}
}