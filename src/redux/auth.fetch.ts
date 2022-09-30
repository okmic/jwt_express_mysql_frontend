import axios from "axios"
import { API_URL } from "../http"
import { AuthResponseType, IUserType } from "../models/Auth.responce"
import AuthService from "../service/Auth.service"
import { setAuth, setLoading, setUsers } from "./auth.slice"

export async function fetchLogin(email: string, password: string, dispatch: any) {
    try {
        const response = await AuthService.login(email, password)
        console.log(response)
        localStorage.setItem("token", response.data.accessToken)
        dispatch(setAuth(true))
        dispatch(setUsers(response.data.user))
    } catch (e: any) {
        console.error(e.response?.data?.message)
    }
}

export async function fetchReginstration(email: string, password: string, dispatch: any) {
    try {
        const response = await AuthService.registration(email, password)
        console.log(response)
        localStorage.setItem("token", response.data.accessToken)
        dispatch(setAuth(true))
        dispatch(setUsers(response.data.user))
    } catch (e: any) {
        console.error(e.response?.data?.message)
    }
}

export async function fetchLogout(dispatch: any) {
    try {
        await AuthService.logout()
        localStorage.removeItem("token")
        dispatch(setAuth(false))
        dispatch(setUsers({} as IUserType))
    } catch (e: any) {
        console.error(e.response?.data?.message)
    }
}

export async function checkAuth(dispatch: any) {
    try {
        dispatch(setLoading(true))
        const response = await axios.get<AuthResponseType>(`${API_URL}/refresh`, { withCredentials: true })
        console.log(response)
        localStorage.setItem("token", response.data.accessToken)
        dispatch(setAuth(true))
        dispatch(setUsers(response.data.user))
    } catch (e: any) {
        console.error(e.response?.data?.message)
    } finally {
        dispatch(setLoading(false))
    }
}