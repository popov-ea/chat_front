import axios from "axios";
import apiUrl from "./apiUrl";

interface ClientParameters {
    data?: any,
    headers?: any
}

function client<T>(url: string, parameters: ClientParameters = null) {
    if (!parameters || !parameters.data) {
        return axios.get(url, {
            headers: parameters ? parameters.headers : null
        });
    }
    return axios.post<T>(apiUrl(url), parameters.data, {
        headers: parameters.headers
    });
}

export { client }