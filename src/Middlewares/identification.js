import axios from 'axios';

const identification = (store) => (next) => (action) => {
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
          });
        }
      })
      .catch((error) => {
      // en cas d’échec de la requête
      // eslint-disable-next-line no-console
        console.log(error);
      });
  }
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
  if (action.type === 'LOGOUT') {
    localStorage.removeItem('userToken');
  }
  next(action);
};

export default identification;
