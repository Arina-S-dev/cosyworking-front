/* eslint-disable max-len */
// eslint-disable-next-line object-curly-newline
import { Accordion, AccordionDetails, AccordionSummary, Alert, AlertTitle, Avatar, Button, Card, CardContent, CardMedia, CircularProgress, Modal, TableContainer, Typography } from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import data from '../data.json';
import './styles.scss';
import MesTables from './MesTables';
import MyAccountMenu from '../../../MyAccountMenu';
import theme from '../../../../tools/themeMui';
import UrlImage from '../../../../axiosUrlImage';

function MesReservations() {
  const dispatch = useDispatch();
  // On controle les boutons à afficher pour la barre de navigation
  useEffect(() => {
    dispatch({
      type: 'CONTROL_BAR_ESPACE_PERSO',
      getAccessNavBar: false,
    });
  }, []);
  // On récupère les réservations du coworker coté back et
  // on les reorder pour les regrouper par id de réservation
  const getDataCoworker = useSelector((state) => state.user.datacoworkerreservations);
  // eslint-disable-next-line no-console
  // console.log(getDataCoworker);
  const newDataArray = [];
  function getOrderDataCoworker() {
    getDataCoworker.forEach((element) => {
      // eslint-disable-next-line max-len
      const alreadyBookingId = newDataArray.find((list) => list.booking_ref_id === element.booking_ref_id);
      if (alreadyBookingId) {
        alreadyBookingId.timeslot.push({
          start: element.start_date,
          end: element.end_date,
          dayPrice: element.day_price,
          halfDayPrice: element.half_day_price,
        });
      }
      else {
        newDataArray.push({
          address: element.address,
          city: element.city,
          booking_ref_id: element.booking_ref_id,
          host: element.host,
          id: element.id,
          image_link: element.image_link,
          title: element.title,
          workspace_id: element.workspace_id,
          state: element.state,
          timeslot: [
            {
              start: element.start_date,
              end: element.end_date,
              dayPrice: element.day_price,
              halfDayPrice: element.half_day_price,
            },
          ],
        });
      }
    });
  }
  getOrderDataCoworker();

  // Options afin de modifier le format de la date
  // eslint-disable-next-line object-curly-newline
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  // Gestion du loading
  const getLoading = useSelector((state) => state.user.loadingReservationsPage);

  // Gestion du message 'pas encore de réservations'
  const askReservations = useSelector((state) => state.user.datacoworkerreservations);
  const getAskingreservations = () => {
    if (askReservations.length === 0) {
      return true;
    } return false;
  };
  getAskingreservations();

  // Gestion de l'ouverture et fermeture de la Modale annulation reservation
  const open = useSelector((state) => state.user.cancelModalReservation);
  const handleOpen = () => {
    dispatch({
      type: 'MODAL_CANCEL_RESERVATION_OPENING',
      getOpening: true,
    });
  };
  const handleClose = () => {
    dispatch({
      type: 'MODAL_CANCEL_RESERVATION_OPENING',
      getOpening: false,
    });
  };

  // Recuperation de l'id de la réservation
  const handleCancelReservation = (event) => {
    event.preventDefault();
    const getIdReservation = event.target.value;
    handleOpen();
    dispatch({
      type: 'GET_ID_RESERVATION',
      idReservation: getIdReservation,
    });
    // eslint-disable-next-line no-console
    console.log(event.target.value);
  };

  // Annulation de la réservation
  const cancelReservation = () => {
    dispatch({
      type: 'CANCEL_RESERVATION',
    });
  };

  // eslint-disable-next-line no-console
  console.log('Mon nouveau tableau', newDataArray);

  return (
    <div className="MesReservations">
      <MyAccountMenu />
      <h1 className="MesReservations-title">Mes Réservations</h1>
      {getAskingreservations() && !getLoading
      && (
      <Card className="MesReservations-NoReservations">
        Vous n'avez pas encore de réservation.
        <ThemeProvider theme={theme}>
          <Link to="/recherche">
            <Button>
              Faire une réservation
            </Button>
          </Link>
        </ThemeProvider>
      </Card>
      )}
      {getLoading
      && (
        <Card className="MesReservations-LoadingCard">
          <ThemeProvider theme={theme}>
            <CircularProgress />
          </ThemeProvider>
        </Card>
      )}
      {newDataArray.map((list) => (
        <Card
          key={list.id}
          sx={{ margin: '0.8rem' }}
        >
          <Card
            className="MesReservations-Card"
            sx={{ boxShadow: 'none' }}
          >
            <CardMedia
              className="MesReservations-Card-CardMedia"
              component="img"
              image={`${UrlImage}${list.image_link}`}
              alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <CardContent
                sx={{ flex: '1 0 auto' }}
                className="MesReservations-Card-CardContent"
              >
                <Typography component="div" variant="h6">
                  {list.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {/* eslint-disable-next-line quotes */}
                  À partir du { (new Date(list.timeslot[0].start)).toLocaleDateString("fr-FR", options) }
                  {/* {list.timeslot[0].start} */}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {list.address} à {list.city}
                  {/* {list.zipCode} */}
                </Typography>
                <Box className="MesReservations-Card-CardContent-Box">
                  <Typography
                    className="MesReservations-Card-CardContent-Box-Host"
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <Avatar className="MesReservations-Card-CardContent-Box-Host-Avatar" />
                    <p className="MesReservations-Card-CardContent-Box-Host-Name"> {list.host}</p>
                  </Typography>
                  <Typography className="MesReservations-Card-CardContent-Box-State" variant="string" color="text.secondary" component="div">
                    Statut : {list.state}
                    <ThemeProvider theme={theme}>
                      <Button value={list.booking_ref_id} onClick={handleCancelReservation} sx={{ textTransform: 'none' }}>
                        Annuler ma réservation <DeleteRoundedIcon />
                      </Button>
                    </ThemeProvider>
                    <Modal
                      hideBackdrop
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box
                        sx={{
                          margin: 'auto',
                          borderRadius: '10px',
                          maxWidth: '400px',
                          marginTop: '5rem',
                        }}
                      >
                        <Alert severity="info" sx={{ borderRadius: '15px' }}>
                          <AlertTitle>Confirmation d'annulation</AlertTitle>
                          Êtes vous certain de vouloir <strong>annuler votre réservation</strong> ?
                          <div>
                            <Button onClick={cancelReservation}>Oui<CheckRoundedIcon color="success" /></Button>
                            <Button onClick={handleClose}>Non <ClearRoundedIcon sx={{ color: '#ff0000' }} /></Button>
                          </div>
                        </Alert>
                      </Box>
                    </Modal>
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Card>
          <Accordion
            className="MesReservations-Card-CardContent-Accordion"
          >
            <AccordionSummary
              className="MesReservations-Card-CardContent-Accordion-Summary"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  textAlign: 'right',
                  width: '100%',
                }}
              >
                Plus de détails
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer>
                <MesTables data={list.timeslot} />
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        </Card>
      ))}
    </div>
  );
}

export default MesReservations;
