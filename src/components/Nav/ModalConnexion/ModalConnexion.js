import { Logout } from '@mui/icons-material';
import {
  Button,
  Modal,
  Typography,
  MenuItem,
  ListItemIcon,
  Input,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import {
  useDispatch,
} from 'react-redux';
import logoGoogle from '../../../img/logo_google.png';
import './styles.scss';

function ModalConnexion() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  // Obtention de l'email et enregistrement dans le state
  const getEmail = (event) => {
    // eslint-disable-next-line no-console
    console.log(event.target.value);
    const getWrittingEmail = event.target.value;
    dispatch({
      type: 'GET_EMAIL',
      email: getWrittingEmail,
    });
  };

  // Obtention du password et enregistrement dans le state
  const getPassword = (event) => {
    // eslint-disable-next-line no-console
    console.log(event.target.value);
    const getWrittingPassword = event.target.value;
    dispatch({
      type: 'GET_PASSWORD',
      password: getWrittingPassword,
    });
  };

  // Obtention de la connexion via le MiddleWare setConnexion
  const getConnexion = () => {
    dispatch({
      type: 'SET_CONNEXION',
    });
  };

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
            backgroundColor: 'white',
            margin: '3rem',
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
          <div className="ModalBurger-listButtons">
            <Typography
              id="modal-modal-description"
              sx={{
                width: '290px',
                paddingTop: '0.3rem',
                margin: 'auto',
              }}
            >
              {/* logo de Google */}
              <div className="ModalConnexion-Box-logo">
                <img className="ModalConnexion-Box-logo-Google" src={logoGoogle} alt="logo-Google" />
              </div>
              {/* Emplacement du 'ou'  */}
              <div className="ModalConnexion-Box-ou">
                <span className="ModalConnexion-Box-ou-textline" />
                <p className="ModalConnexion-Box-ou-text">
                  ou
                </p>
                <p className="ModalConnexion-Box-ou-textline" />
              </div>
              <form onSubmit={getConnexion}>
                <Input
                  onChange={getEmail}
                  type="email"
                  placeholder="Email"
                  sx={{
                    width: '100%',
                    margin: '0.5rem',
                  }}
                />
                <Input
                  onChange={getPassword}
                  type="password"
                  placeholder="Mot de passe"
                  sx={{
                    width: '100%',
                    margin: '0.5rem',
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  disableElevation
                  sx={{
                    width: '100%',
                    margin: '0.5rem',
                  }}
                >
                  Connexion
                </Button>
              </form>
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalConnexion;
