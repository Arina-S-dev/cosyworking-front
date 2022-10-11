import axios from 'axios';
import { GET_PUBLIC_PROFIL, actionSaveProfilToDisplay } from '../actions/profil';

const profilMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PUBLIC_PROFIL:
      // on va faire l'appel API
      axios.get(`https://cosyworking-api.onrender.com/api/user/${action.id}`)
        .then((response) => {
          // console.log('requette API ok', response);

          // console.log('responseGETPROFILE ==>', response.data);
          store.dispatch(actionSaveProfilToDisplay(response.data));
        })
        .catch((error) => {
          console.log('requette API ERREUR', error);
        });
      break;

    default:
  }
  next(action);
};

export default profilMiddleware;
