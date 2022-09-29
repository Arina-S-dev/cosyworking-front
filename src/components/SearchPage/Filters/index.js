import './style.scss';

import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TuneIcon from '@mui/icons-material/Tune';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../tools/themeMui';

import style from './modalStyle';

function Modalfilters() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className="filters-button">
          <Button
            onClick={handleOpen}
            color="neutral"
            variant="outlined"
            startIcon={<TuneIcon />}
          >
            Filtres
          </Button>

        </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Filtres
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Choisissez les équipements :
              </Typography>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Cafétière" />
                <FormControlLabel control={<Checkbox />} label="Wifi" />
                <FormControlLabel control={<Checkbox />} label="Imprimante" />
                <FormControlLabel control={<Checkbox />} label="Cuisine à disposition" />
                <FormControlLabel control={<Checkbox />} label="Parking gratuit" />
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleClose}
                >Appliquer
                </Button>
              </FormGroup>
            </Box>
          </Fade>
        </Modal>
      </ThemeProvider>
    </div>
  );
}

export default Modalfilters;
