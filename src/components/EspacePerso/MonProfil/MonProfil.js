/* eslint-disable camelcase */
// eslint-disable-next-line object-curly-newline
import { Button, Card, CardContent, CardMedia, Typography, Box, Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import './MonProfil.scss';
import { ThemeProvider } from '@emotion/react';
import theme from '../../../tools/themeMui';

function MonProfil() {
  // eslint-disable-next-line max-len, object-curly-newline
  const { username, gender, first_name, last_name, avatar, email, about } = useSelector((state) => state.user);

  return (
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
          <CardContent
            className="MonProfil-Card-MainBox-CardContent"
          >
            <Box className="MonProfil-Card-MainBox-CardContent-Box">
              <Box className="MonProfil-Card-MainBox-CardContent-Box-BoxAvatar">
                <Avatar sx={{ width: 150, height: 150 }} alt="" src={avatar} />
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
  );
}

export default MonProfil;
