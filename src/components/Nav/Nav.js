/* eslint-disable no-else-return */
// eslint-disable-next-line object-curly-newline
import { BottomNavigation, Button, Paper, ThemeProvider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyIcon from '@mui/icons-material/Key';
import logo from '../../img/logo_reduit.png';
import minilogo from '../../img/LogoNavBar.png';
import './styles.scss';
import MenuBurger from './MenuBurger/MenuBurger';
import MenuBurgerMobile from './MenuBurger/MenuBurgerMobile';
import AccountMenu from './AccountMenu/AccountMenu';
import InscriptionMenuMobile from './InscriptionMenu/InscriptionMenuMobile';
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

  useEffect(() => {
    dispatch({ type: 'GET_RANDOM_ANNOUNCES' });
    dispatch({ type: 'EMPTY_STATE' });
  });

  return (
    <>
      <div className="NavDesktop">
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
              mt: '1em',
              mb: '1em',
            }}
          >
            <div className="menuBurger">
              <MenuBurger />
            </div>
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
                    height: '85%',
                    textTransform: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    lineHeight: '0.9rem',
                  }}
                >
                  {/* Gestion du bouton dans la nav */}
                  {getRole() ? <Link to="/espace-perso/espace-hote/mes-annonces/create">Louer mon espace</Link> : <Link path="/">Devenir hôte</Link>}
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
      <div className="NavMobile">
        {/* Composant Mui de la navbar */}
        <Paper
          sx={{
            /* position de la navbar */
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 99,
          }}
      // z-index de la nav
          elevation={3}
        >
          {/* Elements de la navbar */}
          <BottomNavigation
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '55px',
            }}
          >
            <MenuBurgerMobile />
            <Link to="/recherche">
              <div className="buttonNavBar">
                <SearchIcon />
                <p className="textNavBar">Rechercher</p>
              </div>
            </Link>
            <Link to="/">
              <div className="buttonNavBar">
                <img className="miniLogo" src={minilogo} alt="petit logo" />
              </div>
            </Link>
            <Link to="/recherche">
              <div className="buttonNavBar">
                <KeyIcon />
                {getRole() ? <Link to="/espace-perso/espace-hote/mes-annonces/create"><p className="textNavBar">Louer mon espace</p></Link> : <Link path="/"><p className="textNavBar">Devenir hôte</p></Link>}
              </div>
            </Link>
            <div className="Nav-leftNavBar">
              <ThemeProvider theme={theme}>
                <Button
                  type="submit"
                  variant="contained"
                  disableElevation
                  sx={{
                    width: '100%',
                    height: '85%',
                    textTransform: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    lineHeight: '0.9rem',
                    display: 'none',
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
          && <InscriptionMenuMobile /> }
            </div>
          </BottomNavigation>
        </Paper>
      </div>
    </>
  );
}

export default Nav;
