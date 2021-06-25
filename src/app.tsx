import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthRoute from "./route/authRoute";
import routes from "./route/routes";

const App = () => {
    return <BrowserRouter>
        <Switch>
            <Route path={routes.login}></Route>
            <AuthRoute path={routes.default}></AuthRoute>
            <AuthRoute path={routes.home}></AuthRoute>
        </Switch>
    </BrowserRouter>
}

export default App;