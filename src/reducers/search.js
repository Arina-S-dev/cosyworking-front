export const initialState = {
  city: '',
  dates: [],
  filters: [],
  workspaces: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SEARCH_CITY':
      return {
        ...state,
        city: action.city,
      };

    default:
      return state;
  }
};

export default reducer;
