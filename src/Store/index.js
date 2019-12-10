import thunk from "redux-thunk";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import challengeListReducer from "../Reducers/challengeListReducer";
import filterReducer from "../Reducers/filterReducer";
import quizReducer from "../Reducers/quizReducer";
import uploadReducer from "../Reducers/uploadReducer";
import validateReducer from "../Reducers/validateReducer";
import generalSettingsReducer from "../Reducers/generalSettingReducer";
import StartChallengeReducer from "../Reducers/StartChallengeReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  challengeList: {
    challenges: [],
    numberOfChallenges: 0
  },
  generalSettings: {
    time: 300,
    author: "",
    difficulty: 1,
    content: [],
    description: "",
    languages: []
  },
  filter: {
    languages: [],
    difficulty: "",
    type: []
  },

  quiz: {
    time: 300,
    author: "",
    questions: [
      {
        question: {
          text: "",
          image: ""
        },
        correctAnswer: "",
        answers: [""]
      }
    ]
  },
  demo: {
    description: "",
    pdfLink: "",
    author: ""
  },
  pdf: [],
  validate: null,
  start: {
    check: false,
    tab: "1",
    challenge: {}
  }
};

const bigReducer = combineReducers({
  challengeList: challengeListReducer,
  filter: filterReducer,
  quiz: quizReducer,
  pdf: uploadReducer,
  start: StartChallengeReducer,
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
