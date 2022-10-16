/* eslint-disable indent */
import {
  Button,
  Modal,
  Typography,
  Avatar,
  Grid,
  TextField,
  FormGroup,
  FormControlLabel,
  Switch,
  Alert,
} from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';
// import FormLabel from '@mui/material/FormLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ModalConnexion from '../ModalConnexion/ModalConnexion';
import theme from '../../../tools/themeMui';
import './styles.scss';

function ModalInscription() {
  // Gestion de l'ouverture et fermeture de la Modale d'inscription
  // Gestion également de la fermeture de l'alerte Well SignUp
  const open = useSelector((state) => state.user.inscriptionModalOpen);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({
      type: 'MODAL_INSCRIPTION_OPENING',
      getOpening: false,
      alertWellSignUp: false,
    });
  };

  // Alerte si un des élements n'a pas été rempli pour l'inscription
  const errorRequiredElement = useSelector((state) => state.user.errorrequiredelement);

  // Récupération de l'erreur pour l'email deja existant dans la BDD
  const emailError = useSelector((state) => state.user.emailexistederror);

  // Récupération de l'erreur pour le format du mot de passe
  const paswordFormatError = useSelector((state) => state.user.passwordwrongformat);

  // Récupération de l'erreur pour le format du mot de passe
  const emailFormatError = useSelector((state) => state.user.emailwrongformat);

  // Récupération de l'etat de l'alerte pour informer l'utilisateur de son inscription
  const alertWellSignUp = useSelector((state) => state.user.alertWellSignUp);

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

  // eslint-disable-next-line camelcase, object-curly-newline
  const { first_name, last_name, email, password, gender } = useSelector((state) => state.user);

  // Alerte si un des élements demandés n'est pas rempli
  let [getErrorEmail, getErrorFirstName, getErrorLastName, getErrorPassword, getErrorGender] = '';
  // eslint-disable-next-line camelcase
  if (errorRequiredElement && first_name === '') {
    getErrorFirstName = true;
  }
  // eslint-disable-next-line camelcase
  if (errorRequiredElement && last_name === '') {
    getErrorLastName = true;
  }
  if (errorRequiredElement && email === '') {
    getErrorEmail = true;
  }
  if (errorRequiredElement && password === '') {
    getErrorPassword = true;
  }
  if (errorRequiredElement && gender === '') {
    getErrorGender = true;
  }

  // Envoi de la request pour l'inscription
  const setSignUp = (event) => {
    event.preventDefault();
    // eslint-disable-next-line indent
          dispatch({
            type: 'SET_SIGNUP',
          });
      };

  const handleInscriptionModal = () => {
    dispatch({
      type: 'MODAL_INSCRIPTION_OPENING',
      getOpening: false,
    });
  };

  return (
    <div className="ModalInscription">
      <Modal
        onSubmit={setSignUp}
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
              // marginTop: '1rem',
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
              { getErrorGender && <p className="ModalInscription-genderRequired">*Merci de renseigner votre civilité.</p>}
              <RadioGroup
                onChange={getSelectedGender}
                required
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
              component="div"
              id="modal-modal-description"
              sx={{
                width: '290px',
                margin: 'auto',
              }}
            >
              <Box
                component="form"
                noValidate
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      error={getErrorFirstName}
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
                      error={getErrorLastName}
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
                      error={getErrorEmail}
                      onChange={getEmail}
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  {/* Alerte si email deja existant dans la BDD */}
                  {emailError && <Alert className="ModalInscription-emailError" severity="error">Cet email existe déjà !</Alert>}
                  {/* Alerte si l'email' n'est pas au bon format */}
                  {emailFormatError && <Alert className="ModalInscription-passwordError" severity="error">L'email n'est pas au bon format !</Alert>}
                  <Grid item xs={12}>
                    <TextField
                      error={getErrorPassword}
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
                  <p className="ModalInscription-emailFormat">*inclure : minuscule, majuscule, caractère spécial, 8 caractères au minimum</p>
                  {/* Alerte si le password n'est pas au bon format */}
                  {paswordFormatError && <Alert className="ModalInscription-passwordError" severity="error">Le mot de passe n'est pas au bon format !</Alert>}
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
                    <Link href="#" variant="body2" onClick={handleInscriptionModal}>
                      <ModalConnexion />
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Typography>
          </div>
        </Box>
      </Modal>
      {alertWellSignUp
      && (
        <Modal open onClose={handleClose} align="center" sx={{ margin: '3rem' }}>
          <Alert severity="success">Vous êtes bien inscrit ! Vous pouvez maintenant vous connecter.</Alert>
        </Modal>
        )}
    </div>
  );
}

export default ModalInscription;
