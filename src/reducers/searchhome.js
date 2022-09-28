export const initialState = {
  other: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_OTHER':
      return {
        ...state,
        other: true,
      };
    default:
      return state;
  }
};

export default reducer;
