import axios from "axios";
import apiUrl from "./apiUrl";

function client<T>(url: string, data: any) {
    if (!data) {
        return axios.get(url);
    }
    return axios.post<T>(apiUrl(url), data)
}

export {client}