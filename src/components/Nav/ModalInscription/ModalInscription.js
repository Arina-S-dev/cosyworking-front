import {
  Button,
  Modal,
  Typography,
  MenuItem,
  ListItemIcon,
  Avatar,
  Grid,
  TextField,
//   FormControlLabel,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalConnexion from '../ModalConnexion/ModalConnexion';
import './styles.scss';

function ModalInscription() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="ModalInscription">
      <MenuItem onClick={handleOpen}>
        <ListItemIcon>
          <Avatar />
        </ListItemIcon>
        S'inscrire
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
            S'inscrire
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
              <Box
                component="form"
                noValidate
                // onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      <ModalConnexion />
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalInscription;
