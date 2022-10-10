// eslint-disable-next-line object-curly-newline
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Button, Card, CardContent, CardMedia, CircularProgress, TableContainer, Typography } from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import data from '../data.json';
import './styles.scss';
import MesTables from './MesTables';
import MyAccountMenu from '../../../MyAccountMenu';
import theme from '../../../../tools/themeMui';

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
  return (
    <div className="MesReservations">
      <MyAccountMenu />
      <h1 className="MesReservations-title">Mes Réservations</h1>
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
              // sx={{ width: 151 }}
              image="https://digitalsynopsis.com/wp-content/uploads/2016/01/beautiful-desks-minimal-workstations-33.jpg"
              // image={list.image_link}
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
                  </Typography>
                  <Button
                    sx={{
                      textTransform: 'none',
                      textAlign: 'left',
                      maxWidth: '200px',
                    }}
                  >
                    Annuler ma réservation <DeleteRoundedIcon />
                  </Button>
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
