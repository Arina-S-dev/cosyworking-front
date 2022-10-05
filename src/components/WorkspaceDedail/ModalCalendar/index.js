import PropTypes from 'prop-types';
import { CancelOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Calendar from '../Calendar';

function CalendarModal({
  className, dayPrice, halfDayPrice, closeCalendarModale,
}) {
  return (
    <div className={className}>
      <Calendar dayPrice={dayPrice} halfDayPrice={halfDayPrice} />
      <IconButton
        aria-label="delete"
        size="small"
        onClick={closeCalendarModale}
        sx={{

          color: 'black',
          position: 'absolute',
          top: 10,
          right: 10,
        }}
      >
        <CancelOutlined sx={{ fontSize: 26 }} />
      </IconButton>
    </div>
  );
}

CalendarModal.propTypes = {

  className: PropTypes.string.isRequired,
  halfDayPrice: PropTypes.number.isRequired,
  dayPrice: PropTypes.number.isRequired,
  closeCalendarModale: PropTypes.func.isRequired,

};

export default CalendarModal;
