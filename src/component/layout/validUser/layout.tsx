import React from 'react';
import { connect } from 'react-redux';
import { History } from "history";
import { BrowserRouter as Router, Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import { EROUT } from '../../../config/routes';
import { RouteLayoutMain } from './routeLayputMain';
import { Users } from '../../pages/users/users';

const appValidUserRoutes = (
    <HashRouter>
        <Switch>
            <Route exact path={EROUT.MAIN} component={() => <Redirect to={EROUT.USERS} />} />
            <RouteLayoutMain exact path={EROUT.USERS} component={Users} />
        </Switch>
    </HashRouter>
);

interface IProps {
    history: History;
    match: any;
}

class LayoutValidUserComponent extends React.Component<IProps> {

    render() {
        return (
            <>
                <Router>{appValidUserRoutes}</Router>
            </>
        )

    }
}

const state2props = (state: any) => {
    return {}
}

export const Layout = connect(state2props)(LayoutValidUserComponent);
