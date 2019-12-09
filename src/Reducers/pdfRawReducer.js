export default function(state = {}, action) {
  switch (action.type) {
    case "UPLOAD_PDF_RAW":
      return action.payload;
    default:
      return state;
  }
}
