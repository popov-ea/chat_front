import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./context/authContext";
import App from "./app";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme()

export default function index() {
    console.log("starting...");
    return <ThemeProvider theme={theme}>
        <AuthProvider value={null}>
            <App></App>
        </AuthProvider>
    </ThemeProvider>
}

ReactDOM.render(index(), document.getElementById("app"));