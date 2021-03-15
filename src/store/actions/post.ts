import { Dispatch } from "redux"
import { AppState } from ".."
import { database, storage } from "../../firebase"
import { AppActionTypes } from "../types/action"
import { Blog } from "../types/types"
import { ADD_POST, DELETE_POST, FETCH_BLOGS } from "./actionTypes"
import { openSnackbar } from "./snackbar"

export const addPost = (): AppActionTypes => {
    return {
        type: ADD_POST,

    }
}

export const deletePost = (): AppActionTypes => {
    return {
        type: DELETE_POST
    }
}

export const fetchBlogs = (payload: Array<Blog>): AppActionTypes => {
    return {
        type: FETCH_BLOGS,
        payload: payload
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
                        dispatch(openSnackbar({ color: 'success', open: true, msg: 'Post was successfully added' }))
                    }).catch(() => {
                        dispatch(openSnackbar({ color: 'error', open: true, msg: 'Something went wrong please try agin later!' }))
                    });
                });
        });

    }
}

// fetching all the blogs for home page
export const onFetchBlogs = () => {
    return  (dispatch: Dispatch<AppActionTypes>, getState:() => AppState) => {
        let blogs: Array<Blog>
            = []
        // firebase database refrence
        const blogsRef = database.ref('blogs');
       blogsRef.on('value', (snapshot) => {
            const data = snapshot.val();

            Object.keys(data).map((key) => {
                blogs.push({
                    key: key,
                    author: data[key].author,
                    createdAt: data[key].createdAt,
                    description: data[key].description,
                    heading: data[key].heading,
                    imageUrl: data[key].imageUrl,
                    userId: data[key].userId
                });
            })
        })
        dispatch(fetchBlogs(blogs))
        console.log(getState().post.blogs)
    }
}
