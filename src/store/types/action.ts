import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, CLOSE_SNACKBAR, OPEN_SNACKBAR } from "../actions/actionTypes";
import { SnackbarState } from "./types";

// FOR SNACKBAR
export interface OpenSnackbar {
    type: typeof OPEN_SNACKBAR,
    payload: SnackbarState
}

export interface CloseSnackbar {
    type: typeof CLOSE_SNACKBAR,
}

export type snackbarActionTypes = OpenSnackbar | CloseSnackbar;

// FOR AUTHENTICATION
export interface AuthStart {
    type: typeof AUTH_START
}

export interface AuthSuccess {
    type: typeof AUTH_SUCCESS,
    payload: {email: string, password: string}
}

export interface AuthFail {
    type: typeof AUTH_FAIL,
    error: Error
}

export type AuthActionTypes = AuthStart | AuthSuccess | AuthFail

export type AppActionTypes = snackbarActionTypes | AuthActionTypes