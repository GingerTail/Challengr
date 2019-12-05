import thunk from "redux-thunk";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import challengeListReducer from "../Reducers/challengeListReducer";
import filterReducer from "../Reducers/filterReducer";
import quizReducer from "../Reducers/quizReducer";
import uploadReducer from "../Reducers/uploadReducer";
import validateReducer from "../Reducers/validateReducer";
import generalSettingsReducer from "../Reducers/generalSettingReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  challengeList: {
    challenges: [],
    numberOfChallenges: 0
  },
  generalSettings: {
    languages: []
  },
  filter: {
    languages: [],
    difficulty: "",
    type: []
  },

  quiz: {
    time: 0,
    questions: [
      {
        title: "",
        correct: "",
        wrong: [""]
      }
    ],
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
  validate: validateReducer,
  generalSettings: generalSettingsReducer
});

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
