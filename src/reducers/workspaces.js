export const initialState = {
  currentWorkspace: {
    id: 1,
    title: 'Le bureau Cosy de John',
    description: 'Ce super bureau bien équipé peut vous accueillir pour vos session de travail. Calme et tranquillité assueré. ',
    address: '17 rue Richer',
    zipCode: '75009',
    city: 'Paris',
    longitude: 2.3462242342639796,
    latitude: 48.87394904099592,
    halfDayPrice: 50,
    dayPrice: 100,
    availability: true,
    user: {
      host: 'jdoeuf',
      host_avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    images: [
      {
        id: 1,
        link: 'https://www.neo-nomade.com/entreprises/wp-content/uploads/2019/10/shridhar-gupta-dZxQn4VEv2M-unsplash-scaled.jpg',
        mainImage: true,
      },
      {
        id: 2,
        link: 'https://www.globalization-partners.com/wp-content/uploads/2021/09/Outside-the-Cubicle-Why-Coworking-Spaces-Are-a-Hot-Favorite-in-AsiaPacific.jpg',
        mainImage: false,
      },
      {
        id: 3,
        link: 'https://www.globalization-partners.com/wp-content/uploads/2021/09/Outside-the-Cubicle-Why-Coworking-Spaces-Are-a-Hot-Favorite-in-AsiaPacific.jpg',
        mainImage: false,
      },
      {
        id: 4,
        link: 'https://www.globalization-partners.com/wp-content/uploads/2021/09/Outside-the-Cubicle-Why-Coworking-Spaces-Are-a-Hot-Favorite-in-AsiaPacific.jpg',
        mainImage: false,
      },
      {
        id: 5,
        link: 'https://officesnapshots.com/wp-content/uploads/2019/10/growth-circuit-co-zone-coworking-offices-ankara-4-700x467.jpg',
        mainImage: false,
      },
    ],
    equipments_list: [
      {
        id: 1,
        description: 'imprimante',
        icon: 'public/favicon.ico',
      },
      {
        id: 2,
        description: 'wifi',
        icon: 'public/favicon.ico',
      },
      {
        id: 3,
        description: 'cafetière',
        icon: 'public/favicon.ico',
      },
      {
        id: 4,
        description: 'micro onde',
        icon_link: '',
      },
      {
        id: 5,
        description: 'parking',
        icon: 'public/favicon.ico',
      },
      {
        id: 6,
        description: 'kebab',
        icon: 'public/favicon.ico',
      },
    ],
    created_at: '2022-09-20 17:16:44.546+02',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
