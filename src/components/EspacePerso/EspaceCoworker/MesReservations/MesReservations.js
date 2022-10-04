// eslint-disable-next-line object-curly-newline
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Button, Card, CardContent, CardMedia, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { useSelector } from 'react-redux';
// import data from '../data.json';
import './styles.scss';

function MesReservations() {
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
  // eslint-disable-next-line no-console
  console.log(newDataArray);

  return (
    <div className="MesReservations">
      <h1 className="MesReservations-title">Mes Réservations</h1>
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
              sx={{ width: 151 }}
              image={list.image_link}
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
                  À partir du {list.timeslot[0].start}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {list.address}
                  {/* {list.zipCode} */}
                  {list.city}
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
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {list.state}
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Card>
          <Accordion
            className="MesReservations-Card-CardContent-Accordion"
          >
            <AccordionSummary
              className="MesReservations-Card-CardContent-Accordion-AccordionSummary"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Plus de détails</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer>
                <Table
                  sx={{
                    minWidth: 'auto',
                  }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: 'bold',
                        }}
                        align="center"
                      >
                        Date(s)
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: 'bold',
                        }}
                        align="center"
                      >
                        Creneau(x)
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: 'bold',
                        }}
                        align="center"
                      >
                        Prix
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: 'bold',
                        }}
                        align="center"
                      >
                        Gérer
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {newDataArray.map((row) => (
                      <TableRow
                        key={row.timeslot[0].start}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="center" component="th" scope="row">
                          du {row.timeslot[0].start} au {row.timeslot[0].end}
                        </TableCell>
                        <TableCell align="center">Matinée</TableCell>
                        <TableCell align="center">50 euros</TableCell>
                        <TableCell align="center">
                          <Button>
                            <DeleteRoundedIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        </Card>
      ))}
    </div>
  );
}

export default MesReservations;
