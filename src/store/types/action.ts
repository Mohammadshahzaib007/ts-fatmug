import { CLOSE_SNACKBAR, OPEN_SNACKBAR } from "../actions/actionTypes";
import { snackbarState } from "./types";

export interface openSnackbar {
    type: typeof OPEN_SNACKBAR,
    payload: snackbarState
}

export interface closeSnackbar {
    type: typeof CLOSE_SNACKBAR,
    payload: snackbarState
}

export type snackbarActionTypes = openSnackbar | closeSnackbar;

export type AppActionTypes = snackbarActionTypes