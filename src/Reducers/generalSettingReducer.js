export default function(state = {}, action) {
  switch (action.type) {
    case "UPDATE_DESCRIPTION":
      return {
        ...state,
        description: action.payload
      };
    case "UPDATE_DIFFICULTY":
      console.log(action.payload);
      return {
        ...state,
        difficulty: action.payload
      };
    case "UPDATE_LANGUAGES":
      return {
        ...state,
        languages: [...state.languages, action.payload]
      };
    default:
      return state;
  }
}
