import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, CLOSE_SNACKBAR, OPEN_SNACKBAR, LOG_OUT_START, LOG_OUT_SUCCESS, LOG_OUT_FAIL, ADD_POST, DELETE_POST } from "../actions/actionTypes";
import { Posts, SnackbarState } from "./types";

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
    payload: {
        userName: string | null | undefined,
        token: string | null | undefined | Promise<string>,
        userId: string | null | undefined,
    }
}

export interface AuthFail {
    type: typeof AUTH_FAIL,
    error: Error
}

export interface LogOutStart {
    type: typeof LOG_OUT_START,
}

export interface LogOutSuccess {
    type: typeof LOG_OUT_SUCCESS,
}

export interface LogOutFail {
    type: typeof LOG_OUT_FAIL,
    error: Error
}

export type AuthActionTypes = AuthStart | AuthSuccess | AuthFail | LogOutStart | LogOutSuccess | LogOutFail

// FOR POST
export interface AddPost {
    type: typeof ADD_POST,
    payload: Posts
}

export interface DeletePost {
    type: typeof DELETE_POST
}

export type PostActionTypes = AddPost | DeletePost

export type AppActionTypes = snackbarActionTypes | AuthActionTypes | PostActionTypes