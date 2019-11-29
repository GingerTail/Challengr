export default function(state = {}, action) {
  switch (action.type) {
    case "ADD_QUESTION":
      return {
        ...state,
        questions: [...state.questions, action.payload]
      };
    default:
      return state;
  }
}
