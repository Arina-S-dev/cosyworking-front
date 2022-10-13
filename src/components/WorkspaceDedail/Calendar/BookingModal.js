import {
  Button, Modal, Typography, Box, TextField,
  IconButton, ThemeProvider,
} from '@mui/material';
// eslint-disable-next-line import/no-unresolved
import {
  format, getHours,
} from 'date-fns';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { CancelOutlined } from '@mui/icons-material';
import themeButton from '../../../tools/themeMui';

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

const style = (theme) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width: 350,
  },

});

function BookingModal({
  handleCloseBookingModal, isOpenBookingModal, bookings, totalPrice,
}) {
  const submitStatus = useSelector((state) => state.workspaces.submitStatus);
  const userName = useSelector((state) => state.user.username);
  const workspaceId = useSelector((state) => state.workspaces.currentWorkspace.workspace.id);
  const host = useSelector((state) => state.workspaces.currentWorkspace.user[0].host);
  const navigate = useNavigate();
  //   const workspace = useSelector((state) => state.workspaces.workspaceToEdit);

  //   const [file, setFile] = useState(null);
  //   const [fileDataURL, setFileDataURL] = useState(mainImage.link);
  const dispatch = useDispatch();
  const [messageToSend, setMessageToSend] = useState('');

  const handleChange = (event) => {
    setMessageToSend(event.target.value);
  };

  if (submitStatus === 'succeed') {
    navigate('/espace-perso/espace-coworker/mes-reservations');
    dispatch({
      type: 'BOOKING_SUBMIT_STATUS',
      submitStatus: null,
    });
    dispatch({
      type: 'GET_COWORKER_RESERVATIONS',
    });
  }

  if (submitStatus === 'fail') {
    handleCloseBookingModal();
  }
  // useEffect(() => {

  // }, [submitStatus]);

  //   const formatDate = (date) => {
  //     const day = getDate(date);
  //     const month = getMonth(date);
  //     const year = getYear(date);
  //     return `${day}/${month}/${year}`;
  //   };

  return (

    <Modal
      open={isOpenBookingModal}
      onClose={handleCloseBookingModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ zIndex: 999999999999999 }}
    >
      <Box
        sx={style}
        component="form"
        onSubmit={(event) => {
          event.stopPropagation();
          event.preventDefault();

          dispatch({
            type: 'SEND_NEW_BOOKING',
            payload: {
              workspace_id: workspaceId,
              date_list: bookings,
              receiverEmail: 'cosyworking.dev@gmail.com',
              userPseudo: userName,
              message: messageToSend,
            },
          });

          // eslint-disable-next-line no-console
          console.log('pouet!!!', bookings);
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h3">
          Validation de votre demande de reservation
        </Typography>
        <div className="bookingDatesModaleContainer">
          <h4 className="bookingDatesModaleContainer_title"> Dates:</h4>
          {
            bookings.map((booking) => (
              <p key={booking.start_date}>Le {format(new Date(booking.start_date), 'dd/MM/yy')} de {getHours(booking.start_date)}h à {getHours(booking.end_date)}h</p>
            ))
          }
        </div>

        <p>Total: {totalPrice}&euro;</p>
        <h4 className="bookingDatesModaleContainer_title"> Ecrivez un message a {host} pour l'avertire de votre arrivé</h4>
        <TextField
          id="outlined-multiline-flexible"
          label="Message"
          multiline
          rows={8}
          value={messageToSend}
          onChange={handleChange}
          placeholder="Message"
          required
        />

        {
            submitStatus !== 'pending'

        && (

          <ThemeProvider theme={themeButton}>

            <Button
              variant="contained"
              size="medium"
              type="submit"
              sx={{
                color: 'white',
                margin: '1rem 0',
                width: '100%',
                // fontSize: 10,
                backgroundColor: '#FFC000',
              }}
            >Valider
            </Button>
          </ThemeProvider>

        )
        }

        {
            submitStatus === 'pending'

        && (
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
        )
        }

        <IconButton
          aria-label="delete"
          size="small"
          onClick={handleCloseBookingModal}
          sx={{

            color: 'black',
            position: 'absolute',
            top: 10,
            right: 10,
          }}
        >
          <CancelOutlined sx={{ fontSize: 26 }} />
        </IconButton>

      </Box>
    </Modal>

  );
}

BookingModal.propTypes = {
  handleCloseBookingModal: PropTypes.func.isRequired,
  isOpenBookingModal: PropTypes.bool.isRequired,
  totalPrice: PropTypes.number.isRequired,
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      start_date: PropTypes.string.isRequired,
      end_date: PropTypes.string.isRequired,
      host: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookingModal;

// import {
//     useParams,
//     useNavigate,
//     useLocation,
//   } from "react-router-dom";
