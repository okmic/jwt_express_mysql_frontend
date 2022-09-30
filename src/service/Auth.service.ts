import $api from "../http";
import {AxiosResponse} from "axios"
import { AuthResponseType } from "../models/Auth.responce";

export default class AuthService {

    static async login(email:string, password: string): Promise<AxiosResponse<AuthResponseType>> {
        return $api.post<AuthResponseType>('/login', {email, password})
    }

    static async registration(email:string, password: string): Promise<AxiosResponse<AuthResponseType>> {
        return $api.post<AuthResponseType>('/registration', {email, password})
    }

    static async logout(): Promise<AxiosResponse<void>> {
        return $api.post('/logout')
    }
}