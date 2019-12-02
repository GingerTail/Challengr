export default function(state = {}, action) {
  switch (action.type) {
    case "UPLOAD_PDF":
      console.log(action.payload);
      return {
        ...state,
        pdf: action.payload
      };
    default:
      return state;
  }
}
