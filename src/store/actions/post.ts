import { Dispatch } from "redux"
import { AppState } from ".."
import { database, storage } from "../../firebase"
import { AppActionTypes } from "../types/action"
import { ADD_POST, DELETE_POST } from "./actionTypes"
import { openSnackbar } from "./snackbar"

export const addPost = () => {
    return {
        type: ADD_POST,
       
    }
}

export const deletePost = () => {
    return {
        type: DELETE_POST
    }
}



// ASYNCHRONOUS ACTION CREATOR WITH THE HELP OF REDUX-THUNK
export const onAddPost = (heading: string, description: string, image: Blob | null, imageName: string) => {
    return (dispatch: Dispatch<AppActionTypes>, getState: () => AppState) => {
        /* @ts-ignore */ 
        const uploadTask = storage.ref(`/images/${imageName}`).put(image);
        uploadTask.on("state_changed", console.log, console.error, () => {
            storage
                .ref("images")
                .child(imageName)
                .getDownloadURL()
                .then((url) => {
                    const postRef = database.ref('blogs');
                    postRef.push({
                        heading: heading,
                        description: description,
                        createdAt: new Date().toISOString(),
                        imageUrl: url,
                        author: getState().auth.userName,
                        userId: getState().auth.userId //user uuid
                    }).then(() => {
                        dispatch(openSnackbar({color: 'success', open: true, msg: 'Post was successfully added'}))
                    }).catch(() => {
                        dispatch(openSnackbar({color: 'error', open: true, msg: 'Something went wrong please try agin later!'}))
                    });
                });
        });

    }
}