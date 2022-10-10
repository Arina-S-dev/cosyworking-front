export const initialState = {
  openConfimModal: false,
  buttonType: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'OPEN_CONFIRM_MODAL':
      return {
        ...state,
        openConfimModal: true,
        buttonType: action.buttonType,
      };
    case 'CLOSE_CONFIRM_MODAL':
      return {
        ...state,
        openConfimModal: false,
        buttonType: '',
      };
    default:
      return state;
  }
};

export default reducer;
