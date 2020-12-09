import React from "react"
import { HashRouter, Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { EROUT } from "../../config/route/routes";
import { RouteLayoutValidUser } from "../layout/validUser/routeLayoutValidUser";
import { RouteGeneral } from "../layout/general/routeGeneral";
import { Login } from "../pages/login/login";

const appRoutes = (
  <HashRouter>
    <Switch>
      <Route exact path={EROUT.MAIN} component={() => <Redirect to={EROUT.USERS} />} />
      <RouteLayoutValidUser exact path={EROUT.USERS} />
      <RouteLayoutValidUser exact path={EROUT.SEARCH} />
      <RouteLayoutValidUser exact path={EROUT.TODO} />
      <RouteLayoutValidUser exact path={EROUT.PROFILE} />
      <RouteGeneral path={EROUT.LOGIN} component={Login} />
      <RouteLayoutValidUser />
    </Switch>
  </HashRouter>
);

interface IProps {

}

class App extends React.Component<IProps>{
  render() {
    return (
      <>
        <Router>
          {appRoutes}
        </Router>
      </>
    )
  }
}

export {App};
