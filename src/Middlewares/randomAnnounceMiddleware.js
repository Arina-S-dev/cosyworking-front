import axiosBaseUrl from '../axios';

const randomAnnouncesMiddleware = (store) => (next) => (action) => {
  if (action.type === 'GET_RANDOM_ANNOUNCES') {
    axiosBaseUrl.get('/api/workspace/find-random', {
    })
      .then((response) => {
        const getRandomAnnounces = response.data;
        if (response) {
          store.dispatch({
            type: 'SAVE_RANDOM_ANNOUNCES',
            randomannounce: getRandomAnnounces,
          });
        }
      })
      .catch((error) => {
      // en cas d’échec de la requête
      // eslint-disable-next-line no-console
        console.log(error);
      // if (error) {
      //   store.dispatch({
      //     type: 'CONNECTION_STATE',
      //     error: true,
      //   });
      // }
      });
  }
  next(action);
};

export default randomAnnouncesMiddleware;
