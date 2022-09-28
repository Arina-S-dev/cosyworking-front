export const initialState = {
  email: '',
  password: '',
  logged: false,
  role_id: 'coworker',
  gender: '',
  last_name: '',
  first_name: '',
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
    case 'GET_SELECTEDROLE':
      return {
        ...state,
        role_id: action.role,
      };
    case 'GET_SELECTEDGENDER':
      return {
        ...state,
        gender: action.gender,
      };
    case 'GET_FIRSTNAME':
      return {
        ...state,
        first_name: action.firstname,
      };
    case 'GET_LASTNAME':
      return {
        ...state,
        last_name: action.lastname,
      };
    case 'LOGOUT':
      return {
        ...state,
        logged: false,
      };
    default:
      return state;
  }
};

export default reducer;
