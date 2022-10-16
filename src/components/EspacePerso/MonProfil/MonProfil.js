/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line object-curly-newline
import { Button, Card, CardContent, Typography, Box, Avatar, TextField } from '@mui/material';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { Link } from 'react-router-dom';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import './MonProfil.scss';
import { ThemeProvider } from '@emotion/react';
import theme from '../../../tools/themeMui';
import UrlImage from '../../../axiosUrlImage';

function MonProfil() {
  // eslint-disable-next-line max-len, object-curly-newline
  const { username, gender, first_name, last_name, avatar, email, about } = useSelector((state) => state.user);
  // eslint-disable-next-line no-console
  console.log(avatar);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });

  const changeFirstName = (event) => {
    event.preventDefault();
    dispatch({
      type: 'GET_FIRSTNAME',
      firstname: event.target.value,
    });
  };

  const changeLastName = (event) => {
    event.preventDefault();
    dispatch({
      type: 'GET_LASTNAME',
      lastname: event.target.value,
    });
  };

  const changeEmail = (event) => {
    event.preventDefault();
    dispatch({
      type: 'GET_EMAIL',
      email: event.target.value,
    });
  };

  const changeAbout = (event) => {
    event.preventDefault();
    dispatch({
      type: 'GET_ABOUT',
      about: event.target.value,
    });
  };

  const changeUsername = (event) => {
    event.preventDefault();
    dispatch({
      type: 'GET_USERNAME',
      username: event.target.value,
    });
  };

  const changeInfoProfil = (event) => {
    event.preventDefault();
    dispatch({
      type: 'CHANGE_INFO_PRIVATE_PROFIL',
    });
    handleClose();
  };

  // Fonction pour obtenir Monsieur ou Madame
  const getWellGender = (getGender) => {
    // eslint-disable-next-line quotes, eqeqeq
    if (getGender == "female") {
      return 'Madame';
    }
    // eslint-disable-next-line eqeqeq
    if (getGender == 'male') {
      return 'Monsieur';
    }
    return 'Autre';
  };

  return (
    <>
      {!open
      && (
      <div className="MonProfil">
        <ThemeProvider theme={theme}>
          <Link to="/espace-perso/">
            <Button color="neutral">
              <ReplayRoundedIcon />
              Mon Espace Perso
            </Button>
          </Link>
        </ThemeProvider>

        <Card
          className="MonProfil-Card"
        >
          <div className="backTitleDiv">
            <h1 className="MonProfil-title">Mon Profil</h1>
          </div>
          <Box className="MonProfil-Card-MainBox">
            <Button
              onClick={handleOpen}
              sx={{
                width: '100%', display: 'flex', justifyContent: 'end',
              }}
            >
              <CreateRoundedIcon />
            </Button>
            <CardContent
              sx={{ padding: 0 }}
              className="MonProfil-Card-MainBox-CardContent"
            >
              <Box className="MonProfil-Card-MainBox-CardContent-Box">
                <Box className="MonProfil-Card-MainBox-CardContent-Box-BoxAvatar">
                  <Avatar sx={{ width: 150, height: 150 }} alt="" src={`${UrlImage}${avatar}`} />
                </Box>
                <Box className="MonProfil-Card-MainBox-CardContent-Box-BoxName">
                  <Card sx={{
                    pt: 5, pr: 5, pb: 5, pl: 5,
                  }}
                  >
                    <Typography variant="h6">
                      Username : {username}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                    >
                      Civilité : {getWellGender(gender)}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Prénom : {first_name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      Nom : {last_name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      Email : {email}
                    </Typography>
                  </Card>
                </Box>
              </Box>
            </CardContent>
            <div className="testCenterAbout">
              <Card className="MonProfil-Card-MainBox-BoxAbout">
                <h3 className="MonProfil-Card-MainBox-BoxAbout-title">A propos</h3>
                <Typography
                  className="MonProfil-Card-MainBox-BoxAbout-about"
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {about}
                </Typography>
              </Card>
            </div>
          </Box>
        </Card>
      </div>
      )}
      {open
      && (
      <div className="MonProfil">
        <ThemeProvider theme={theme}>
          <Link to="/espace-perso/">
            <Button color="neutral">
              <ReplayRoundedIcon />
              Mon Espace Perso
            </Button>
          </Link>
        </ThemeProvider>
        <Card
          className="MonProfil-Card"
        >
          <div className="backTitleDiv">
            <h1 className="MonProfil-title">Mon Profil</h1>
          </div>

          <form className="MonProfil-Card-MainBox" onSubmit={changeInfoProfil}>
            <CardContent
              className="MonProfil-Card-MainBox-CardContent"
            >
              <Box className="MonProfil-Card-MainBox-CardContent-Box">
                <Box className="MonProfil-Card-MainBox-CardContent-Box-BoxAvatar">
                  <Avatar sx={{ width: 150, height: 150 }} alt="" src={`${UrlImage}${avatar}`} />
                </Box>
                <Box className="MonProfil-Card-MainBox-CardContent-Box-BoxName">
                  <TextField
                    className="textfieldeditprofil"
                    label="Nom d'utilisateur"
                    defaultValue={username}
                    onChange={changeUsername}
                    sx={{ marginRight: '0.5rem', marginBottom: '0.5em' }}
                  />
                  <TextField label="Prénom" type="text" defaultValue={first_name} onChange={changeFirstName} sx={{ marginRight: '0.5rem', marginBottom: '0.5em' }} />
                  <TextField label="Nom" type="text" defaultValue={last_name} onChange={changeLastName} sx={{ marginRight: '0.5rem', marginBottom: '0.5em' }} />
                  <TextField label="Email" type="text" defaultValue={email} onChange={changeEmail} sx={{ marginRight: '0.5rem', marginBottom: '0.5em' }} />
                </Box>
              </Box>
            </CardContent>
            <Card className="cardAboutUsProfil">
              <h3 className="MonProfil-Card-MainBox-BoxAbout-title">A propos</h3>
              <TextField
                multiline
                maxRows={4}
                label="A Propos de vous "
                type="text"
                defaultValue={about}
                onChange={changeAbout}
                sx={{ marginRight: '0.5rem', marginBottom: '0.5em', width: '100%' }}
              />
            </Card>
            <Box className="MonProfil-Card-MainBox-BoxButtons">
              <ThemeProvider theme={theme}>
                <Button className="MonProfil-Card-MainBox-BoxButtons-ButtonSend" type="submit">Envoyer les modifications</Button>
                <Button className="MonProfil-Card-MainBox-BoxButtons-ButtonCanceled" onClose={handleClose} type="submit">Annuler</Button>
              </ThemeProvider>
            </Box>
          </form>
        </Card>
      </div>
      )}
    </>
  );
}

export default MonProfil;
