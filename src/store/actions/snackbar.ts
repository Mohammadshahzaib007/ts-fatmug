import { snackbarActionTypes } from "../types/action"
import { snackbarState } from "../types/types"
import { CLOSE_SNACKBAR, OPEN_SNACKBAR } from "./actionTypes"


//SYNCHRONOUS ACTION CREATORS

// snackbar action creators
export const openSnackbar = (payload: snackbarState): snackbarActionTypes => {
    return {
        type: OPEN_SNACKBAR,
        payload: { open: payload.open, color: payload.color, msg: payload.msg },
    }
}

export const closeSnackbar = (): snackbarActionTypes => {
    return {
        type: CLOSE_SNACKBAR,
        payload: { open: false, color: '', msg: '' }
    }
}