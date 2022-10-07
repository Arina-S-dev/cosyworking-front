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
        })
        .catch((error) => {
          console.log('requette API ERREUR', error);
        });
      break;

    case 'SEND_NEW_BOOKING': {
      const getUserToken = JSON.parse(localStorage.getItem('userToken'));

      axios.post('https://cosyworking-api.onrender.com/api/booking/request', {
        workspace_id: action.payload.workspace_id,
        date_list: action.payload.date_list,
      }, {
        headers: {
        // eslint-disable-next-line quote-props, comma-dangle
          'x-access-token': getUserToken
          // eslint-disable-next-line object-curly-spacing, object-curly-newline
        },

      })
        .then((response) => {
          console.log('requette API ok', response);

          console.log('responsepostBOOKING ==>', response.data);
        })
        .catch((error) => {
          console.log('requette API ERREUR', error);
        });
    }
      break;

    default:
  }
  next(action);
};

export default WorkspaceDetailMiddleware;

// payload: {
//   user_id: 7,
//   workspace_id: workspaceId,
//   date_list: bookings,
// },
