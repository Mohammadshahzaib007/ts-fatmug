import { createStore, compose, applyMiddleware,  } from 'redux';
// import userAuthReducer from './reducers/userAuthReducer';

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

// const rootReducer = combineReducers({
//   userAuth: userAuthReducer
// });

const initialState = {
    name: 'shahzaib'
}

const reducer = (state = initialState, _action: any) => {
    return state
}

const store = createStore(reducer, composeEnhancers(applyMiddleware()));

export default store;
