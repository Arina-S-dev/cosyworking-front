/* eslint-disable max-len */
import Card from '@mui/material/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
import MyAccountMenu from '../../../MyAccountMenu';
import theme from '../../../../tools/themeMui';
import ModalConfirm from './modalConfirm';

import './style.scss';

function MyRequests() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'CONTROL_BAR_ESPACE_PERSO',
      getAccessNavBar: true,
    });
  }, []);
  // Ouverture de la modale, récupération de la description (Annulée / Validée), récupération du booking id
  const handleOpen = (event, bookingId) => {
    const description = event.currentTarget.value;
    dispatch({
      type: 'OPEN_CONFIRM_MODAL',
      description: description,
      bookigIdforUpdate: bookingId,
    });
  };

  const handleCloseAlert = () => {
    dispatch({
      type: 'CLOSE_ALERT',
    });
  };
  const modalIsOpen = useSelector((state) => state.requests.openConfimModal);
  const requestsData = useSelector((state) => state.user.datahostrequests);
  const alertIsOpen = useSelector((state) => state.requests.alertSuccess);
  // filtre les bookings avec le statut "en attente" uniquement
  const pendingRequests = requestsData.filter((req) => req.description === 'En attente');
  // eslint-disable-next-line object-curly-spacing, camelcase
  // group by bookig_ref_id
  // console.log('pendingRequests array', pendingRequests);
  const groupBy = (key) => (array) => array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});
  const groupByBookingRefId = groupBy('bookig_ref_id');
  const bookingList = groupByBookingRefId(pendingRequests);
  // Options afin de modifier le format de la date
  // eslint-disable-next-line object-curly-newline
  const options = { weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', minute: 'numeric' };
  // Object.keys(bookingList).map((booking) => console.log(bookingList[booking].map((elem) => elem.title)));
  return (
    <>
      <MyAccountMenu />

      <ThemeProvider theme={theme}>
        <div className="card-container">
          {alertIsOpen
          && (
          <Alert onClose={handleCloseAlert} severity="success" sx={{ borderRadius: '15px' }}>
            Le statut de la demande a bien été modifié
          </Alert>
          )}
          {Object.keys(bookingList).map((booking) => (
            <Card
              key={bookingList[booking][0].bookig_ref_id}
              sx={{
                width: {
                  xs: 360,
                  md: 400,
                  lg: 800,
                },
                boxShadow: 3,
                margin: 1,
              }}
            >
              <CardMedia
                component="img"
                alt="workspace"
                height="200"
                image={`https://cosyworking-api.onrender.com/${bookingList[booking][0].main_image}`}
                width="250"
              />
              <CardContent className="card-details">
                <div className="card-content-flex">
                  <Typography gutterBottom variant="h5" component="div" textAlign="left" margin="0">
                    {bookingList[booking][0].title}
                  </Typography>
                </div>
                <Typography gutterBottom variant="h7" component="div" textAlign="left">
                  Adresse : {bookingList[booking][0].address} à {bookingList[booking][0].city}
                </Typography>
                <Typography gutterBottom variant="h6" component="div" textAlign="left">
                  Référence réservation: {bookingList[booking][0].bookig_ref_id}
                </Typography>
                <Typography gutterBottom variant="h6" component="div" textAlign="left">
                  Statut: <em>{bookingList[booking][0].description}</em>
                </Typography>
                {bookingList[booking].map((element) => (
                  <Typography gutterBottom variant="h6" component="div" textAlign="left">
                    Du {(new Date(element.start_date)).toLocaleDateString('fr-FR', options)} au {(new Date(element.end_date)).toLocaleDateString('fr-FR', options)}
                  </Typography>
                ))}
                <Link to={`/profil/${bookingList[booking][0].coworker_id}`}>
                  <Typography gutterBottom variant="h6" component="div" textAlign="left">
                    Réservation effectuée par {bookingList[booking][0].coworker}
                  </Typography>
                </Link>
                <Stack className="card-buttons" spacing={2} direction="row">
                  <Button
                    value="Annulé"
                    onClick={(event) => handleOpen(event, bookingList[booking][0].bookig_ref_id)}
                    title="Annuler la demande"
                  ><ClearIcon fontSize="large" sx={{ color: 'red', margin: 1 }} />
                  </Button>
                  <Button
                    value="Validé"
                    onClick={(event) => handleOpen(event, bookingList[booking][0].bookig_ref_id)}
                    className={bookingList[booking][0].bookig_ref_id}
                    title="Valider la demande"
                  ><CheckIcon fontSize="large" sx={{ color: 'green', margin: 1 }} />
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          ))};
        </div>
        {modalIsOpen && <ModalConfirm />}
      </ThemeProvider>
    </>
  );
}

export default MyRequests;
