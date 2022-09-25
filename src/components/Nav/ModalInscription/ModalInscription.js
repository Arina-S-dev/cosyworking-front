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
import logoGoogle from '../../../img/logo_google.png';
import './styles.scss';

function ModalInscription() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="ModalInscription">
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
              <div className="ModalInscription-Box-logo">
                <img className="ModalInscription-Box-logo-Google" src={logoGoogle} alt="logo-Google" />
              </div>
              {/* Emplacement du 'ou'  */}
              <div className="ModalInscription-Box-ou">
                <span className="ModalInscription-Box-ou-textline" />
                <p className="ModalInscription-Box-ou-text">
                  ou
                </p>
                <p className="ModalInscription-Box-ou-textline" />
              </div>
              <form>
                <Input
                  type="email"
                  placeholder="Email"
                  sx={{
                    width: '100%',
                    margin: '0.5rem',
                  }}
                />
                <Input
                  type="password"
                  placeholder="Mot de passe"
                  sx={{
                    width: '100%',
                    margin: '0.5rem',
                  }}
                />
                <Button
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

export default ModalInscription;
