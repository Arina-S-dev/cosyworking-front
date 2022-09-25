import { Logout } from '@mui/icons-material';
import {
  Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip,
} from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

function InscriptionMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="InscriptionMenu">
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Connexion">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{
              ml: 2,
              marginTop: '0.3rem',
              marginRight: '2rem',
            }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar />
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
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
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
          <Avatar /> S'inscrire
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Se Connecter
        </MenuItem>
      </Menu>
    </div>
  );
}

export default InscriptionMenu;
