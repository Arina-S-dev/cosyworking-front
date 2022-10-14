/* eslint-disable object-curly-newline */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
// eslint-disable-next-line object-curly-newline, max-len
import { Card, CardContent, CardMedia, TableBody, TableCell, TableHead, TableRow, Typography, Table, Button } from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import { useEffect } from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import data from './data.json';
import './MesAnnoncesDetails.scss';
import MyAccountMenu from '../../../../MyAccountMenu';
import UrlImage from '../../../../../axiosUrlImage';
import theme from '../../../../../tools/themeMui';

function MesAnnoncesDetails() {
  const dispatch = useDispatch();

  // const cleanInfoWorkspace = () => {
  //   dispatch({
  //     type: 'CLEAN_WORKSPACE_DETAILS',
  //   });
  // };

  // On controle les boutons qui apparaissent dans la barre de menu
  useEffect(() => {
    dispatch({
      type: 'GET_WORKSPACE_INFO',
    });
    dispatch({
      type: 'CONTROL_BAR_ESPACE_PERSO',
      getAccessNavBar: true,
    });
  }, []);

  // On récupère les informations concernant le workspace de l'hôte
  const getDataWorkspace = useSelector((state) => state.user.workspace_info);
  // eslint-disable-next-line no-console
  console.log('Les infos Workspace que je reçois', getDataWorkspace);

  // Options afin de modifier le format de la date
  // eslint-disable-next-line object-curly-newline
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  // Function afin d'obtenir le creneau 'Matinée', 'Apm' ou 'Journée'
  function getCreneau(a, b) {
    const date1 = new Date(a);
    const date2 = new Date(b);
    const time1 = `${date1.getHours('fr-FR')}h`;
    const time2 = `${date2.getHours('fr-FR')}h`;
    const getTheGoodCreneau = `de ${time1} à ${time2}`;

    if (getTheGoodCreneau === 'de 13h à 17h') {
      return 'Après-midi';
    }
    if (getTheGoodCreneau === 'de 8h à 12h') {
      return 'Matin';
    }
    if (getTheGoodCreneau === 'de 8h à 17h') {
      return 'Journée';
    }

    return getTheGoodCreneau;
  }

  const cleanDataWorkspace = () => {
    dispatch({
      type: 'CLEAN_WORKSPACE_DETAILS',
    });
  };

  // eslint-disable-next-line indent
    return (
      <div className="MesAnnoncesDetails">
        <MyAccountMenu />
        <Link to="/espace-perso/espace-hote/mes-annonces" onClick={cleanDataWorkspace}>
          <h1 className="MesAnnonces-title"><ReplayRoundedIcon />Revenir à 'Mes Annonces'</h1>
        </Link>
        {getDataWorkspace.map((list) => (
          <>
            <Card
              // eslint-disable-next-line react/no-array-index-key
              key={list.workspace_details.workspace.id}
              sx={{ margin: '0.8rem' }}
            >
              <Card
                className="MesAnnonces-Card"
                sx={{ boxShadow: 'none' }}
              >
                <CardMedia
                    // sx={{ maxHeight: '200px' }}
                  className="MesAnnonces-Card-CardMedia"
                  component="img"
                  image={`${UrlImage}${list.workspace_details.images[0].link}`}
                  alt=""
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <CardContent
                    sx={{ flex: '1 0 auto' }}
                    className="MesAnnonces-Card-CardContent"
                  >
                    <Link to={`/espace-perso/espace-hote/mes-annonces/annonce/${list.workspace_details.workspace.id}`}>
                      <Button sx={{ width: '100%', display: 'flex', justifyContent: 'end', textTransform: 'none' }}>
                        <Typography>
                          Modifier l'annonce <EditRoundedIcon />
                        </Typography>
                      </Button>
                    </Link>
                    <Typography component="div" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                      {list.workspace_details.workspace.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      {list.workspace_details.workspace.address} à {list.workspace_details.workspace.city} {list.workspace_details.workspace.zip_code}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      <Typography sx={{ fontWeight: 'bold' }}>Prix à la journée :</Typography> {list.workspace_details.workspace.day_price} euros
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      <Typography sx={{ fontWeight: 'bold' }}>Prix à la demi-journée :</Typography> {list.workspace_details.workspace.half_day_price} euros
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      <Typography sx={{ fontWeight: 'bold' }}>Description :</Typography> {list.workspace_details.workspace.description}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Card>
            {list.workspace_details.booking_list !== null
            && (
            <Card sx={{ margin: '0.8rem' }}>
              <Box key={list.bookig_ref_id}>
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
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {list.workspace_details.booking_list.map((element) => (
                      <TableRow
                        key={element.booking_id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="center" component="th" scope="row">
                          { (new Date(element.start_date)).toLocaleDateString('fr-FR', options) }
                        </TableCell>
                        <TableCell align="center">{getCreneau((element.start_date), (element.end_date))}</TableCell>
                        <TableCell align="center">50 euros</TableCell>
                      </TableRow>
                    ))}
                    {/* <MesAnnoncesDates data={list.workspace_details.booking_list} /> */}
                  </TableBody>
                </Table>
              </Box>
            </Card>
            )}
            {list.workspace_details.booking_list === null
            && (
            <Card sx={{ margin: '0.8rem' }}>
              <ThemeProvider theme={theme}>
                <Link to="/espace-perso/espace-hote/mes-annonces">
                  <Button align="center" sx={{ width: '100%' }}>
                    Pas de réservations en cours. Revenir à "Mes annonces"
                  </Button>
                </Link>
              </ThemeProvider>
            </Card>
            )}
          </>
        ))}
      </div>
  // eslint-disable-next-line indent
    );
  // eslint-disable-next-line indent
  }

// eslint-disable-next-line indent
  export default MesAnnoncesDetails;
