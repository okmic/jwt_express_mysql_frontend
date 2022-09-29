import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    value: number
  }
  
  const initialState: AuthState = {
    value: 0,
  }
  
  export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
      }
    },
  })
  
  export const { incrementByAmount } = AuthSlice.actions
  
  export default AuthSlice.reducer