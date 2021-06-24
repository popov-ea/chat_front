import { client } from "../api/client";

interface LoginData {
    login: string,
    password: string
}

interface RegisterData {
    userName: string,
    login: string,
    password: string
}

interface LoginResult {
    userId: number,
    userName: string,
    token: string
}

interface UserInfo {
    userId: number,
    userName: string
}

const authTokenKey = "authToken";
const userInfoKey = "user";

const getAuthToken = (): string => {
    return localStorage.getItem(authTokenKey);
}

const getUserInfo = (): UserInfo => {
    return JSON.parse(localStorage.getItem(userInfoKey));
}

const handleLoginResult = (loginResult: LoginResult) => {
    localStorage.setItem(authTokenKey, loginResult.token);
    localStorage.setItem(authTokenKey, JSON.stringify({
        userId: loginResult.userId, 
        userName: loginResult.userName
    }));
}

const login = async (loginData: LoginData) :Promise<LoginResult> => {
    if (!loginData.login || !loginData.password) {
        throw new Error("Invalid data");
    }

    return client<LoginData>("auth/login", loginData)
        .then((response) => {
            const loginResult = response.data;
            handleLoginResult(loginResult);
            return loginResult;
        });
}

const register = async (registerData: RegisterData) => {
    if (!registerData.userName || !registerData.login || !registerData.password) {
        throw new Error("Invalid data");
    }

    return client<LoginResult>("auth/register", registerData)
        .then((response) => {
            const loginResult = response.data;
            handleLoginResult(loginResult);
            return loginResult;
        });
}



export default {
    getAuthToken,
    login,
    register,
    getUserInfo
}