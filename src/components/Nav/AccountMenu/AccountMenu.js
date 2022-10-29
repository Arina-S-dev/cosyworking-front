import { Logout } from '@mui/icons-material';
import {
  Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip,
} from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UrlImage from '../../../axiosUrlImage';
import './styles.scss';

function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const avatar = useSelector((state) => state.user.avatar);

  // Permet de se déconnecter et de supprimer le token en LocalStorage
  const dispatch = useDispatch();
  const getLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };

  // Pour obtention de l'avatar au chargement de la page
  // React.useEffect(() => {
  //   dispatch({
  //     type: 'GET_USER_PRIVATE_PROFIL',
  //   });
  // });

  return (
    <div className="AccountMenu">
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            className="AccountMenu-connected"
            onClick={handleClick}
            size="small"
            sx={{
              ml: 0.5,
              marginTop: '0.3rem',
              marginRight: '0.5rem',
            }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar src={`${UrlImage}${avatar}`} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: 0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Link to="/espace-perso">
            <div className="avatarAccountdiv"><Avatar src={`${UrlImage}${avatar}`} /> Mon Espace Perso</div>
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={getLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Se Déconnecter
        </MenuItem>
      </Menu>
    </div>
  );
}

export default AccountMenu;
