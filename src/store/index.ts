import { createStore, compose, applyMiddleware, combineReducers  } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import authReducer from './reducers/authReducer';
import postReducer from './reducers/postReducer';
import snackbarReducer from './reducers/snackbarReducer';
import { AppActionTypes } from './types/action';

/*
THIS SOLUTION HAS BEEN TAKEN FORM THE STACKOVERFLOW
@see = https://stackoverflow.com/questions/52800877/error-with-redux-devtools-extension-using-ts-property-redux-devtools-extens

*/ 
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// FOR REDUX DEV TOOL WITH ADVANCED CONFIGRATIONS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  auth: authReducer,
  post: postReducer
});

export type AppState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActionTypes>)));

export default store;
