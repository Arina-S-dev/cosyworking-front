/* eslint-disable no-console */
/* eslint-disable camelcase */
import axiosBaseUrl from '../axios';

const requests = (store) => (next) => (action) => {
// MiddleWare afin de récupérer les réservations des annonces de l'Hote
  if (action.type === 'GET_HOST_REQUESTS') {
    // Récupération du token présent dans le LocalStorage
    const getUserToken = JSON.parse(localStorage.getItem('userToken'));
    // eslint-disable-next-line camelcase
    const { user_id } = store.getState().user;
    // eslint-disable-next-line no-console
    // console.log(user_id);
    // eslint-disable-next-line object-curly-newline, camelcase
    axiosBaseUrl.get(`/api/personalspace/${user_id}/booking`, { headers: {
      // eslint-disable-next-line quote-props, comma-dangle
      'x-access-token': getUserToken
    // eslint-disable-next-line object-curly-spacing, object-curly-newline
    }})
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log('Mes annonces', response);
        const getDataRequestsHost = response.data;
        if (response) {
          store.dispatch({
            type: 'GET_DATA_HOST_REQUESTS',
            hostrequests: getDataRequestsHost,
          });
        }
      })
      .catch((error) => {
      // en cas d’échec de la requête
      // eslint-disable-next-line no-console
        console.log(error);
        // Erreur si jamais le token est expiré
        const errorToken = error.response.data.message;
        if (errorToken === 'Token Expired !') {
          store.dispatch({
            type: 'CONNECTION_STATE',
            error: true,
          });
          store.dispatch({
            type: 'MODAL_CONNEXION_OPENING',
            getOpening: true,
          });
        }
      });
  }
  if (action.type === 'UPDATE_BOOKING_STATUS') {
    // Récupération du token présent dans le LocalStorage
    const getUserToken = JSON.parse(localStorage.getItem('userToken'));
    const bookigId = store.getState().requests.bookigIdforUpdate;
    const stateToUpdate = store.getState().requests.description;
    console.log('State to Update', stateToUpdate);
    console.log('Booking id', bookigId);
    axiosBaseUrl.patch(`/api/booking/${bookigId}/state`, { state: stateToUpdate }, {
      headers: {
      // eslint-disable-next-line comma-dangle
        'x-access-token': getUserToken
      // eslint-disable-next-line object-curly-spacing, object-curly-newline
      }})
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
        if (response.request.status === 200) {
          store.dispatch({
            type: 'CLOSE_CONFIRM_MODAL',
          });
          store.dispatch({
            type: 'OPEN_ALERT',
          });
          store.dispatch({
            type: 'GET_HOST_REQUESTS',
          });
        }
      })
      .catch((error) => {
        // en cas d’échec de la requête
        // eslint-disable-next-line no-console
        console.log(error);
        const errorToken = error.response.data.message;
        if (errorToken === 'Token Expired !') {
          store.dispatch({
            type: 'CONNECTION_STATE',
            error: true,
          });
          store.dispatch({
            type: 'MODAL_CONNEXION_OPENING',
            getOpening: true,
          });
        }
      });
  }next(action);
};

export default requests;
