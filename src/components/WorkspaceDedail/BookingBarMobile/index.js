import PropTypes from 'prop-types';
import { Button, ThemeProvider } from '@mui/material';
import themeButton from '../../../tools/themeMui';

function BookingBarMobile({ halfDayPrice, dayPrice, openCalendarModale }) {
  return (
    <div className="bookingBarMobile">
      <div>
        <p className="bookingsContainer_desc price"> Demi-journée: {halfDayPrice} &euro; </p>
        <p className="bookingsContainer_desc price"> Journée complète: {dayPrice} &euro;</p>
      </div>
      <ThemeProvider theme={themeButton}>

        <Button
          variant="contained"
          size="small"
          onClick={openCalendarModale}
          sx={{
            color: 'white',
            margin: 1,
            // fontSize: 10,
            backgroundColor: '#FFC000',

          }}
        >Reserver
        </Button>
      </ThemeProvider>

    </div>
  );
}

BookingBarMobile.propTypes = {

  halfDayPrice: PropTypes.number.isRequired,
  dayPrice: PropTypes.number.isRequired,
  openCalendarModale: PropTypes.func.isRequired,

};

export default BookingBarMobile;
