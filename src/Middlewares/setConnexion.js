import axios from 'axios';

const setConnexion = (store) => (next) => (action) => {
  if (action.type === 'SET_CONNEXION') {
    // Obtention de l'email et du password du state
    const { email, password } = store.getState().user;
    // Modifier route back
    axios.post('/api/auth/login', { email, password })
      .then((response) => {
        if (response.data.userToken) {
          localStorage.setItem('userToken', JSON.stringify(response.data));
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
  next(action);
};

export default setConnexion;
