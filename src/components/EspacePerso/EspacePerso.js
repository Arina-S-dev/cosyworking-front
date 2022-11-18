// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// Obtention des réservations du coworker
function EspacePerso() {
  const dispatch = useDispatch();
  const getrole = useSelector((state) => state.user.role_id);
  const askCoworkerReservations = useSelector((state) => state.user.datacoworkerreservations);
  const getCoworkerReservations = () => {
    dispatch({
      type: 'GET_COWORKER_RESERVATIONS',
    });
  };

  function getPrivatePersonnalInfos() {
    dispatch({
      type: 'GET_USER_PRIVATE_PROFIL',
    });
  }

  const getWishlist = () => {
    dispatch({
      type: 'FETCH_WISHLIST',
    });
  };

  const getHostSpacesRequests = () => {
    dispatch({
      type: 'GET_HOST_ANNONCES',
    });
  };

  // Gestion de la rubrique 'Mon espace Hote'
  function getRoleUser() {
    if (getrole === 'host') {
      return true;
    }
    return false;
  }

  // Gestion de la rubrique "Mes Réservations"
  // si l'user est : hôte + sans réservations
  const appearReservations = () => {
    if (askCoworkerReservations.length === 0 && getrole === 'host') {
      return true;
    }
    return false;
  };

  // On charge directement les reservations afin de savoir
  // si l'hôte a également des reservations
  useEffect(() => {
    dispatch({
      type: 'GET_COWORKER_RESERVATIONS',
    });
  }, []);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="EspacePerso">
      <h1 className="EspacePerso-title">Mon Espace Perso</h1>
      <div className="EspacePerso-AllCards">
        <Link to="/espace-perso/mon-profil" className="EspacePerso-Link" onClick={getPrivatePersonnalInfos()}>
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
        {appearReservations() ? (
          <Link to="/recherche" className="EspacePerso-Link" onClick={getCoworkerReservations}>
            <Card className="EspacePerso-Card">
              <CardActionArea>
                <CardMedia
                  className="EspacePerso-Card-CardMedia"
                  component="img"
                  image="https://cdn.pixabay.com/photo/2016/11/19/17/25/furniture-1840463_1280.jpg"
                  alt="mon profil"
                />
                <CardContent sx={{ backgroundColor: '#e8e8e8' }}>
                  <Typography gutterBottom variant="h7" component="div">
                    Réservez un espace et devenez co-worker !
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ) : (
          <Link to="/espace-perso/espace-coworker" className="EspacePerso-Link" onClick={getCoworkerReservations}>
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
        )}
        {getRoleUser() ? (
          <Link to="/espace-perso/espace-hote" className="EspacePerso-Link" onClick={getHostSpacesRequests}>
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
        <Link to="/espace-perso/wishlist" className="EspacePerso-Link" onClick={getWishlist}>
          <Card className="EspacePerso-Card">
            <CardActionArea>
              <CardMedia
                className="EspacePerso-Card-CardMedia"
                component="img"
                image="https://www.aventbirthday.fr/wp-content/uploads/WISHLIST.jpeg"
                alt="mon profil"
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  Ma liste de souhaits
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default EspacePerso;
