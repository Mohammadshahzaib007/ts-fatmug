import { Dispatch } from "redux"
import { AppActionTypes, AuthFail, AuthStart, LogOutStart, LogOutFail, LogOutSuccess } from "../types/action"
import { AUTH_FAIL, AUTH_START, AUTH_SUCCESS, LOG_OUT_START, LOG_OUT_FAIL, LOG_OUT_SUCCESS } from "./actionTypes"

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

export const logOutStart = (): LogOutStart => {
    return {
        type: LOG_OUT_START
    }
}
export const logOutSuccess = (): LogOutSuccess => {
    return {
        type: LOG_OUT_SUCCESS
    }
}
export const logOutFail = (error: Error): LogOutFail => {
    return {
        type: LOG_OUT_FAIL,
        error: error,
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

export const authLogOut = () => {
    return (dispatch: Dispatch<AppActionTypes>) => {
        auth.signOut().then(_response => {
            dispatch(openSnackbar({ color: 'success', open: true, msg: 'Logout succesful' }))
        }).catch((error: Error) => {
            dispatch(logOutFail(error))

            dispatch(openSnackbar(
                {
                    color: 'error',
                    open: true,
                    msg: 'Something went wrong please try agin later'
                }))
        })
    }
}

export const onAuthChange = () => {
    return (dispatch: Dispatch<AppActionTypes>) => {
        auth.onAuthStateChanged(user => {
            if (user) {
                dispatch(authSuccess({
                    userName: user.displayName,
                    userId: user?.uid,
                    token: user?.getIdToken()
                }))
            } else {
                dispatch(authSuccess({
                    userName: null,
                    userId: null,
                    token: null
                }))
            }
        })
    }
}