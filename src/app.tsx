import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthRoute from "./route/authRoute";
import routes from "./route/routes";
import { Container, Box } from "@material-ui/core";
import Login from "./components/login";

const App = () => {
    return <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="95vh">
        <Container maxWidth="lg">
            <BrowserRouter>
                <Switch>
                    <Route path={routes.login} component={Login}></Route>
                    <AuthRoute path={routes.default}></AuthRoute>
                    <AuthRoute path={routes.home}></AuthRoute>
                </Switch>
            </BrowserRouter>
        </Container>
    </Box>
}

export default App;