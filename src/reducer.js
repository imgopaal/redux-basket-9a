export const initialState = {
  basket: [
    "Gopal",
    "Sagar",
    "Gopal",
    "Sagar",
    "Gopal",
    "Sagar",
    "Gopal",
    "Sagar",
  ],
  //   user: null,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { state };
    case "REMOVE_FROM_BACKET":
      return { state };
    default:
      return state;
  }
}
export default reducer;
