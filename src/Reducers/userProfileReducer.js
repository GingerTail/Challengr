export default function(state = {}, action) {
  switch (action.type) {
    case "LOAD_LOGGED_USER":
      return action.payload;
    case "REMOVE_LOGGED_USER":
      return {};
    default:
      return state;
  }
}
