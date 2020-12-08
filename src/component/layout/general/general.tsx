import React from 'react';
import { Route } from 'react-router-dom';
import { MapDispatchToProps, connect } from 'react-redux';
import { Dispatch } from 'redux';

import { History } from "history";

interface IProps {
    history: History;
}

class GeneralComponent extends React.Component<IProps> {
    render() {
        return (
            <>
                {this.props.children}
            </>
        )
    }
}

const dispatch2props: MapDispatchToProps<{}, {}> = (dispatch: Dispatch) => {
    return {
    }
}

const state2props = (state: any) => {
    return {}
}

export const General = connect(state2props, dispatch2props)(GeneralComponent);
