export default function(state = {}, action) {
  switch (action.type) {
    case "ADD_PDF_LINK":
      console.log(action.payload);
      return {
        ...state,
        pdfLink: action.payload
      };
    case "ADD_DEMO_DESCRIPTION":
      return {
        ...state,
        description: action.payload
      };
    default:
      return state;
  }
}
