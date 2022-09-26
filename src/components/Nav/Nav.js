import { BottomNavigation, Paper, Typography } from '@mui/material';
import logo from '../../img/logo.png';
import './styles.scss';
import MenuBurger from './MenuBurger/MenuBurger';
// import AccountMenu from './AccountMenu/AccountMenu';
import InscriptionMenu from './InscriptionMenu/InscriptionMenu';

function Nav() {
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
          }}
        >
          <MenuBurger />
          <img src={logo} alt="logo" />
          <div className="Nav-leftNavBar">
            <Typography
              sx={{
                width: '90px',
                border: 'solid 1px black',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                margin: '0.5rem',
                fontSize: '0.8rem',
                borderRadius: '10px',
                textAlign: 'center',
              }}
            >
              Devenir hôte
            </Typography>
            {/* Composant avec l'avatar de la navbar pour aller sur son espace perso ou */}
            {/* se deconnecter */}
            {/* <AccountMenu /> */}
            {/* Composant avec l'avatar de la navbar pour se connecter si */}
            {/* l'on souhaite s'inscrire ou se connecter avec ses identifiants */}
            <InscriptionMenu />
          </div>
        </BottomNavigation>
      </Paper>
      coucou
    </div>
  );
}

export default Nav;
