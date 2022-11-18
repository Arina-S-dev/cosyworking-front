// import axiosBaseUrl from '../axios';

import axiosBaseUrl from '../axios';

const wishlist = (store) => (next) => (action) => {
  if (action.type === 'ADD_WISHLIST') {
    const getUserToken = JSON.parse(localStorage.getItem('userToken'));

    axiosBaseUrl.post('/api/wishlist/add', {
      workspaceId: action.workspaceId,
    }, {
      headers: {
        'x-access-token': getUserToken,
      },

    })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response.data);
        store.dispatch({
          type: 'SAVE_WISHLIST',
          wishlist: response.data,
        });
      })
      .catch((error) => {
      // eslint-disable-next-line no-console
        console.log(error.response.data.message);
      });
  }
  else if (action.type === 'FETCH_WISHLIST') {
    const getUserToken = JSON.parse(localStorage.getItem('userToken'));
    axiosBaseUrl.get('/api/wishlist', {
      headers: { 'x-access-token': getUserToken },
    })
      .then((response) => {
        if (response.data) {
          store.dispatch({
            type: 'SAVE_WISHLIST',
            wishlist: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }
  else if (action.type === 'REMOVE_FROM_WISHLIST') {
    const getUserToken = JSON.parse(localStorage.getItem('userToken'));
    axiosBaseUrl.delete(`/api/wishlist/${action.workspaceId}`, {
      headers: { 'x-access-token': getUserToken },
    })
      .then(() => {
        store.dispatch({
          type: 'DELETE_FROM_WISHLIST',
          wishlist: action.wishlist,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  next(action);
};

export default wishlist;
