export default function(state = {}, action) {
  switch (action.type) {
    case "STORE_DATA":
      return {
        ...state,
        challengeList: [...action.payload]
      };
    case "FILTER_LANGUAGES":
        
      return {
        ...state,
        languages: [...action.payload]
      };
    case "FILTER_DIFFICULTY":
            return {
                ...state,
                difficulty: [...action.payload]
              };
    case "FILTER_TYPE":
            return {
                ...state,
                type: [...action.payload]
              };
    default:
      return state;
  }
}
