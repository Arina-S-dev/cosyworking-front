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
    case 'ADD_FILTER':
      return {
        ...state,
        filters: [
          ...state.filters,
          action.filters,
        ],
      };
    case 'REMOVE_FILTER':
      return {
        ...state,
        filters: state.filters.filter((filter) => filter !== action.value),
      };

    default:
      return state;
  }
};

export default reducer;
