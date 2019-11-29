import thunk from "redux-thunk";
import rootReducer from "../Reducers";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    challengeList: [1,2,3],
        languages:[],
        difficulty:[],
        type:[],
        quiz:[1, 2, 3]    
}

 

export default function configureStore() {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    )
}
