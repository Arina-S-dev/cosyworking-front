import { BottomNavigation, Button, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import logo from '../../img/logo.png';
import './styles.scss';
import MenuBurger from './MenuBurger/MenuBurger';
import AccountMenu from './AccountMenu/AccountMenu';
import InscriptionMenu from './InscriptionMenu/InscriptionMenu';

function Nav() {
  // Recupération du logged afin de savoir si on est connecté
  const logged = useSelector((state) => state.user.logged);

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
          paddingBottom: '0.3rem',
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
          <img src={logo} alt="logo" />
          <div className="Nav-leftNavBar">
            <Button
              sx={{
                width: '90px',
                border: 'solid 1px black',
                paddingRight: '0px',
                paddingLeft: '0px',
                margin: 'auto',
                fontSize: '0.8rem',
                borderRadius: '15px',
                textAlign: 'center',
                textTransform: 'none',
                color: '#8A8A8A',
              }}
            >
              Devenir hôte
            </Button>
            {/* Composant avec l'avatar de la navbar pour aller sur son espace perso ou */}
            {/* se deconnecter */}
            {logged && <AccountMenu />}
            {/* Composant avec l'avatar de la navbar pour se connecter si */}
            {/* l'on souhaite s'inscrire ou se connecter avec ses identifiants */}
            {!logged && <InscriptionMenu /> }
          </div>
        </BottomNavigation>
      </Paper>
      coucou
    </div>
  );
}

export default Nav;
