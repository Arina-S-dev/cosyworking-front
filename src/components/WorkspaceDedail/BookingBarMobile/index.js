import PropTypes from 'prop-types';
import { Button } from '@mui/material';

function BookingBarMobile({ halfDayPrice, dayPrice, openCalendarModale }) {
  return (
    <div className="bookingBarMobile">
      <div>
        <p className="bookingsContainer_desc price"> Demi-journée: {halfDayPrice} &euro; </p>
        <p className="bookingsContainer_desc price"> Journée complète: {dayPrice} &euro;</p>
      </div>
      <Button
        variant="contained"
        size="small"
        onClick={openCalendarModale}
        sx={{
          color: '#8A8A8A',
          margin: 1,
          // fontSize: 10,
          backgroundColor: '#FFC000',
          ':hover': {
            backgroundColor: '#8A8A8A',
            color: '#FFC000',
          },
        }}
      >Reserver
      </Button>
    </div>
  );
}

BookingBarMobile.propTypes = {

  halfDayPrice: PropTypes.number.isRequired,
  dayPrice: PropTypes.number.isRequired,
  openCalendarModale: PropTypes.func.isRequired,

};

export default BookingBarMobile;
