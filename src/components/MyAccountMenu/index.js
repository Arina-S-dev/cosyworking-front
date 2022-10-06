/* eslint-disable no-console */
import './style.scss';
import Button from '@mui/material/Button';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import theme from '../../tools/themeMui';

function MyAccountMenu() {
  const userRole = useSelector((state) => state.user.role_id);
  function checkRole() {
    if (userRole === 'host') {
      return true;
    }
    return false;
  }

  return (
    <div className="account-menu">
      <ThemeProvider theme={theme}>
        <Stack spacing={2} direction="row">
          <Link to="/espace-perso/">
            <Button
              sx={{ whiteSpace: 'nowrap', minWidth: 'max-content' }}
              color="neutral"
              className="account-menu-elem"
              onClick={() => {
              // eslint-disable-next-line no-console
                console.log('je clique');
              }}
            >
              <ReplayRoundedIcon />Mon Espace Perso
            </Button>
          </Link>
          {checkRole()
          && (
            <>
              <Link to="/espace-perso/espace-hote/mes-annonces">
                <Button
                  sx={{ whiteSpace: 'nowrap', minWidth: 'max-content' }}
                  color="neutral"
                  className="account-menu-elem"
                  onClick={() => {
                    console.log('je clique');
                  }}
                >
                  Mes annonces
                </Button>
              </Link>
              <Button
                sx={{ whiteSpace: 'nowrap', minWidth: 'max-content' }}
                color="neutral"
                className="account-menu-elem"
                onClick={() => {
                  console.log('je clique');
                }}
              >
                Mes demandes
              </Button>
            </>
          )}
          {!checkRole()
          && (
          <>
            <Link to="/espace-perso/espace-coworker/mes-reservations">
              <Button
                sx={{ whiteSpace: 'nowrap', minWidth: 'max-content' }}
                color="neutral"
                className="account-menu-elem"
                onClick={() => {
                // eslint-disable-next-line no-console
                  console.log('je clique');
                }}
              >
                Mes réservations
              </Button>
            </Link>
            <Button
              color="neutral"
              className="account-menu-elem"
              onClick={() => {
                console.log('je clique');
              }}
            >
              Favoris
            </Button>
          </>
          )}
        </Stack>
      </ThemeProvider>
    </div>
  );
}

export default MyAccountMenu;
