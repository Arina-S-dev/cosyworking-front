import axios from 'axios';
import { actionSaveCurrentWorkspace, GET_WORKSPACE_DETAIL } from '../actions/workspaces';

const WorkspaceDetailMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_WORKSPACE_DETAIL:
      // on va faire l'appel API
      axios.get(`https://cosyworking-api.onrender.com/api/workspace/${action.id}`)
        .then((response) => {
          console.log('responseGETWORKSPACE ==>', response.data);
          store.dispatch(actionSaveCurrentWorkspace(response.data));
        })
        .catch((error) => {
          console.log('requette API ERREUR', error);
        });
      break;

    case 'SEND_NEW_BOOKING': {
      const getUserToken = JSON.parse(localStorage.getItem('userToken'));

      store.dispatch({
        type: 'BOOKING_SUBMIT_STATUS',
        submitStatus: 'pending',
      });

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
          window.Email.send({
            SecureToken: '8bbbd61e-7026-4022-9316-87cf7147abb5',
            To: action.payload.receiverEmail,
            From: 'workingcosy@gmail.com',
            Subject: 'Test',
            Body: `vous avez reçu un nouveau message de ${action.payload.userPseudo}
            <P>message:</P>
            <div>
              ${action.payload.message}
            </div>`,
          }).then(
            (message) => console.log('Message envoyer==>', message),
          );

          store.dispatch({
            type: 'BOOKING_SUBMIT_STATUS',
            submitStatus: 'succeed',
          });

          console.log('responsepostBOOKING ==>', response.data);
        })
        .catch((error) => {
          console.log('requette API ERREUR', error);
          store.dispatch({
            type: 'BOOKING_SUBMIT_STATUS',
            submitStatus: 'fail',
          });
        });
    }
      break;
    case 'GET_EQUIPMENTS_LIST':
      // on va faire l'appel API
      axios.get('https://cosyworking-api.onrender.com/api/equipments')
        .then((response) => {
          console.log('responseGET_EQUIPMENTS ==>', response.data);
          store.dispatch({
            type: 'SAVE_EQUIPMENTS_LIST',
            equipmentsList: response.data,
          });
        })
        .catch((error) => {
          console.log('requette API ERREUR', error);
        });
      break;
    case 'GET_WORKSPACE_TO_EDIT':

      axios.get(`https://cosyworking-api.onrender.com/api/workspace/${action.workspaceId}`)
        .then((response) => {
          console.log('responseGET_WORKSPACE_TO_EDIT ==>', response.data);
          store.dispatch({
            type: 'SAVE_WORKSPACE_TO_EDIT',
            workspaceToEdit: response.data[0].workspace_details,
          });
          store.dispatch({
            type: 'SAVE_WORKSPACE_EQUIPMENTS_LIST',
            workspaceEquipmentsList: response.data[0].workspace_details.equipments_list,
          });
          store.dispatch({
            type: 'SAVE_WORKSPACE_MAIN_IMAGE',
            // eslint-disable-next-line max-len
            mainImage: response.data[0].workspace_details.images.filter((image) => image.main === true),
          });
          store.dispatch({
            type: 'SAVE_WORKSPACE_OTHER_IMAGES',
            // eslint-disable-next-line max-len
            otherImages: response.data[0].workspace_details.images.filter((image) => image.main !== true),
          });
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

// payload: {
//   user_id: 7,
//   workspace_id: workspaceId,
//   date_list: bookings,
// },
