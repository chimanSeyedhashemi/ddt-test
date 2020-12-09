import React from 'react';
import { Route } from 'react-router-dom';
import { MapDispatchToProps, connect } from 'react-redux';
import { Dispatch } from 'redux';

import { History } from "history";
import { IReduxState } from '../../../redux/appState';
import { GeneralHeader } from './generalHeader';
import { GeneralFooter } from './generalFooter';

interface IProps {
    history: History;
}

class GeneralComponent extends React.Component<IProps> {
    render() {
        return (
            <>
                <div className="general-layout-wrapper d-flex">
                    <GeneralHeader />
                    <div className="main-general-layout">
                    {this.props.children}
                    </div>
                    <GeneralFooter />
                </div>
            </>
        )
    }
}

const dispatch2props: MapDispatchToProps<{}, {}> = (dispatch: Dispatch) => {
    return {
    }
}

const state2props = (state: IReduxState) => {
    return {}
}

export const General = connect(state2props, dispatch2props)(GeneralComponent);
