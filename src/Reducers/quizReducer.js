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
            wrong: [
              //prima parte dell'array originale
              ...state.questions[action.payload.id].wrong.slice(
                0,
                action.payload.name
              ), //value aggiornato qua
              action.payload.value,
              ...state.questions[action.payload.id].wrong.slice(
                action.payload.name + 1
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
            correct: action.payload.value
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
            title: action.payload.value
          },
          ...state.questions.slice(action.payload.id + 1)
        ]
      };
    default:
      return state;
  }
}
