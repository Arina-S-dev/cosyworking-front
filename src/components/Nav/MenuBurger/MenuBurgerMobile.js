import { Button, Menu, MenuItem } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import * as React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

function MenuBurger() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="MenuBurger">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          pl: 0,
          pr: 0,
          pt: 0,
          pb: 0,
          minWidth: 55,
          color: 'black',
          display: 'flex',
          alignContent: 'center',
        }}
      >
        {/* Burger si fermé et croix si le menu est ouvert */}
        {open ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to="/">
          <MenuItem onClick={handleClose}>Accueil</MenuItem>
        </Link>
        <Link to="/recherche">
          <MenuItem onClick={handleClose}>Recherche</MenuItem>
        </Link>
        <Link to="/apropos">
          <MenuItem onClick={handleClose}>A propos</MenuItem>
        </Link>
        <Link to="/faq">
          <MenuItem onClick={handleClose}>FAQ</MenuItem>
        </Link>
        <Link to="/contact">
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Link>

      </Menu>
    </div>
  );
}

export default MenuBurger;
