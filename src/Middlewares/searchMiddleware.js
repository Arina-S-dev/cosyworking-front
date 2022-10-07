import axios from 'axios';

const searchMiddleware = (store) => (next) => (action) => {
  if (action.type === 'GET_WORKSPACES') {
    // eslint-disable-next-line camelcase
    const { city, date_list, equipments } = store.getState().search;
    // eslint-disable-next-line camelcase
    axios.post('https://cosyworking-api.onrender.com/api/workspace/search', { city, date_list, equipments })
      .then((response) => {
        // eslint-disable-next-line no-console
        // console.log(response.data);
        if (response.data) {
          store.dispatch({
            type: 'SAVE_WORKSPACES',
            workspaces: response.data,
          });
        }
      })
      .catch((error) => {
      // eslint-disable-next-line no-console
        console.log(error.response.data.message);
      });
  } next(action);

  if (action.type === 'GET_EQUIPMENTS') {
    axios.get('https://cosyworking-api.onrender.com/api/equipments')
      .then((response) => {
        if (response.data) {
          store.dispatch({
            type: 'SAVE_EQUIPMENTS',
            equipmentsListFromAPI: response.data,
          });
        }
      })
      .catch((error) => {
      // eslint-disable-next-line no-console
        console.log(error.response.data.message);
      });
  } next(action);
};

export default searchMiddleware;
