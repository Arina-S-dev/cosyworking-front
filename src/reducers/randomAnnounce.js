export const initialState = {
  randomannounce: [],
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE_RANDOM_ANNOUNCES':
      return {
        ...state,
        randomannounce: action.randomannounce,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
