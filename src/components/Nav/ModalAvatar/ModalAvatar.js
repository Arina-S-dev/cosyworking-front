import { Button, Modal, Typography } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Box } from '@mui/system';
import { useState } from 'react';

function ModalAvatar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="ModalAvatar">
      <AccountCircleRoundedIcon
        onClick={handleOpen}
        sx={{
          marginTop: '0.9rem',
          marginRight: '2rem',
        }}
      />
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            backgroundColor: 'white',
            margin: '3rem',
            border: '10px solid white',
            borderRadius: '10px',
            maxWidth: '400px',
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              display: 'inline-block',
              // margin: '1rem',
              textAlign: 'center',
              width: '100%',
            }}
          >
            Menu
          </Typography>
          <div className="ModalBurger-listButtons">
            <Typography
              id="modal-modal-description"
              sx={{
                width: '150px',
                paddingTop: '0.3rem',
                margin: 'auto',
              }}
            >
              <Button
                variant="contained"
                disableElevation
                sx={{
                  width: '100%',
                }}
              >
                Accueil
              </Button>
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                width: '150px',
                paddingTop: '0.3rem',
                margin: 'auto',
              }}
            >
              <Button
                variant="contained"
                disableElevation
                sx={{
                  width: '100%',
                }}
              >
                Recherche
              </Button>
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                width: '150px',
                paddingTop: '0.3rem',
                margin: 'auto',
              }}
            >
              <Button
                variant="contained"
                disableElevation
                sx={{
                  width: '100%',
                }}
              >
                A propos
              </Button>
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                width: '150px',
                paddingTop: '0.3rem',
                margin: 'auto',
              }}
            >
              <Button
                variant="contained"
                disableElevation
                sx={{
                  width: '100%',
                }}
              >
                FAQ
              </Button>
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                width: '150px',
                paddingTop: '0.3rem',
                margin: 'auto',
              }}
            >
              <Button
                variant="contained"
                disableElevation
                sx={{
                  width: '100%',
                }}
              >
                Contact
              </Button>
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalAvatar;
