import { BottomNavigation, Paper, Typography } from '@mui/material';
import logo from '../../img/logo.png';
import './styles.scss';
import MenuBurger from './MenuBurger/MenuBurger';
// import ModalAvatar from './ModalAvatar/ModalAvatar';
// import AccountMenu from './AccountMenu/AccountMenu';
import InscriptionMenu from './InscriptionMenu/InscriptionMenu';

function Nav() {
  return (
    <div className="Nav">
      <Paper
        sx={{
          position: 'fixed', top: 0, left: 0, right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          hideLabels
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        //   value={value}
        //   onChange={(event, newValue) => {
        //     setValue(newValue);
        //   }}
        >
          <MenuBurger />
          {/* <BottomNavigationAction label="Menu" icon={<MenuRoundedIcon />} /> */}
          <img src={logo} alt="logo" label="Logo" />
          <Typography
            sx={{
              width: '90px',
              border: 'solid 1px black',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              margin: '0.5rem',
              fontSize: '0.8rem',
              borderRadius: '10px',
            }}
          >
            Devenir hôte
          </Typography>
          {/* <BottomNavigationAction label="Avatar" icon={<AccountCircleRoundedIcon />} /> */}
          {/* <AccountMenu /> */}
          <InscriptionMenu />
        </BottomNavigation>
      </Paper>
      coucou
    </div>
  );
}

export default Nav;
