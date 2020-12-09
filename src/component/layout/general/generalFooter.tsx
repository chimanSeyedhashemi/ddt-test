import React from "react";
import { Localization } from "../../../config/localization/localization";

export class GeneralFooter extends React.Component {
    render() {
        return (
            <>
                <footer className="general-footer-wrapper bg-info">
                    <small className="text">{Localization.ddt_test} developed by Chiman</small>
                </footer>
            </>
        )
    }
}