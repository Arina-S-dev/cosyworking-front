/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
// eslint-disable-next-line object-curly-newline, max-len
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
import { useEffect } from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './MesAnnonces.scss';
// import MesAnnoncesRefs from './MesAnnoncesRefs/MesAnnoncesRefs';
import MyAccountMenu from '../../../MyAccountMenu';
import UrlImage from '../../../../axiosUrlImage';
import theme from '../../../../tools/themeMui';

function MesAnnonces() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'GET_HOST_ANNONCES',
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: 'CLEAN_WORKSPACE_DETAILS',
    });
  }, []);

  // On controle les boutons qui apparaissent dans la barre de menu
  useEffect(() => {
    dispatch({
      type: 'CONTROL_BAR_ESPACE_PERSO',
      getAccessNavBar: true,
    });
  }, []);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // On récupère les réservations des annonces de l'hote
  const getDataRequestsHost = useSelector((state) => state.user.datahostrequests);
  // On récupère les informations concernant le workspace de l'hôte
  // const getIdWorkspace = useSelector((state) => state.user.workspace_id);
  // eslint-disable-next-line no-console
  console.log('Mon tableau host que je recois bien', getDataRequestsHost);

  function getWorkspaceId(workspaceId) {
    dispatch({
      type: 'GET_WORKSPACE_ID',
      getWorkspaceId: workspaceId,
    });
  }

  // eslint-disable-next-line indent
    return (
      <div className="MesAnnonces">
        <MyAccountMenu />
        <h1 className="MesAnnonces-title">Mes Annonces</h1>
        {getDataRequestsHost.map((list, index) => (
          <Card
              // eslint-disable-next-line react/no-array-index-key
            key={index}
            sx={{ margin: '0.8rem' }}
          >
            <Card
              className="MesAnnonces-Card"
              sx={{ boxShadow: 'none' }}
            >
              {list.json_build_object.images !== null
              && (
              <CardMedia
                  // sx={{ maxHeight: '200px' }}
                className="MesAnnonces-Card-CardMedia"
                component="img"
                image={`${UrlImage}${list.json_build_object.images[0].link}`}
                alt=""
              />
              )}
              {list.json_build_object.images === null
              && (
              <CardMedia
                  // sx={{ maxHeight: '200px' }}
                className="MesAnnonces-Card-CardMedia"
                component="img"
                image="https://resize.elle.fr/original/var/plain_site/storage/images/deco/pieces/petits-espaces/50-objets-deco-pour-le-bureau/70841923-23-fre-FR/30-objets-pour-un-bureau-au-top.jpg"
                alt=""
              />
              )}
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <CardContent
                  sx={{ flex: '1 0 auto' }}
                  className="MesAnnonces-Card-CardContent"
                >
                  <Link to={`/espace-perso/espace-hote/mes-annonces/annonce/${list.json_build_object.workspace.id}`}>
                    <Button sx={{ width: '100%', display: 'flex', justifyContent: 'end', textTransform: 'none' }}>
                      <Typography>
                        Modifier l'annonce <EditRoundedIcon />
                      </Typography>
                    </Button>
                  </Link>
                  <Typography component="div" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {list.json_build_object.workspace.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ marginTop: '0.3rem', marginBottom: '0.7rem', lineHeight: '1rem' }}>
                    {list.json_build_object.workspace.address} à {list.json_build_object.workspace.city} {list.json_build_object.workspace.zip_code}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ marginTop: '0.3rem', marginBottom: '0.7rem', lineHeight: '1rem' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Prix à la journée :</Typography> {list.json_build_object.workspace.day_price} euros
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ marginTop: '0.3rem', marginBottom: '0.7rem', lineHeight: '1rem' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Prix à la demi-journée :</Typography> {list.json_build_object.workspace.half_day_price} euros
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ marginTop: '0.3rem', marginBottom: '0.7rem', lineHeight: '1rem' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Description :</Typography> {list.json_build_object.workspace.description}
                  </Typography>
                  <Link to={`/espace-perso/espace-hote/mes-annonces/${list.json_build_object.workspace.id}`}>
                    <ThemeProvider theme={theme}>
                      <Button
                        value={list.json_build_object.workspace.id}
                        sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}
                        onClick={() => {
                          getWorkspaceId(list.json_build_object.workspace.id);
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: '0.9rem',
                            textAlign: 'right',
                            width: '100%',
                            textTransform: 'none',
                          }}
                        >
                          Plus de détails sur les réservations
                        </Typography>
                      </Button>
                    </ThemeProvider>
                  </Link>
                </CardContent>
              </Box>
            </Card>
          </Card>
        ))}
      </div>
  // eslint-disable-next-line indent
    );
  // eslint-disable-next-line indent
  }

// eslint-disable-next-line indent
  export default MesAnnonces;
