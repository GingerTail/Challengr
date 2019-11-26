import thunk from "redux-thunk";
import rootReducer from "../Reducers";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    challengeList: [],
        languages:[],
        difficulty:[],
        type:[]
    
}

 

export default function configureStore() {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    )
}
