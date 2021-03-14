import { Dispatch } from "redux"
import { AppActionTypes, AuthFail, AuthStart } from "../types/action"
import { AUTH_FAIL, AUTH_START, AUTH_SUCCESS } from "./actionTypes"

import { auth } from '../../firebase'
import { openSnackbar } from "./snackbar"

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

export const authFail = (error: Error): AppActionTypes => {
    return {
        type: AUTH_FAIL,
        error: error
    }
}

// ASYNCHRONOUS ACTION CREATOR WITH THE HELP OF REDUX-THUNK
export const onAuth = (email: string, password: string, name?: string) => {
    return (dispatch: Dispatch<AppActionTypes>) => {
        dispatch(authStart())

        // FOR SIGN UP------------------------------------------
        if (name) {
            auth.createUserWithEmailAndPassword(email, password)
                .then(response => {
                    console.log(response);
                    response.user?.updateProfile({
                        displayName: name
                    })
                    dispatch(authSuccess({ email: email, password: password }))
                    dispatch(openSnackbar({ color: "success", open: true, msg: "Signup successful" }))
                })
                .catch((err: Error) => {
                    console.log(err);
                    dispatch(openSnackbar({ color: "error", open: true, msg: err.message }))
                    dispatch(authFail(err))
                });

            return
        }

        // FOR SIGN IN-----------------------------------------------------
        auth.signInWithEmailAndPassword(email, password).then(response => {
            console.log(response);

            dispatch(authSuccess({ email: email, password: password }))
            dispatch(openSnackbar({ color: "success", open: true, msg: "Login successful" }))
        })
            .catch((err: Error) => {
                console.log(err);
                dispatch(openSnackbar({ color: "error", open: true, msg: err.message }))
                dispatch(authFail(err))
            });

    }
}
