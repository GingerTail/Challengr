export default function(state = {}, action) {
    switch (action.type) {
      case "STORE_DATA":
        return {
          ...state,
          challengeList: [...action.payload]
        };
        default:
            return state;
        }
    }