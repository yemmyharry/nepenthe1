const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
        return state.map((post)=> post._id === action.payload._id ? action.payload : post )

    case "FETCH_ALL":
      return [...state, action.payload];

    case "CREATE":
      return [...state, action.payload];

    default:
      return state;
  }
};
