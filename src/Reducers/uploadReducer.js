export default function(state = {}, action) {
  switch (action.type) {
    case "UPLOAD_PDF_FORMDATA":
      for (var [key, value] of action.payload.entries()) {
        console.log(key, value);
      }
      console.log("i'm here");
      return action.payload;
    default:
      return state;
  }
}
