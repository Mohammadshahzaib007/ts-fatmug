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

export const authSuccess = (payload: {
    userName: string | null | undefined,
    token: string | null | undefined | Promise<string>,
    userId: string | null | undefined
}): AppActionTypes => {
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

                    const currentUser = auth.currentUser
                    console.log(name)
                    dispatch(authSuccess({
                        userName: name,
                        userId: response.user?.uid,
                        token: currentUser?.getIdToken()
                    }))

                    //FOR SHOWING SUCCESS MESSAGE 
                    dispatch(openSnackbar({
                        color: "success",
                        open: true,
                        msg: "Signup successful"
                    }))
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

            const currentUser = auth.currentUser

            dispatch(authSuccess({
                userName: currentUser?.displayName,
                userId: currentUser?.uid,
                token: currentUser?.getIdToken()
            }))

            //FOR SHOWING SUCCESS MESSAGE 
            dispatch(openSnackbar({
                color: "success",
                open: true,
                msg: "Login successful"
            }))
        })
            .catch((err: Error) => {
                console.log(err);
                dispatch(openSnackbar({ color: "error", open: true, msg: err.message }))
                dispatch(authFail(err))
            });

    }
}
