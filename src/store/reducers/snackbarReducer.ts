import { snackbarActionTypes } from "../types/action"
import { SnackbarState } from "../types/types"
import * as actionTypes from '../actions/actionTypes'

const snackbarInitialState: SnackbarState = {
    open: false,
    color: '',
    msg: ''
}

const snackbarReducer = (state = snackbarInitialState, action: snackbarActionTypes): SnackbarState => {
    switch (action.type) {
        case actionTypes.OPEN_SNACKBAR:
            return {
                open: action.payload.open,
                color: action.payload.color,
                msg: action.payload.msg
            }
        case actionTypes.CLOSE_SNACKBAR:
            return {
                open: false,
                color: '',
                msg: ''
            }

        default:
            return state
    }
}

export default snackbarReducer