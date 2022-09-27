export const initialState = {
  email: '',
  password: '',
  logged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_EMAIL':
      return {
        ...state,
        email: action.email,
      };
    case 'GET_PASSWORD':
      return {
        ...state,
        password: action.password,
      };
    case 'GET_CONNEXION':
      return {
        ...state,
        logged: true,
        email: '',
        password: '',
      };
    default:
      return state;
  }
};

export default reducer;
