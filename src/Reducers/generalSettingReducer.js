export default function(state = {}, action) {
  switch (action.type) {
    case "UPDATE_DESCRIPTION":
      return {
        ...state,
        description: action.payload
      };
    case "UPDATE_DIFFICULTY":
      console.log(action.payload);
      let difficulty = 0;
      switch (action.payload) {
        case "easy":
          difficulty = 1;
          break;
        case "normal":
          difficulty = 2;
          break;
        case "hard":
          difficulty = 3;
          break;
        default:
          break;
      }
      console.log(difficulty);
      return {
        ...state,
        difficulty //difficulty: difficulty
      };
    case "UPDATE_LANGUAGES":
      return {
        ...state,
        languages: [...state.languages, action.payload]
      };
    case "CREATE_QUIZ_CONTENT":
      console.log(action.payload);
      return {
        ...state,
        content: [...state.content, action.payload]
      };
    default:
      return state;
  }
}
