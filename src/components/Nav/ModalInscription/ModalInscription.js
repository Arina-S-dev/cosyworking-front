import {
  Button,
  Modal,
  Typography,
  MenuItem,
  ListItemIcon,
  Avatar,
  Grid,
  TextField,
  FormGroup,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from 'react-redux';
// import FormLabel from '@mui/material/FormLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ModalConnexion from '../ModalConnexion/ModalConnexion';
import theme from '../../../tools/themeMui';
import './styles.scss';

function ModalInscription() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  // Recupération de la selection du user pour le genre
  const getSelectedGender = (event) => {
    // eslint-disable-next-line no-console
    const getGender = event.target.value;
    dispatch({
      type: 'GET_SELECTEDGENDER',
      gender: getGender,
    });
  };

  // Recupération de la selection du user pour le rôle
  const getRole = (event) => {
    const radio = event.target.checked;
    const getRadio = radio ? 'host' : 'coworker';
    dispatch({
      type: 'GET_SELECTEDROLE',
      role: getRadio,
    });
  };

  // Obtention de l'email et enregistrement dans le state
  const getEmail = (event) => {
    event.preventDefault();
    const getWrittingEmail = event.target.value;
    dispatch({
      type: 'GET_EMAIL',
      email: getWrittingEmail,
    });
  };

  // Obtention du password et enregistrement dans le state
  const getPassword = (event) => {
    event.preventDefault();
    const getWrittingPassword = event.target.value;
    dispatch({
      type: 'GET_PASSWORD',
      password: getWrittingPassword,
    });
  };

  // Obtention du lastname et enregistrement dans le state
  const getLastName = (event) => {
    event.preventDefault();
    const getWrittingLastName = event.target.value;
    dispatch({
      type: 'GET_LASTNAME',
      lastname: getWrittingLastName,
    });
  };

  // Obtention du firstname et enregistrement dans le state
  const getFirstName = (event) => {
    event.preventDefault();
    const getWrittingFirstName = event.target.value;
    dispatch({
      type: 'GET_FIRSTNAME',
      firstname: getWrittingFirstName,
    });
  };

  // Envoi de la request pour l'inscription
  const setSignUp = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SET_SIGNUP',
    });
  };

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
            margin: 'auto',
            border: '10px solid white',
            borderRadius: '10px',
            maxWidth: '400px',
          }}
        >
          {/* Titre de la modale */}
          <Avatar
            sx={{
              m: 1,
              margin: 'auto',
              bgcolor: 'secondary.main',
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              display: 'inline-block',
              marginTop: '1rem',
              fontWeight: 'bold',
              textAlign: 'center',
              width: '100%',
            }}
          >
            S'inscrire
          </Typography>
          <div className="ModalBurger-listButtons">
            <FormControl
              sx={{
                margin: 'auto',
              }}
            >
              {/* <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  color: 'grey',
                }}
              >
                Civilité
              </FormLabel> */}
              <RadioGroup
                onChange={getSelectedGender}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Madame" />
                <FormControlLabel value="male" control={<Radio />} label="Monsieur" />
                <FormControlLabel value="other" control={<Radio />} label="Autre" />
              </RadioGroup>
            </FormControl>
            <Typography
              id="modal-modal-description"
              sx={{
                width: '290px',
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
                      onChange={getFirstName}
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="Prénom"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      onChange={getLastName}
                      required
                      fullWidth
                      id="lastName"
                      label="Nom"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={getEmail}
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={getPassword}
                      required
                      fullWidth
                      name="password"
                      label="Mot de passe"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
                <FormGroup>
                  <FormControlLabel
                    onChange={getRole}
                    control={<Switch />}
                    label="Devenir hôte*"
                    sx={{
                      margin: 'auto',
                    }}
                  />
                </FormGroup>
                <Typography
                  sx={{
                    fontSize: '0.6rem',
                  }}
                >
                  *Je souhaite mettre à disposition un espace
                </Typography>
                <ThemeProvider theme={theme}>
                  <Button
                    onClick={setSignUp}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    S'inscrire
                  </Button>
                </ThemeProvider>
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
