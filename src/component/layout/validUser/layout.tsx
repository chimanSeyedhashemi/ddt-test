import React from 'react';
import { connect } from 'react-redux';
import { History } from "history";
import { BrowserRouter as Router, Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import { EROUT } from '../../../config/route/routes';
import { RouteLayoutMain } from './routeLayputMain';
import { Users } from '../../pages/users/users';
import { IReduxState } from '../../../redux/appState';
import { IUser } from '../../../model/model.user';
import { Todo } from '../../pages/todo/todo';
import { Search } from '../../pages/search/search';
import { Profile } from '../../pages/profile/profile';

const appValidUserRoutes = (
    <HashRouter>
        <Switch>
            <Route exact path={EROUT.MAIN} component={() => <Redirect to={EROUT.USERS} />} />
            <RouteLayoutMain exact path={EROUT.USERS} component={Users} />
            <RouteLayoutMain exact path={EROUT.TODO} component={Todo} />
            <RouteLayoutMain exact path={EROUT.SEARCH} component={Search} />
            <RouteLayoutMain exact path={EROUT.PROFILE} component={Profile} />
        </Switch>
    </HashRouter>
);

interface IProps {
    history: History;
    match: any;
    logged_in_user: IUser | null
}

class LayoutValidUserComponent extends React.Component<IProps> {

    componentDidMount() {
        if (!this.props.logged_in_user) {
            this.props.history.push(EROUT.LOGIN);
        }
    }


    render() {
        return (
            <>
                <Router>{appValidUserRoutes}</Router>
            </>
        )

    }
}

const state2props = (state: IReduxState) => {
    return {
        logged_in_user: state.logged_in_user
    }
}

export const Layout = connect(state2props)(LayoutValidUserComponent);
