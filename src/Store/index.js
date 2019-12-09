import thunk from "redux-thunk";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import challengeListReducer from "../Reducers/challengeListReducer";
import filterReducer from "../Reducers/filterReducer";
import quizReducer from "../Reducers/quizReducer";
import uploadReducer from "../Reducers/uploadReducer";
import validateReducer from "../Reducers/validateReducer";
import generalSettingsReducer from "../Reducers/generalSettingReducer";
import demoReducer from "../Reducers/demoReducer";
import pdfRawReducer from "../Reducers/pdfRawReducer";

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
  pdfFormData: {},
  pdfRaw: {},
  validate: null
};

const bigReducer = combineReducers({
  challengeList: challengeListReducer,
  filter: filterReducer,
  quiz: quizReducer,
  demo: demoReducer,
  pdfFormData: uploadReducer,
  pdfRaw: pdfRawReducer,
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
