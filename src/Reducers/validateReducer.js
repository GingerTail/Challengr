export default function(state = {}, action) {
  switch (action.type) {
    case "VALIDATE_FILE":
      return {
        ...state,
        validate: action.payload
      };
    default:
      return state;
  }
}
