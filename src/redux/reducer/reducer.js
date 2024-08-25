let initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREAMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREAMENT":
      return { ...state, count: state.count - action.payload.num };
    default:
      return { ...state };
  }
}
export default reducer;
