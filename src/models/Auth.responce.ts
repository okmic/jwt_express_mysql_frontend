export type IUserType = {
    id: string
    email: string
    isActivated: boolean
}

export type AuthResponseType = {
    accessToken: string
    refreshToken: string
    user: IUserType
}