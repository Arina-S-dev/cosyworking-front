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
  // On récupère le controle de la barre de navigation de l'espace perso
  // selon que l'on soit 'host' ou 'coworker'
  const { controlNavBarEspacePerso } = useSelector((state) => state.user);

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
          {controlNavBarEspacePerso
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
              <Link to="/espace-perso/espace-hote/mes-demandes">
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
              </Link>
            </>
          )}

          {!controlNavBarEspacePerso
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
          <Link to="/espace-perso/wishlist">
            <Button
              sx={{ whiteSpace: 'nowrap', minWidth: 'max-content' }}
              color="neutral"
              className="account-menu-elem"
              onClick={() => {
                // eslint-disable-next-line no-console
                console.log('je clique');
              }}
            > Mes favoris
            </Button>
          </Link>
        </Stack>
      </ThemeProvider>
    </div>
  );
}

export default MyAccountMenu;
