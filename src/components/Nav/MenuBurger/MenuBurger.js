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
          paddingTop: '0.9rem',
          color: 'black',
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
        <MenuItem onClick={handleClose}>A propos</MenuItem>
        <MenuItem onClick={handleClose}>FAQ</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
      </Menu>
    </div>
  );
}

export default MenuBurger;
