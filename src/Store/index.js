import thunk from "redux-thunk";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import challengeListReducer from "../Reducers/challengeListReducer";
import filterReducer from "../Reducers/filterReducer";
import quizReducer from "../Reducers/quizReducer";
import uploadReducer from "../Reducers/uploadReducer";
import validateReducer from "../Reducers/validateReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  challengeList: {
    challenges: [],
    numberOfChallenges: 0
  },
  filter: {
    languages: [],
    difficulty: [],
    type: []
  },
  quizTest: [1, 2, 3],

  quiz: {
    time: 0,
    questions: [],
    author: ""
  },
  demo: {
    description: "",
    pdfLink: "",
    author: ""
  },
  pdf: [],
  validate: null
};

const bigReducer = combineReducers({
  challengeList: challengeListReducer,
  filter: filterReducer,
  quiz: quizReducer,
  pdf: uploadReducer,
  validate: validateReducer
});

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
