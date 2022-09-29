export const initialState = {
  email: '',
  password: '',
  logged: false,
  role_id: 'coworker',
  gender: '',
  last_name: '',
  first_name: '',
  error_connection: false,
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
    case 'SET_CONNEXION':
      return {
        ...state,
        // Cela permet d'enlever le message "Session expirée"
        error_connection: false,
      };
    case 'GET_CONNEXION':
      return {
        ...state,
        logged: action.logged,
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
    case 'CONNECTION_STATE':
      return {
        ...state,
        error_connection: action.error,
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
