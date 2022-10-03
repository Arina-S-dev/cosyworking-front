import {
  Avatar, Divider, IconButton, Menu, Tooltip,
} from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import ModalConnexion from '../ModalConnexion/ModalConnexion';
import ModalInscription from '../ModalInscription/ModalInscription';

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
          {/* Icone Avatar dans la navbar */}
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
        // onClick={handleClose}
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
        {/* Contenu de l'onglet 'inscription' */}
        <ModalInscription />
        <Divider />
        <ModalConnexion />
      </Menu>
    </div>
  );
}

export default InscriptionMenu;
