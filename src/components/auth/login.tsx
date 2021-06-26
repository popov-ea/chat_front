import React, { useState } from "react";
import {
    TextField,
    makeStyles,
    Typography,
    Button
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import routes from "../../route/routes";

const useStyle = makeStyles((theme) => ({
    paper: {
        maxWidth: 400,
        minWidth: 300,
        margin: "auto",
        backgroundColor: "#fafafa",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        overflow: "hidden",
        height: 330,
        borderRadius: 5,
        boxShadow: "0 0 10px rgba(0,0,0,0.5)" 
    },
    titleContainer: {
        display: "flex",
        justifyContent: "center",
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: theme.palette.primary.light
    },
    title: {
        fontWeight: 500,
        fontSize: "2rem",
        color: theme.palette.primary.contrastText
    },
    input: {
        margin: "auto",
        paddingTop: 10,
        width: 300
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3)
    },
    sendBtn: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText
    }
}));

const Login = () => {
    const [state, setState] = useState({
        login: "",
        password: ""
    });
    const history = useHistory();

    const classes = useStyle();

    const inputHandler = (event) => {
        const id = event.target.id;
        setState({
            ...state,
            [id]: event.target.value
        })
    }

    const onRegisterClick = () => {
        history.push(routes.register);
    }

    return <div className={classes.paper}>
        <div className={classes.titleContainer}>
            <Typography className={classes.title}>
                Sign in
            </Typography>
        </div>
        <hr></hr>
        <TextField id="login"
            label="Login"
            required
            onInput={inputHandler}
            value={state.login}
            className={classes.input}
        />
        <TextField id="password"
            label="Password"
            type="password"
            onInput={inputHandler}
            required
            value={state.password}
            className={classes.input}
        />
        <div className={classes.buttonContainer}>
            <Button onClick={onRegisterClick}>Sign up</Button>
            <Button className={classes.sendBtn}>Done!</Button>
        </div>
    </div>;
};

export default Login;