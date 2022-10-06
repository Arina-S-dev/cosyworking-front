// eslint-disable-next-line object-curly-newline, max-len
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, CardMedia, TableContainer, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { useSelector } from 'react-redux';
// import data from './data.json';
import './MesAnnonces.scss';
import MesAnnoncesRefs from './MesAnnoncesRefs/MesAnnoncesRefs';

function MesAnnonces() {
// On récupère les réservations des annonces de l'hote que l'on regroupe
// par workspace et par reference de réservation
  const getDataRequestsHost = useSelector((state) => state.user.datahostrequests);
  // eslint-disable-next-line no-console
  // console.log(getDataCoworker);
  const newDataArray = [];
  function getOrderDataCoworker() {
    getDataRequestsHost.forEach((element) => {
      // eslint-disable-next-line max-len
      const alreadyWorkplaceId = newDataArray.find((list) => list.workspace_id === element.workspace_id);
      // eslint-disable-next-line max-len
      const alreadyBookingId = newDataArray.find((list) => list.bookig_ref_id === element.bookig_ref_id);
      if (alreadyWorkplaceId) {
        alreadyWorkplaceId.bookingRef.push({
          bookig_ref_id: element.bookig_ref_id,
          bookingId: [
            {
              booking_id: element.booking_id,
              start: element.start_date,
              end: element.end_date,
              description: element.description,
              coworker: element.coworker,
            },
          ],
        });
      }
      else if (alreadyBookingId) {
        alreadyBookingId.bookingRef.push({
          bookig_ref_id: element.bookig_ref_id,
          bookingId: [
            {
              booking_id: element.booking_id,
              start: element.start_date,
              end: element.end_date,
              description: element.description,
              coworker: element.coworker,
            },
          ],
        });
      }
      else {
        newDataArray.push({
          address: element.address,
          city: element.city,
          main_image: element.main_image,
          title: element.title,
          workspace_id: element.workspace_id,
          bookingRef: [
            {
              bookig_ref_id: element.bookig_ref_id,
              bookingId: [
                {
                  booking_id: element.booking_id,
                  start: element.start_date,
                  end: element.end_date,
                  description: element.description,
                  coworker: element.coworker,
                },
              ],
            },
          ],
        });
      }
    });
  }

  getOrderDataCoworker();
  // eslint-disable-next-line no-console
  // console.log('Mon nouveau tableau', newDataArray);

  // Options afin de modifier le format de la date
  // eslint-disable-next-line object-curly-newline
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  // eslint-disable-next-line indent
    return (
      <div className="MesAnnonces">
        <h1 className="MesAnnonces-title">Mes Annonces</h1>
        {/* {newDataArray.map((list, index) => ( */}
        {newDataArray.map((list, index) => (
          <Card
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            sx={{ margin: '0.8rem' }}
          >
            <Card
              className="MesAnnonces-Card"
              sx={{ boxShadow: 'none' }}
            >
              <CardMedia
                className="MesAnnonces-Card-CardMedia"
                component="img"
                // sx={{ width: 151 }}
                image="https://digitalsynopsis.com/wp-content/uploads/2016/01/beautiful-desks-minimal-workstations-33.jpg"
                // image={list.main_image}
                alt=""
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <CardContent
                  sx={{ flex: '1 0 auto' }}
                  className="MesAnnonces-Card-CardContent"
                >
                  <Typography align="right">
                    <EditRoundedIcon />
                  </Typography>
                  <Typography component="div" variant="h6">
                    {list.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {/* eslint-disable-next-line quotes */}
                    À partir du { (new Date(list.bookingRef[0].bookingId[0].start)).toLocaleDateString("fr-FR", options) }
                    {/* {list.timeslot[0].start} */}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {list.address} à {list.city}
                    {/* {list.zipCode} */}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
            <Accordion
              className="MesAnnonces-Card-CardContent-Accordion"
            >
              <AccordionSummary
                className="MesAnnonces-Card-CardContent-Accordion-Summary"
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
                  <MesAnnoncesRefs data={list.bookingRef} />
                </TableContainer>
              </AccordionDetails>
            </Accordion>
          </Card>
        ))}
      </div>
  // eslint-disable-next-line indent
    );
  // eslint-disable-next-line indent
  }

// eslint-disable-next-line indent
  export default MesAnnonces;