import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalConfirm() {
  const open = useSelector((state) => state.requests.openConfimModal);
  const description = useSelector((state) => state.requests.description);

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({
      type: 'CLOSE_CONFIRM_MODAL',
    });
  };

  const updateBookingStatus = () => {
    dispatch({
      type: 'UPDATE_BOOKING_STATUS',
      alertSuccess: true,
    });
  };

  return (
    <div>
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
            <Typography className="modal-text" variant="h6" component="h2">
              Êtes-vous sûr de bien vouloir
              { description === 'Validé' && (<p>valider cette demande ?</p>)}
              { description === 'Annulé' && (<p>annuler cette demande ?</p>)}
            </Typography>
            <Typography className="modal-buttons" sx={{ mt: 2 }}>
              <Button variant="outlined" onClick={handleClose}>Non</Button>
              <Button variant="contained" onClick={updateBookingStatus}>Oui</Button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
