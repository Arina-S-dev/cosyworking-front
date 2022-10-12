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
  // Récupération id du coworker pour annonces Host
  coworker_id: '',
  // Gestion de la cession expirée
  error_connection: false,
  // Gestion de l'ouverture / fermeture de la modale 'inscription'
  inscriptionModalOpen: false,
  // Gestion de l'ouverture / fermeture de la modale 'connexion'
  connexionModalOpen: false,
  // Gestion de l'ouverture de la modale d'annulation de réservation
  cancelModalReservation: false,
  // Obtention id de la réservation pour son annulation
  getIdReservationForCancel: 0,
  emailexistederror: false,
  passwordwrongformat: false,
  emailwrongformat: false,
  errorrequiredelement: false,
  statusconnection: false,
  // Tableau des réservations du coworker non organisé
  datacoworkerreservations: [],
  // Tableau des réservations des espaces de l'hôte non organisé
  datahostrequests: [],
  // Control de la barre dans Espace Perso
  controlNavBarEspacePerso: false,
  // Gestion du loading page 'Mes Réservations'
  loadingReservationsPage: true,
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
        logged: action.logged,
        // email: '',
        password: '',
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
    case 'GET_COWORKER_ID_FOR_HOST':
      return {
        ...state,
        coworker_id: action.coworkerId,
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
    case 'GET_USERNAME':
      return {
        ...state,
        username: action.username,
      };
    case 'GET_ABOUT':
      return {
        ...state,
        about: action.about,
      };
    // Pour indiquer que le token (donc la session) a expiré
    case 'CONNECTION_STATE':
      return {
        ...state,
        error_connection: action.error,
        connexionModalOpen: action.connexionModalOpen,
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
      // Control de la barre de menu dans Espace Perso
    case 'CONTROL_BAR_ESPACE_PERSO':
      return {
        ...state,
        controlNavBarEspacePerso: action.getAccessNavBar,
      };
      // Gestion de l'ouverture / fermeture de la modale d'inscription
    case 'MODAL_INSCRIPTION_OPENING':
      return {
        ...state,
        inscriptionModalOpen: action.getOpening,
      };
      // Gestion de l'ouverture / fermeture de la modale de connexion
    case 'MODAL_CONNEXION_OPENING':
      return {
        ...state,
        connexionModalOpen: action.getOpening,
      };
    // Gestion de l'ouverture / fermeture de la modale d'annulation d'une réservation
    case 'MODAL_CANCEL_RESERVATION_OPENING':
      return {
        ...state,
        cancelModalReservation: action.getOpening,
      };
    // Gestion du loading dans 'Mes réservations'
    case 'HANDLE_LOADING_RESERVATIONS':
      return {
        ...state,
        loadingReservationsPage: action.loadingReservations,
      };
    // Gestion du loading dans 'Mes réservations'
    case 'GET_ID_RESERVATION':
      return {
        ...state,
        getIdReservationForCancel: action.idReservation,
      };
    default:
      return state;
  }
};

export default reducer;
