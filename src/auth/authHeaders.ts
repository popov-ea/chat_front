import authService from "./authService"

const authHeaders = () => {
    return {
        "Authorization": `Bearer ${authService.getAuthToken()}`
    }
}

export default authHeaders;