export default function(state = {}, action) {
  switch (action.type) {
    case "START_CHALLENGE":
      return {
        ...state,
        check: action.payload.check,
        tab: action.payload.tab
      };
    case "STORE_CONTENT":
      console.log(action.payload);
      return {
        ...state,
        challenge: action.payload
      };
    default:
      return state;
  }
}
