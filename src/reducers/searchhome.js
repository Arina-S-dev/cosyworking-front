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
    case 'GET_DATE':
      return {
        ...state,
        date: action.date,
      };
    case 'GET_CITY':
      return {
        ...state,
        city: action.city,
      };
    default:
      return state;
  }
};

export default reducer;
