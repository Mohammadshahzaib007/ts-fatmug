import { snackbarActionTypes } from "../types/action"
import { SnackbarState } from "../types/types"

const snackbarInitialState : SnackbarState = {
    open: false,
    color: '',
    msg: ''
}

const snackbarReducer = (state = snackbarInitialState, action: snackbarActionTypes): SnackbarState => {
    return state
}

export default snackbarReducer