export const initialState = {
  openConfimModal: false,
  description: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'OPEN_CONFIRM_MODAL':
      return {
        ...state,
        openConfimModal: true,
        description: action.description,
      };
    case 'CLOSE_CONFIRM_MODAL':
      return {
        ...state,
        openConfimModal: false,
        description: '',
      };
    default:
      return state;
  }
};

export default reducer;
