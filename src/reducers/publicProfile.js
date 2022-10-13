import { SAVE_PROFIL_TO_DISPLAY } from '../actions/profil';

export const initialState = {
  userToDisplay: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROFIL_TO_DISPLAY:
      return {
        ...state,
        userToDisplay: action.data[0].get_user,
      };
    default:
      return state;
  }
};

export default reducer;
