export default function(state = {}, action) {
  switch (action.type) {
    case "SET_CURRENT_TAB":
      return action.payload;
    default:
      return state;
  }
}
