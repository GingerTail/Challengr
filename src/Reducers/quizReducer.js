export default function(state = {}, action) {
  switch (action.type) {
    case "ADD_QUESTION":
      return {
        ...state,
        questions: [...state.questions, action.payload]
      };
    case "ADD_WRONG":
      return {
        ...state,
        questions: [
          ...state.questions.slice(0, action.payload.id),
          {
            ...state.questions[action.payload.id],
            answers: [
              //prima parte dell'array originale
              ...state.questions[action.payload.id].answers.slice(
                0,
                action.payload.index
              ), //value aggiornato qua
              action.payload.value,
              ...state.questions[action.payload.id].answers.slice(
                action.payload.index + 1
              )
            ]
          },
          ...state.questions.slice(action.payload.id + 1)
        ]
      };
    case "ADD_CORRECT":
      return {
        ...state,
        questions: [
          ...state.questions.slice(0, action.payload.id),
          {
            ...state.questions[action.payload.id],
            correctAnswer: action.payload.value
          },
          ...state.questions.slice(action.payload.id + 1)
        ]
      };
    case "ADD_TITLE":
      return {
        ...state,
        questions: [
          ...state.questions.slice(0, action.payload.id),
          {
            ...state.questions[action.payload.id],
            question: {
              text: action.payload.value,
              image: action.payload.image || ""
            }
          },
          ...state.questions.slice(action.payload.id + 1)
        ]
      };
    default:
      return state;
  }
}
