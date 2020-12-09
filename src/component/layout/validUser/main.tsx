import { connect, MapDispatchToProps } from 'react-redux';
import { Dispatch } from 'redux';
import { BaseComponent } from '../../base/baseComponent';
import { History } from "history";
import { IReduxState } from '../../../redux/appState';
import { GeneralHeader } from '../general/generalHeader';
import React from 'react';
import { GeneralFooter } from '../general/generalFooter';
import { AppRoute } from '../../../config/route/base.route';
import { Link } from 'react-router-dom';

interface IProps {
    history: History;
    match: any;
}

interface IState { }

class LayoutMainComponent extends BaseComponent<IProps, IState> {

    render() {
        return (
            <>
                <div className="valid-layout-wrapper d-flex">
                    <GeneralHeader />
                    <div className="main-valid-layout">
                        <aside className="sidebar">
                            <ul>
                                {AppRoute.getRoutes().map(route => {
                                    return (<li className="mb-1 pl-3" key={route.name}><Link to={route.path}>{route.name}</Link></li>)
                                })}
                            </ul>
                        </aside>
                        <div className="m-2 w-100">
                            {this.props.children}
                        </div>

                    </div>
                    <GeneralFooter />
                </div>
            </>
        )
    }
}

const dispatch2props: MapDispatchToProps<{}, {}> = (dispatch: Dispatch) => {
    return {}
}

const state2props = (state: IReduxState) => {
    return {}
}

export const LayoutMain = connect(state2props, dispatch2props)(LayoutMainComponent);
