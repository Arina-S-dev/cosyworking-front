import { SAVE_PROFIL_TO_DISPLAY } from '../actions/profil';

export const initialState = {
  userToDisplay:
    {
      id: 1,
      pseudo: 'jdoeuf',
      avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      about: "Salut moi c'est John et je vous propose mon bureau à la location Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptate molestiae facere ex repudiandae? Voluptatibus, exercitationem minima animi, molestias hic qui libero modi tempora placeat culpa distinctio quaerat harum recusandae, ipsa quis. Laboriosam facere recusandae facilis nostrum? Vel quia, dignissimos beatae vero repellendus dolore unde aut incidunt et fuga ex officia illo dolores vitae, ipsam ipsa quae quod earum minus?",
      gender: 'male',
      role_id: 1,
      workSpaces: [
        {
          id: 1,
          title: 'Le bureau Cosy de John',
          availability: true,
          mainImage: 'https://www.neo-nomade.com/entreprises/wp-content/uploads/2019/10/shridhar-gupta-dZxQn4VEv2M-unsplash-scaled.jpg',
        },
        {
          id: 2,
          title: ' Villa en bord de mer',
          availability: true,
          mainImage: 'https://www.globalization-partners.com/wp-content/uploads/2021/09/Outside-the-Cubicle-Why-Coworking-Spaces-Are-a-Hot-Favorite-in-AsiaPacific.jpg',
        },
      ],
      created_at: '2022-09-20 17:16:44.546+02',
      updated_at: '2022-09-20 17:16:44.546+02',
    },

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
