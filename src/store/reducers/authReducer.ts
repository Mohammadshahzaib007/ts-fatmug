import * as actionTypes from '../actions/actionTypes'
import { AuthActionTypes } from '../types/action'
import { AuthState } from '../types/types'

const authIinitialState: AuthState = {
    userName: '',
    token: null,
    userId: '',
    error: null,
    isLoading: false
}

const authReducer = (state = authIinitialState, action: AuthActionTypes): AuthState => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                error: null,
                isLoading: true
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                userName: action.payload.userName,
                token: action.payload.token,
                userId: action.payload.userId,
                error: null,
                isLoading: false
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                error: action.error.message,
                isLoading: false
            }
        default:
            return state
    }
}

export default authReducer;