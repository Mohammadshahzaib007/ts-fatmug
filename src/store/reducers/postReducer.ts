import { FETCH_BLOGS } from "../actions/actionTypes";
import { AppActionTypes } from "../types/action"
import { Posts } from "../types/types"

const postInitialState: Posts = {
    blogs: []
}

const postReducer = (state = postInitialState, action: AppActionTypes): Posts => {
    switch (action.type) {
        case FETCH_BLOGS:
            return {
                ...state,
                blogs: action.payload
            }

        default:
            return state

    }
}

export default postReducer