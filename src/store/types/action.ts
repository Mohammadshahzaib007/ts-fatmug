import { CLOSE_SNACKBAR, OPEN_SNACKBAR } from "../actions/actionTypes";
import { SnackbarState } from "./types";

export interface OpenSnackbar {
    type: typeof OPEN_SNACKBAR,
    payload: SnackbarState
}

export interface CloseSnackbar {
    type: typeof CLOSE_SNACKBAR,
}

export type snackbarActionTypes = OpenSnackbar | CloseSnackbar;

export type AppActionTypes = snackbarActionTypes