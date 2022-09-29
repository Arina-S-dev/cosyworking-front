import axios from 'axios';

const identification = (store) => (next) => (action) => {
  // MiddleWare de Connexion avec l'envoi de l'email et du password
  if (action.type === 'SET_CONNEXION') {
    // Obtention de l'email et du password du state
    const { email, password } = store.getState().user;
    // eslint-disable-next-line no-console
    console.log(email);
    axios.post('http://quentinroggy-server.eddi.cloud/api/auth/login', { email, password })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
        if (response.data.userToken) {
          localStorage.setItem('userToken', JSON.stringify(response.data.userToken));
          store.dispatch({
            type: 'GET_CONNEXION',
            logged: true,
          });
        }
      })
      .catch((error) => {
      // en cas d’échec de la requête
      // eslint-disable-next-line no-console
        console.log(error);
      });
  }
  // MiddleWare d'inscription avec l'envoie des différents élements demandés
  if (action.type === 'SET_SIGNUP') {
    // Obtention de l'email et du password du state
    // eslint-disable-next-line object-curly-newline, max-len, camelcase
    const { email, password, gender, role_id, last_name, first_name } = store.getState().user;
    // eslint-disable-next-line no-console
    console.log(email, password, gender, role_id, last_name, first_name);
    // eslint-disable-next-line object-curly-newline, camelcase
    axios.post('http://quentinroggy-server.eddi.cloud/api/auth/signup', { first_name, last_name, email, password, gender, role_id })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch((error) => {
      // en cas d’échec de la requête
      // eslint-disable-next-line no-console
        console.log(error);
      });
  }
  // MiddleWare afin de vérifier la validité du token présent dans le LocalStorage
  if (action.type === 'CHECK_CONNECTION') {
    // Récupération du token présent dans le LocalStorage
    const getUserToken = JSON.parse(localStorage.getItem('userToken'));
    // eslint-disable-next-line no-console
    console.log(getUserToken);
    // eslint-disable-next-line object-curly-newline, camelcase
    axios.get('http://quentinroggy-server.eddi.cloud/api/coworker', { headers: {
      // eslint-disable-next-line quote-props, comma-dangle
      'x-access-token': getUserToken
    // eslint-disable-next-line object-curly-spacing, object-curly-newline
    }})
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
        if (response) {
          store.dispatch({
            type: 'CONNECTION_STATE',
            error: false,
          });
        }
      })
      .catch((error) => {
      // en cas d’échec de la requête
      // eslint-disable-next-line no-console
        console.log(error);
        if (error) {
          store.dispatch({
            type: 'CONNECTION_STATE',
            error: true,
          });
        }
      });
  }
  // MiddleWare de déconnexion avec la suppression du token dans le LocalStorage
  if (action.type === 'LOGOUT') {
    window.location.href = '/';
    localStorage.removeItem('userToken');
  }
  // MiddleWare permettant la suppression du token dans le LocalStorage si ce dernier a expiré
  if (action.type === 'RESET_TOGETNEWCONNECTION') {
    window.location.href = '/';
    localStorage.removeItem('userToken');
  }
  next(action);
};

export default identification;
