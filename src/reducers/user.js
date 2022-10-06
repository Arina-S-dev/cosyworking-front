export const initialState = {
  email: '',
  password: '',
  logged: false,
  role_id: 'coworker',
  user_id: '',
  gender: '',
  last_name: '',
  first_name: '',
  // avatar, username et about pour la page 'Mon Profil'
  avatar: '',
  username: '',
  about: '',
  error_connection: false,
  emailexistederror: false,
  passwordwrongformat: false,
  emailwrongformat: false,
  errorrequiredelement: false,
  statusinscriptionok: false,
  statusconnection: false,
  // Tableau des réservations du coworker non organisé
  datacoworkerreservations: [],
  // Tableau des réservations du coworker réorganisé
  // datacoworkerreservationsOrdered: [],
  // Tableau des réservations des espaces de l'hôte non organisé
  datahostrequests: [],
  // Tableau des réservations du coworker réorganisé
  // datahostrequestsOrdered: [],
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
        // email: '',
        // password: '',
      };
    case 'GET_USER_ID':
      return {
        ...state,
        user_id: action.getuserid,
      };
    case 'GET_ROLE':
      return {
        ...state,
        role_id: action.role,
      };
    // Sélection du rôle lors de l'inscription
    case 'GET_SELECTEDROLE':
      return {
        ...state,
        role_id: action.role,
      };
    // Sélection de la civilité lors de l'inscription
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
    // Pour indiquer que le token (donc la session) a expiré
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
    // Alerte erreur si, en cas d'inscription, l'email existe deja
    case 'GET_EMAILEXISTEDERROR':
      return {
        ...state,
        emailexistederror: true,
      };
    // Alerte erreur si, en cas d'inscription, le pasword n'est pas au bon format
    case 'GET_PASWORD_FORMAT_ERROR':
      return {
        ...state,
        passwordwrongformat: true,
      };
    // Alerte erreur si, en cas d'inscription, le pasword n'est pas au bon format
    case 'GET_EMAIL_FORMAT_ERROR':
      return {
        ...state,
        emailwrongformat: true,
      };
    // Alerte erreur si un des élements lors de l'inscription n'a pas été rempli
    case 'GET_REQUIRED_ERROR':
      return {
        ...state,
        errorrequiredelement: true,
      };
    // Vérifie que l'inscription est ok pour fermer la modale
    case 'STATUS_INSCRIPTION_OK':
      return {
        ...state,
        statusinscriptionok: true,
      };
    // Alerte à la connexion si l'email ou le password ne sont pas bons
    case 'CONNECTION_EMAIL_OR_NOT_GOOD':
      return {
        ...state,
        statusconnection: true,
      };
    // Recupère les reservations du coworker
    case 'GET_DATA_COWORKER_RESERVATIONS':
      return {
        ...state,
        datacoworkerreservations: action.coworkerreservations,
      };
    // Recupère les reservations du coworker
    case 'GET_DATA_HOST_REQUESTS':
      return {
        ...state,
        datahostrequests: action.hostrequests,
      };
      // Obtention des informations pour la page 'Mon Profil'
    case 'GET_USER_PRIVATE_INFO':
      return {
        ...state,
        first_name: action.firstName,
        last_name: action.lastName,
        gender: action.gender,
        username: action.username,
        about: action.about,
        avatar: action.avatar,
      };
    default:
      return state;
  }
};

export default reducer;
