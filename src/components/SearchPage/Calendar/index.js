import './style.scss';

import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import { ThemeProvider } from '@mui/material/styles';
import SearchCalendar from '../../SearchCalendar';

import theme from '../../../tools/themeMui';
import style from './modalStyle';

function Calendar() {
  const open = useSelector((state) => state.search.modaleCalendarIsOpen);
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch({
      type: 'OPEN_MODAL_CALENDAR',
    });
  };

  const handleClose = () => {
    dispatch({
      type: 'CLOSE_MODAL_CALENDAR',
    });
  };

  return (
    <div className="calendar-button">
      <ThemeProvider theme={theme}>
        <Button
          color="neutral"
          variant="outlined"
          onClick={handleOpen}
        >
          <CalendarMonthIcon />
          <span>Dates</span>
        </Button>
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
              <SearchCalendar onClose={handleClose} />
            </Box>
          </Fade>
        </Modal>
      </ThemeProvider>
    </div>
  );
}

export default Calendar;
