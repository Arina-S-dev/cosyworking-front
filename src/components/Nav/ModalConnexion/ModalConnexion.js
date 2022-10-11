import { Logout } from '@mui/icons-material';
import {
  Button,
  Modal,
  Typography,
  MenuItem,
  ListItemIcon,
  Input,
  Alert,
  AlertTitle,
} from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
// import { useState } from 'react';
import {
  useDispatch, useSelector,
} from 'react-redux';
import theme from '../../../tools/themeMui';
import './styles.scss';

function ModalConnexion() {
  // Gestion de l'ouverture et fermeture de la Modale d'inscription
  const open = useSelector((state) => state.user.connexionModalOpen);
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch({
      type: 'MODAL_CONNEXION_OPENING',
      getOpening: true,
    });
  };
  const handleClose = () => {
    dispatch({
      type: 'MODAL_CONNEXION_OPENING',
      getOpening: false,
    });
  };

  // Récupération de l'alerte en cas de mauvais password ou email
  const getEmailPasswordAlert = useSelector((state) => state.user.statusconnection);

  // Obtention de l'email et enregistrement dans le state
  const getEmail = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    // console.log(event.target.value);
    const getWrittingEmail = event.target.value;
    dispatch({
      type: 'GET_EMAIL',
      email: getWrittingEmail,
    });
  };

  // Obtention du password et enregistrement dans le state
  const getPassword = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    // console.log(event.target.value);
    const getWrittingPassword = event.target.value;
    dispatch({
      type: 'GET_PASSWORD',
      password: getWrittingPassword,
    });
  };

  // Obtention de la connexion via le MiddleWare setConnexion
  const getConnexion = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SET_CONNEXION',
    });
  };

  // On vérifie si le token n'a pas expiré en récupérant l'état de connexion
  const errorConnection = useSelector((state) => state.user.error_connection);

  return (
    <div className="ModalConnexion">
      <MenuItem onClick={handleOpen}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Se Connecter
      </MenuItem>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            margin: 'auto',
            backgroundColor: 'white',
            border: '10px solid white',
            borderRadius: '10px',
            maxWidth: '400px',
          }}
        >
          {/* Titre de la modale */}
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              display: 'inline-block',
              marginTop: '1rem',
              marginBottom: '1rem',
              fontWeight: 'bold',
              textAlign: 'center',
              width: '100%',
            }}
          >
            Connexion
          </Typography>
          {/* On affiche un message si le token a exprié */}
          {errorConnection
          && (
          <Alert severity="info" sx={{ zIndex: '4' }}>
            <AlertTitle>Connexion</AlertTitle>
            Votre session a expiré, veuillez vous <strong>reconnecter!</strong>
          </Alert>
          )}
          <div className="ModalBurger-listButtons">
            <Typography
              component="div"
              id="modal-modal-description"
              sx={{ width: '290px', paddingTop: '0.3rem', margin: 'auto' }}
            >
              {/* Emplacement du 'ou'  */}
              <div className="ModalConnexion-Box-ou">
                <p className="ModalConnexion-Box-ou-text">
                  Entrez votre identifiant et Mot de passe
                </p>
              </div>
              {getEmailPasswordAlert && <Alert className="ModalConnexion-Box-Alert" severity="error">L'email ou le mot de passe ne sont pas valides !</Alert>}
              <form onSubmit={getConnexion}>
                <Input
                  onChange={getEmail}
                  type="email"
                  placeholder="Email"
                  sx={{ width: '100%', margin: '0.5rem' }}
                />
                <Input
                  onChange={getPassword}
                  type="password"
                  placeholder="Mot de passe"
                  sx={{ width: '100%', margin: '0.5rem' }}
                />
                <ThemeProvider theme={theme}>
                  <Button
                    type="submit"
                    variant="contained"
                    disableElevation
                    sx={{ width: '100%', margin: '0.5rem' }}
                  >
                    Connexion
                  </Button>
                </ThemeProvider>
              </form>
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalConnexion;
