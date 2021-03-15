// snackbar state types
export interface SnackbarState {
    open: boolean,
    color: 'error' | 'warning' | 'info' | 'success' | '',
    msg: string
}

// authentication state type
export interface AuthState {
    userName: string | null | undefined,
    token: string | null | undefined | Promise<string>,
    userId: string | null | undefined
    error: string | null,
    isLoading: boolean
}

// for post
export interface Posts {
    blogs: Array<{
        heading:string,
        description: string,
        author: string,
        createdAt: Date,
        imageUrl: string
    }>
}