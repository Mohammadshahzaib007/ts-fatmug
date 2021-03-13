import { snackbarState } from "../types/types"

const snackbarInitialState : snackbarState = {
    open: false,
    color: '',
    msg: ''
}

const snackbarReducer = (state = snackbarInitialState, action) => {
    return state
}

export default snackbarReducer