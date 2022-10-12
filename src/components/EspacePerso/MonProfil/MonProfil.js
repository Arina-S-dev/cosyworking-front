/* eslint-disable camelcase */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line object-curly-newline
import { Button, Card, CardContent, CardMedia, Typography, Box, Avatar, Input } from '@mui/material';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { Link } from 'react-router-dom';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import './MonProfil.scss';
import { ThemeProvider } from '@emotion/react';
import theme from '../../../tools/themeMui';

function MonProfil() {
  // eslint-disable-next-line max-len, object-curly-newline
  const { username, gender, first_name, last_name, avatar, email, about } = useSelector((state) => state.user);
  // eslint-disable-next-line no-console
  console.log(avatar);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <h1 className="MonProfil-title">MonProfil</h1>
        <Card
          className="MonProfil-Card"
        >
          <CardMedia
            className="MonProfil-Card-CardMedia"
            component="img"
            image="https://digitalsynopsis.com/wp-content/uploads/2016/01/beautiful-desks-minimal-workstations-33.jpg"
            alt=""
          />
          <Box className="MonProfil-Card-MainBox">
            <Button onClick={handleOpen} sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
              <CreateRoundedIcon />
            </Button>
            <CardContent
              className="MonProfil-Card-MainBox-CardContent"
            >
              <Box className="MonProfil-Card-MainBox-CardContent-Box">
                <Box className="MonProfil-Card-MainBox-CardContent-Box-BoxAvatar">
                  <Avatar sx={{ width: 150, height: 150 }} alt="" src={`https://cosyworking-api.onrender.com/${avatar}`} />
                </Box>
                <Box className="MonProfil-Card-MainBox-CardContent-Box-BoxName">
                  <Typography variant="h6">
                    Username : {username}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    Civilité : {gender}
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
                </Box>
              </Box>
            </CardContent>
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
        <h1 className="MonProfil-title">MonProfil</h1>
        <Card
          className="MonProfil-Card"
        >
          <CardMedia
            className="MonProfil-Card-CardMedia"
            component="img"
            image="https://digitalsynopsis.com/wp-content/uploads/2016/01/beautiful-desks-minimal-workstations-33.jpg"
            alt=""
          />
          <form className="MonProfil-Card-MainBox" onSubmit={changeInfoProfil}>
            <CardContent
              className="MonProfil-Card-MainBox-CardContent"
            >
              <Box className="MonProfil-Card-MainBox-CardContent-Box">
                <Box className="MonProfil-Card-MainBox-CardContent-Box-BoxAvatar">
                  <Avatar sx={{ width: 150, height: 150 }} alt="" src={avatar} />
                </Box>
                <Box className="MonProfil-Card-MainBox-CardContent-Box-BoxName">
                  <Input placeholder={username} onChange={changeUsername} />
                  <Input type="text" placeholder={first_name} onChange={changeFirstName} />
                  <Input type="text" placeholder={last_name} onChange={changeLastName} />
                  <Input type="text" placeholder={email} onChange={changeEmail} />
                </Box>
              </Box>
            </CardContent>
            <Card className="MonProfil-Card-MainBox-BoxAbout">
              <h3 className="MonProfil-Card-MainBox-BoxAbout-title">A propos</h3>
              <Input type="text" placeholder={about} onChange={changeAbout} />
            </Card>
            <Button type="submit">Envoyer les modifications</Button>
          </form>
        </Card>
      </div>
      )}
    </>
  );
}

export default MonProfil;
