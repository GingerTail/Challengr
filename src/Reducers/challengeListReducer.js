export default function(state = {}, action) {
  switch (action.type) {
    case "STORE_DATA":
      return {
        numberOfChallenges: action.numberOfChallenges,
        challenges: [...action.challenges]
      };
    default:
      return state;
  }
}
