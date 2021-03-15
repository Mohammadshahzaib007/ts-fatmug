import { AppActionTypes } from "../types/action"
import { Posts } from "../types/types"

const postInitialState: Posts = {
    blogs: []
}

const postReducer = (state = postInitialState, action: AppActionTypes): Posts => {
    return state
}

export default postReducer