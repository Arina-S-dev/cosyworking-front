/* eslint-disable max-len */
import axios from 'axios';
import { actionSaveCurrentWorkspace, GET_WORKSPACE_DETAIL } from '../actions/workspaces';
import UrlImage from '../axiosUrlImage';

const WorkspaceDetailMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_WORKSPACE_DETAIL:
      // on va faire l'appel API
      axios.get(`${UrlImage}api/workspace/${action.id}`)
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

      console.log('action date_list ===> ', action.payload.date_list);

      axios.post(`${UrlImage}api/booking/request`, {

        workspace_id: action.payload.workspace_id,
        date_list: action.payload.date_list,
      }, {
        headers: {
          'x-access-token': getUserToken,
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
      axios.get(`${UrlImage}api/equipments`)
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
      store.dispatch({
        type: 'SET_WORKSPACE_LOADING_STATUS',
      });
      store.dispatch({
        type: 'SET_IMAGES_LOADING_STATUS',
        imagesAreLoading: true,
      });

      axios.get(`${UrlImage}api/workspace/${action.workspaceId}`)
        .then((response) => {
          console.log('responseGET_WORKSPACE_TO_EDIT ==>', response.data);
          store.dispatch({
            type: 'SAVE_WORKSPACE_TO_EDIT',
            workspaceToEdit: response.data[0].workspace_details,
          });
          // store.dispatch({
          //   type: 'SAVE_WORKSPACE_EQUIPMENTS_LIST',
          //   workspaceEquipmentsList: response.data[0].workspace_details.equipments_list,
          // });
          // store.dispatch({
          //   type: 'SAVE_WORKSPACE_MAIN_IMAGE',
          //   // eslint-disable-next-line max-len
          //   mainImage: response.data[0].workspace_details.images.filter((image) => image.main === true),
          // });
          // store.dispatch({
          //   type: 'SAVE_WORKSPACE_OTHER_IMAGES',
          //   // eslint-disable-next-line max-len
          //   otherImages: response.data[0].workspace_details.images.filter((image) => image.main !== true),
          // });
          store.dispatch({
            type: 'SAVE_WORKSPACE_IMAGES',
            payload: {
              mainImage: response.data[0].workspace_details.images.filter((image) => image.main === true),
              otherImages: response.data[0].workspace_details.images.filter((image) => image.main !== true),
            },
          });
        })
        .catch((error) => {
          console.log('requette API ERREUR', error);
        });
      break;
    case 'CREATE_WORKSPACE': {
      const getUserToken = JSON.parse(localStorage.getItem('userToken'));

      axios.post(`${UrlImage}api/workspace/create`, action.payload, {
        headers: {
          'x-access-token': getUserToken,
          'content-type': 'multipart/form-data',
        },

      })
        .then((response) => {
          console.log('response CREATE_WORKSPACE ==>', response.data);
          store.dispatch({
            type: 'SET_CREATION_REQUEST_STATUS',
            creationRequestStatus: 'succeed',
          });
        })
        .catch((error) => {
          console.log('requette API ERREUR', error);
          store.dispatch({
            type: 'SET_CREATION_REQUEST_STATUS',
            creationRequestStatus: 'fail',
          });
        });
    }
      break;
    case 'UPDATE_WORKSPACE': {
      const getUserToken = JSON.parse(localStorage.getItem('userToken'));

      axios.patch(`${UrlImage}api/workspace/${action.payload.id}`, action.payload.data, {
        headers: {
          'x-access-token': getUserToken,
          'content-type': 'multipart/form-data',
        },

      })
        .then((response) => {
          console.log('response UPDATE_WORKSPACE ==>', response.data);
        })
        .catch((error) => {
          console.log('requette API ERREUR', error);
        });
    }
      break;
    case 'ADD_NEW_IMAGE_TO_WORKSPACE': {
      console.log('jvjhvjhvjhvjhvjhvjhv ADD_NEW_IMAGE_TO_WORKSPACE ==>');
      const getUserToken = JSON.parse(localStorage.getItem('userToken'));
      store.dispatch({
        type: 'SET_IMAGES_LOADING_STATUS',
      });

      axios.post(`${UrlImage}api/workspace/${action.payload.id}/images/add`, action.payload.data, {
        headers: {
          'x-access-token': getUserToken,
          'content-type': 'multipart/form-data',
        },

      })
        .then((response) => {
          console.log('response ADD_NEW_IMAGE_TO_WORKSPACE ==>', response.data);
          // store.dispatch({
          //   type: 'SAVE_WORKSPACE_MAIN_IMAGE',
          //   // eslint-disable-next-line max-len
          //   mainImage: response.data.filter((image) => image.main_image === true),
          // });
          // store.dispatch({
          //   type: 'SAVE_WORKSPACE_OTHER_IMAGES',
          //   // eslint-disable-next-line max-len
          //   otherImages: response.data.filter((image) => image.main_image !== true),
          // });
          store.dispatch({
            type: 'SAVE_WORKSPACE_IMAGES',
            payload: {
              mainImage: response.data.filter((image) => image.main_image === true),
              otherImages: response.data.filter((image) => image.main_image !== true),
            },
          });
        })
        .catch((error) => {
          console.log('requette API ERREUR', error);
        });
    }
      break;
    case 'DELETE_IMAGE_FROM_WORKSPACE': {
      const getUserToken = JSON.parse(localStorage.getItem('userToken'));
      console.log('USER TOKEN===>', getUserToken);
      axios.post(`${UrlImage}api/workspace/${action.payload.workspaceId}/image`, {
        image_id: action.payload.imageId,
        image_link: action.payload.imageLink,
      }, {
        headers: {
          'x-access-token': getUserToken,
        },

      })
        .then((response) => {
          // store.dispatch({
          //   type: 'SAVE_WORKSPACE_OTHER_IMAGES',
          //   // eslint-disable-next-line max-len
          //   otherImages: response.data.filter((image) => image.main_image !== true),
          // });
          store.dispatch({
            type: 'SAVE_WORKSPACE_IMAGES',
            payload: {
              mainImage: response.data.filter((image) => image.main_image === true),
              otherImages: response.data.filter((image) => image.main_image !== true),
            },
          });

          console.log('response SAVE_WORKSPACE_OTHER_IMAGES ==>', response.data);
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
