/* eslint-disable no-else-return */
// eslint-disable-next-line object-curly-newline
import { BottomNavigation, Button, Paper, ThemeProvider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../img/logo_reduit.png';
import './styles.scss';
import MenuBurger from './MenuBurger/MenuBurger';
import AccountMenu from './AccountMenu/AccountMenu';
import InscriptionMenu from './InscriptionMenu/InscriptionMenu';
import theme from '../../tools/themeMui';

function Nav() {
  const dispatch = useDispatch();

  // Recupération du logged afin de savoir si on est connecté
  const logged = useSelector((state) => state.user.logged);

  // Récupération du rôle de l'utilisateur
  const userRole = useSelector((state) => state.user.role_id);

  // Fonction pour gérer le bouton 'devenir hote'
  const getRole = () => {
    // eslint-disable-next-line brace-style, semi
    if (userRole === 'host' && logged === true) { return true }
    // eslint-disable-next-line brace-style, semi
    else { return false }
  };

  const isThereAToken = localStorage.getItem('userToken');
  if (isThereAToken) {
    dispatch({
      type: 'GET_CONNEXION',
      logged: true,
    });
  }
  else {
    dispatch({
      type: 'GET_CONNEXION',
      logged: false,
    });
  }

  return (
    <div className="Nav">
      {/* Composant Mui de la navbar */}
      <Paper
        sx={{
          /* position de la navbar */
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
        }}
        // z-index de la nav
        elevation={3}
      >
        {/* Elements de la navbar */}
        <BottomNavigation
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '50px',
          }}
        >
          <MenuBurger />
          <Link to="/">
            <img className="imgLogo" src={logo} alt="logo" />
          </Link>
          <div className="Nav-leftNavBar">
            <ThemeProvider theme={theme}>
              <Button
                type="submit"
                variant="contained"
                disableElevation
                sx={{
                  width: '100%',
                  margin: '0rem',
                  height: '85%',
                  textTransform: 'none',
                  borderRadius: '8px',
                  verticalAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                {/* Gestion du bouton dans la nav */}
                {getRole() ? <Link path="/">Louer mon espace</Link> : <Link path="/">Devenir hôte</Link>}
              </Button>
            </ThemeProvider>
            {/* Composant avec l'avatar de la navbar pour aller sur son espace perso ou */}
            {/* se deconnecter */}
            {logged && <AccountMenu />}
            {/* Composant avec l'avatar de la navbar pour se connecter si */}
            {/* l'on souhaite s'inscrire ou se connecter avec ses identifiants */}
            {!logged
            && <InscriptionMenu /> }
          </div>
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default Nav;
