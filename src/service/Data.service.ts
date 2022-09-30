import $api from "../http";
import {AxiosResponse} from "axios"
import { IUserType } from "../models/Auth.responce";

export default class DataService {

    static async getUsers(): Promise<AxiosResponse<Array<IUserType>>> {
        return $api.get<Array<IUserType>>('/users')
    }

}