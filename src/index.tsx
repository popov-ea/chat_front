import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./context/authContext";
import App from "./app";

export default function index() {
    console.log("starting...");
    return <AuthProvider>
        <App></App>
    </AuthProvider>
}

ReactDOM.render(index(), document.body);