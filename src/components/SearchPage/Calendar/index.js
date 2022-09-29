import './style.scss';

import Button from '@mui/material/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../tools/themeMui';

function Calendar() {
  return (
    <div className="calendar-button">
      <ThemeProvider theme={theme}>
        <Button
          color="neutral"
          variant="outlined"
          startIcon={<CalendarMonthIcon />}
        >
          Dates
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default Calendar;
