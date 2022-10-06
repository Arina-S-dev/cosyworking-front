import axios from 'axios';
import { actionSaveCurrentWorkspace, GET_WORKSPACE_DETAIL } from '../actions/workspaces';

const WorkspaceDetailMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_WORKSPACE_DETAIL:
      // on va faire l'appel API
      axios.get(`https://cosyworking-api.onrender.com/api/workspace/${action.id}`)
        .then((response) => {
          console.log('requette API ok', response);
          /*
          Le middleware a récupéré les data , il dispatche SAVE_RECIPE avec les data en payload
          pour le reducer qui ira les placer dans le state
          */
          console.log('responseGETWORKSPACE ==>', response.data);
          store.dispatch(actionSaveCurrentWorkspace(response.data));
          store.dispatch({ type: 'CHANGE_LOADING' });
        })
        .catch((error) => {
          console.log('requette API ERREUR', error);
        });
      break;

    default:
  }
  next(action);
};

export default WorkspaceDetailMiddleware;
