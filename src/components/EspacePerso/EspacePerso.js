// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Obtention des réservations du coworker
function EspacePerso() {
  const dispatch = useDispatch();
  const getrole = useSelector((state) => state.user.role_id);
  const getCoworkerReservations = () => {
    dispatch({
      type: 'GET_COWORKER_RESERVATIONS',
    });
  };

  const getHostSpacesRequests = () => {
    dispatch({
      type: 'GET_HOST_REQUESTS',
    });
  };

  // Gestion de la rubrique 'Mon espace Hote'
  function getRoleUser() {
    if (getrole === 'host') {
      return true;
    }
    return false;
  }

  return (
    <div className="EspacePerso">
      <h1 className="EspacePerso-title">Mon Espace Perso</h1>
      <div className="EspacePerso-AllCards">
        <Link to="#" className="EspacePerso-Link">
          <Card className="EspacePerso-Card">
            <CardActionArea>
              <CardMedia
                className="EspacePerso-Card-CardMedia"
                component="img"
                image="https://cdn.pixabay.com/photo/2020/01/08/03/56/man-4749237_1280.jpg"
                alt="mon profil"
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  Mon profil
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link to="/espace-perso/mes-reservations" className="EspacePerso-Link" onClick={getCoworkerReservations}>
          <Card className="EspacePerso-Card">
            <CardActionArea>
              <CardMedia
                className="EspacePerso-Card-CardMedia"
                component="img"
                image="https://cdn.pixabay.com/photo/2016/11/19/17/25/furniture-1840463_1280.jpg"
                alt="mon profil"
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  Mon espace co-worker
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        {getRoleUser() ? (
          <Link to="/espace-perso/mes-locations" className="EspacePerso-Link" onClick={getHostSpacesRequests}>
            <Card className="EspacePerso-Card">
              <CardActionArea>
                <CardMedia
                  className="EspacePerso-Card-CardMedia"
                  component="img"
                  image="https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg"
                  alt="mon profil"
                />
                <CardContent>
                  <Typography gutterBottom variant="h7" component="div">
                    Mon espace hôte
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ) : (
          <Link to="" className="EspacePerso-Link">
            <Card className="EspacePerso-Card">
              <CardActionArea>
                <CardMedia
                  className="EspacePerso-Card-CardMedia"
                  component="img"
                  image="https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg"
                  alt="mon profil"
                />
                <CardContent sx={{ backgroundColor: '#e8e8e8' }}>
                  <Typography gutterBottom variant="h7" component="div">
                    Devenir hôte et louer son bureau !
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        )}
      </div>
    </div>
  );
}

export default EspacePerso;
