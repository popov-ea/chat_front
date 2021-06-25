import React from "react";
import { useAuth } from "../context/authContext";
import { Route, Redirect, RouteProps } from "react-router-dom"
import routes from "./routes";

const AuthRoute = (props: RouteProps) => {
    var authState = useAuth();
    var { children, ...rest } = props;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                authState.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: routes.login,
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default AuthRoute;
