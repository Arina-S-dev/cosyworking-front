/* eslint-disable max-len */
import { SAVE_CURRENT_WORKSPACE } from '../actions/workspaces';

export const initialState = {
  currentWorkspace: null,
  workspaceToEdit: {
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
        link: 'https://officesnapshots.com/wp-content/uploads/2019/10/growth-circuit-co-zone-coworking-offices-ankara-4-700x467.jpg',
        mainImage: false,
      },
      {
        id: 5,
        link: 'https://maddyness.twic.pics/2021/10/coworking-femmes.jpg?twic=v1/cover=780x358',
        mainImage: false,
      },
      {
        id: 6,
        link: 'https://images.ctfassets.net/5wq17jjenal9/1jcl64VhKfgj7ZvO67twEy/b67ce93d150ccfddd699755c13f5e74e/coworking-shared-desks.jpg?fm=jpg&fl=progressive&w=960',
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
    booking_list: [
      {
        id: 1,
        start_date: 'Wed Oct 12 2022 08:00:00 GMT+0200 (heure d’été d’Europe centrale)',
        end_date: 'Wed Oct 12 2022 17:00:00 GMT+0200 (heure d’été d’Europe centrale)',
      },
      {
        id: 2,
        start_date: 'Sat Oct 15 2022 08:00:00 GMT+0200 (heure d’été d’Europe centrale)',
        end_date: 'Sat Oct 15 2022 12:00:00 GMT+0200 (heure d’été d’Europe centrale)',
      },
      {
        id: 3,
        start_date: 'Mon Oct 17 2022 13:00:00 GMT+0200 (heure d’été d’Europe centrale)',
        end_date: 'Mon Oct 17 2022 17:00:00 GMT+0200 (heure d’été d’Europe centrale)',
      },
      {
        id: 4,
        start_date: 'Thu Oct 20 2022 13:00:00 GMT+0200 (heure d’été d’Europe centrale)',
        end_date: 'Thu Oct 20 2022 17:00:00 GMT+0200 (heure d’été d’Europe centrale)',
      },
      {
        id: 5,
        start_date: 'Sat Oct 22 2022 08:00:00 GMT+0200 (heure d’été d’Europe centrale)',
        end_date: 'Sat Oct 22 2022 17:00:00 GMT+0200 (heure d’été d’Europe centrale)',
      },
      {
        id: 6,
        start_date: 'Wed Oct 26 2022 08:00:00 GMT+0200 (heure d’été d’Europe centrale)',
        end_date: 'Wed Oct 26 2022 12:00:00 GMT+0200 (heure d’été d’Europe centrale)',
      },
    ],
    created_at: '2022-09-20 17:16:44.546+02',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CURRENT_WORKSPACE:
      return {
        ...state,
        currentWorkspace: action.data[0].workspace_details,
      };
    default:
      return state;
  }
};

export default reducer;

