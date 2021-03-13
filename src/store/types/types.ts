
export interface SnackbarState  {
    open: boolean,
    color: 'error' | 'warning' | 'info' | 'success' | '',
    msg: string
}
