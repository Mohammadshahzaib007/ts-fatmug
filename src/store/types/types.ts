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
export interface Blog {
    key: string,
    author: string;
    createdAt: string;
    description: string;
    heading: string;
    imageUrl: string;
    userId: string;
}

export interface Posts {
    blogs: Array<Blog>
}
