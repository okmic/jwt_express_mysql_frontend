import {  createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUserType } from '../models/Auth.responce'


export interface AuthState {
  user: IUserType
  isAith: boolean
  isLoading: boolean
}

export type LoginType = {
  accessToken: string
  user: IUserType
  message?: any
}


const initialState: AuthState = {
  user: {} as IUserType,
  isAith: false,
  isLoading: false
}

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAith = action.payload
    },
    setUsers: (state, action: PayloadAction<IUserType>) => {
      state.user = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
        state.isLoading = action.payload
    }
  }
})

export const { setAuth, setUsers, setLoading } = AuthSlice.actions

export default AuthSlice.reducer
