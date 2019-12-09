export default function(state = {}, action) {
  switch (action.type) {
    case "START_CHALLENGE":
      return {
        ...state,
        check: action.payload.check,
        tab: action.payload.tab
      };
    default:
      return state;
  }
}