// {
//   id: 1,
//   title: 'Le bureau Cosy de John',
//   description: 'Ce super bureau bien équipé peut vous accueillir pour vos session de travail. Calme et tranquillité assueré. ',
//   address: '17 rue Richer',
//   zipCode: '75009',
//   city: 'Paris',
//   longitude: 2.3462242342639796,
//   latitude: 48.87394904099592,
//   halfDayPrice: 50,
//   dayPrice: 100,
//   availability: true,
//   user: {
//     host: 'jdoeuf',
//     host_avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//   },
//   images: [
//     {
//       id: 1,
//       link: 'https://www.neo-nomade.com/entreprises/wp-content/uploads/2019/10/shridhar-gupta-dZxQn4VEv2M-unsplash-scaled.jpg',
//       mainImage: true,
//     },
//     {
//       id: 2,
//       link: 'https://www.globalization-partners.com/wp-content/uploads/2021/09/Outside-the-Cubicle-Why-Coworking-Spaces-Are-a-Hot-Favorite-in-AsiaPacific.jpg',
//       mainImage: false,
//     },
//     {
//       id: 3,
//       link: 'https://www.globalization-partners.com/wp-content/uploads/2021/09/Outside-the-Cubicle-Why-Coworking-Spaces-Are-a-Hot-Favorite-in-AsiaPacific.jpg',
//       mainImage: false,
//     },
//     {
//       id: 4,
//       link: 'https://www.globalization-partners.com/wp-content/uploads/2021/09/Outside-the-Cubicle-Why-Coworking-Spaces-Are-a-Hot-Favorite-in-AsiaPacific.jpg',
//       mainImage: false,
//     },
//     {
//       id: 5,
//       link: 'https://officesnapshots.com/wp-content/uploads/2019/10/growth-circuit-co-zone-coworking-offices-ankara-4-700x467.jpg',
//       mainImage: false,
//     },
//   ],
//   equipments_list: [
//     {
//       id: 1,
//       description: 'imprimante',
//       icon: 'public/favicon.ico',
//     },
//     {
//       id: 2,
//       description: 'wifi',
//       icon: 'public/favicon.ico',
//     },
//     {
//       id: 3,
//       description: 'cafetière',
//       icon: 'public/favicon.ico',
//     },
//     {
//       id: 4,
//       description: 'micro onde',
//       icon_link: '',
//     },
//     {
//       id: 5,
//       description: 'parking',
//       icon: 'public/favicon.ico',
//     },
//     {
//       id: 6,
//       description: 'kebab',
//       icon: 'public/favicon.ico',
//     },
//   ],
//   booking_list: [
//     {
//       id: 1,
//       start_date: 'Wed Oct 12 2022 08:00:00 GMT+0200 (heure d’été d’Europe centrale)',
//       end_date: 'Wed Oct 12 2022 17:00:00 GMT+0200 (heure d’été d’Europe centrale)',
//     },
//     {
//       id: 2,
//       start_date: 'Sat Oct 15 2022 08:00:00 GMT+0200 (heure d’été d’Europe centrale)',
//       end_date: 'Sat Oct 15 2022 12:00:00 GMT+0200 (heure d’été d’Europe centrale)',
//     },
//     {
//       id: 3,
//       start_date: 'Mon Oct 17 2022 13:00:00 GMT+0200 (heure d’été d’Europe centrale)',
//       end_date: 'Mon Oct 17 2022 17:00:00 GMT+0200 (heure d’été d’Europe centrale)',
//     },
//     {
//       id: 4,
//       start_date: 'Thu Oct 20 2022 13:00:00 GMT+0200 (heure d’été d’Europe centrale)',
//       end_date: 'Thu Oct 20 2022 17:00:00 GMT+0200 (heure d’été d’Europe centrale)',
//     },
//     {
//       id: 5,
//       start_date: 'Sat Oct 22 2022 08:00:00 GMT+0200 (heure d’été d’Europe centrale)',
//       end_date: 'Sat Oct 22 2022 17:00:00 GMT+0200 (heure d’été d’Europe centrale)',
//     },
//     {
//       id: 6,
//       start_date: 'Wed Oct 26 2022 08:00:00 GMT+0200 (heure d’été d’Europe centrale)',
//       end_date: 'Wed Oct 26 2022 12:00:00 GMT+0200 (heure d’été d’Europe centrale)',
//     },
//   ],
//   created_at: '2022-09-20 17:16:44.546+02',
// },

// {
//   "workspace_details": {
//     "workspace": {
//       "id": 1,
//       "title": "voluptas sed rem",
//       "description": "Maxime qui sit ea excepturi ratione aliquam unde ex libero.\nDoloremque ut est culpa ratione quod.\nNihil dolorum eligendi modi explicabo mollitia quia culpa at.",
//       "address": "3 Allée de Nesle",
//       "zip_code": "89535",
//       "city": "Cannes",
//       "longitude": "-94.5536",
//       "latitude": "43.7303",
//       "half_day_price": 5,
//       "day_price": 26,
//       "availability": true,
//       "user_id": 5,
//       "created_at": "2022-10-05T10:55:06.163837+00:00",
//       "updated_at": "2022-10-05T10:55:06.163837+00:00"
//     },
//     "user": [
//       {
//         "host_id": 5,
//         "host": "Martine",
//         "host_avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/384.jpg"
//       }
//     ],
//     "images": [
//       {
//         "image_id": 1,
//         "link": "/test1.png",
//         "main": true
//       },
//       {
//         "image_id": 2,
//         "link": "/test2.png",
//         "main": false
//       },
//       {
//         "image_id": 3,
//         "link": "/test3.png",
//         "main": false
//       },
//       {
//         "image_id": 4,
//         "link": "/test4.png",
//         "main": false
//       },
//       {
//         "image_id": 5,
//         "link": "/test5.png",
//         "main": false
//       }
//     ],
//     "booking_list": [
//       {
//         "booking_id": 1,
//         "start_date": "2022-12-04T06:00:00+00:00",
//         "end_date": "2022-12-04T10:00:00+00:00"
//       },
//       {
//         "booking_id": 2,
//         "start_date": "2022-12-04T11:00:00+00:00",
//         "end_date": "2022-12-04T15:00:00+00:00"
//       }
//     ],
//     "equipments_list": [
//       {
//         "equipment_id": 6,
//         "description": "Piscine",
//         "icon_link": "/lib/images/equipment/piscine.png"
//       },
//       {
//         "equipment_id": 6,
//         "description": "Piscine",
//         "icon_link": "/lib/images/equipment/piscine.png"
//       }
//     ]
//   }
// }
