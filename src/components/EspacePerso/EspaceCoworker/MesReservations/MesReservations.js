// eslint-disable-next-line object-curly-newline
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Button, Card, CardContent, CardMedia, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import data from '../data.json';
import './styles.scss';

function MesReservations() {
  return (
    <div className="MesReservations">
      <h1 className="MesReservations-title">Mes Réservations</h1>
      {data.map((list) => (
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
              image={list.workspace.image.link}
              alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <CardContent
                sx={{ flex: '1 0 auto' }}
                className="MesReservations-Card-CardContent"
              >
                <Typography component="div" variant="h5">
                  {list.workspace.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Date de la réservation
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Lieu
                </Typography>
                <Box className="MesReservations-Card-CardContent-Box">
                  <Typography
                    className="MesReservations-Card-CardContent-Box-Host"
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <Avatar className="MesReservations-Card-CardContent-Box-Host-Avatar" />
                    <p className="MesReservations-Card-CardContent-Box-Host-Name">Nom de l'hôte</p>
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Statut
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
                    {/* {rows.map((row) => ( */}
                    <TableRow
                        // key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      {/* <TableCell component="th" scope="row">
                        {row.date}
                      </TableCell>
                      <TableCell align="right">{row.creneau}</TableCell>
                      <TableCell align="right">{row.prix}</TableCell>
                      <TableCell align="right">' '</TableCell> */}
                      <TableCell align="center" component="th" scope="row">
                        22 décembre
                      </TableCell>
                      <TableCell align="center">Matinée</TableCell>
                      <TableCell align="center">50 euros</TableCell>
                      <TableCell align="center">
                        <Button>
                          <DeleteRoundedIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                    {/* ))} */}
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
