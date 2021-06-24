import React, { createContext, useContext, useEffect, useState } from "react";
import { client } from "../api/client";
import authService from "../auth/authService";

interface User {
    id: number,
    userName: string,
    token: string
}

interface AuthState {
    state: "pending" | "success" | "error",
    error: string,
    user: User
}


const AuthContext = createContext<AuthState>({state: "pending", error: null, user: null});

const AuthProvider = (props) => {
    const [state, setState] = useState<AuthState>({
        state: "pending",
        user: null,
        error: null
    });

    useEffect(() => {
        const token = authService.getAuthToken();
        if (!token) {
            setState({
                state: "success",
                user: null,
                error: null
            });
            return;
        }

        client("auth/verify")
            .then(() => {
                const userInfo = authService.getUserInfo();
                setState({
                    state: "success",
                    user: {token, userName: userInfo.userName, id: userInfo.userId},
                    error: null
                });
            })
            .catch((err) => {
                setState({
                    state: "error",
                    user: null,
                    error: err
                })
            });
    })

    if (state.state === "pending") {
        return <div>loading...</div>;
    }

    return <AuthContext.Provider value={state}>{props}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext);

export {
    AuthContext,
    AuthProvider,
    useAuth
}