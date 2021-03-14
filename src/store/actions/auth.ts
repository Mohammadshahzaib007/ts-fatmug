import { Dispatch } from "redux"
import { AppActionTypes } from "../types/action"
import { AUTH_FAIL, AUTH_START, AUTH_SUCCESS } from "./actionTypes"

export const authStart = (): AppActionTypes => {
    return {
        type: AUTH_START
    }
}

export const authSuccess = (payload: { email: string, password: string }): AppActionTypes => {
    return {
        type: AUTH_SUCCESS,
        payload: payload
    }
}

export const authFail = (error: string): AppActionTypes => {
    return {
        type: AUTH_FAIL,
        error: error
    }
}

// ASYNCHRONOUS ACTION CREATOR WITH THE HELP OF REDUX-THUNK
export const auth = (email: string, password: string, name?: string) => {
    return (dispatch: Dispatch<AppActionTypes>) => {
        dispatch(authStart())
    }
}
