// snackbar state types
export interface SnackbarState {
    open: boolean,
    color: 'error' | 'warning' | 'info' | 'success' | '',
    msg: string
}

// authentication state type
export interface AuthState {
    token: null | string,
    userId: string,
    error: string | null,
    isLoading: boolean
}