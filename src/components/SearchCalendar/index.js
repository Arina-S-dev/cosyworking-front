/* eslint-disable max-len */
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import {
  getDate, setHours, addMonths, lightFormat, getMonth, getYear, format,
} from 'date-fns';
import classNames from 'classnames';
import { fr } from 'date-fns/locale';
import { Trash2 } from 'react-feather';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button } from '@mui/material';
import './index.scss';

function SearchCalendar() {
  const [bookings, setBookings] = useState([]);

  const [currentMonth, setCurrentMonth] = useState(getMonth(new Date()) + 1);
  const [currentDay, setCurrentDay] = useState(null);

  console.log('CURRENTDAY===>', currentDay);
  console.log('bookings===>', bookings);

  const bookingAlreadySelected = (date, startHour, endHour) => {
    const result = bookings.find((booking) => (
      (lightFormat(booking.startDate, 'dd-MM-yy-HH') === lightFormat(setHours(date, startHour), 'dd-MM-yy-HH'))
      && (lightFormat(booking.endDate, 'dd-MM-yy-HH') === lightFormat(setHours(date, endHour), 'dd-MM-yy-HH'))
    ));
    return Boolean(result);
  };

  const dayIsInBookingList = (date) => {
    const result = bookings.find((booking) => (
      (lightFormat(booking.startDate, 'dd-MM-yy') === lightFormat(date, 'dd-MM-yy'))
        && (lightFormat(booking.endDate, 'dd-MM-yy') === lightFormat(date, 'dd-MM-yy'))
    ));
    return Boolean(result);
  };

  const setBookingsList = (date, startHour, endHour) => {
    if (!bookingAlreadySelected(date, startHour, endHour)) {
      if (dayIsInBookingList(date)) {
        const filteredBooking = bookings.filter((booking) => (
          (lightFormat(booking.startDate, 'dd-MM-yy') !== lightFormat(date, 'dd-MM-yy'))
        && (lightFormat(booking.endDate, 'dd-MM-yy') !== lightFormat(date, 'dd-MM-yy'))
        ));

        setBookings([...filteredBooking, {
          startDate: new Date(setHours(date, startHour)),
          endDate: new Date(setHours(date, endHour)),
        }]);
      }
      else {
        setBookings([...bookings, {
          startDate: new Date(setHours(date, startHour)),
          endDate: new Date(setHours(date, endHour)),
        }]);
      }
    }
  };

  const handleClick = (event, date) => {
    event.stopPropagation();

    switch (event.target.value) {
      case 'matin':
        setBookingsList(date, 8, 12);
        break;
      case 'aprem':
        setBookingsList(date, 13, 17);
        break;
      case 'full':
        setBookingsList(date, 8, 17);
        break;
      default:
        return;
    }

    setCurrentDay(null);
  };

  const handleSelect = (date) => {
    console.log('selected date ==>', date);
    setCurrentDay(date);
  };

  const removeFromBookingsList = (event, date) => {
    event.stopPropagation();
    const filteredBooking = bookings.filter((booking) => (
      (lightFormat(booking.startDate, 'dd-MM-yy') !== lightFormat(date, 'dd-MM-yy'))
    && (lightFormat(booking.endDate, 'dd-MM-yy') !== lightFormat(date, 'dd-MM-yy'))
    ));

    setBookings([...filteredBooking]);

    setCurrentDay(null);
  };

  const renderDayContents = (day, date) => {
    const tooltipText = `Tooltip for date: ${date}`;

    return (
      <div
        className={classNames(
          'dayContainer',
          { isHidden: getMonth(date) !== currentMonth - 1 },
        )}
      >
        <span title={tooltipText}>{getDate(date)}</span>
        {
          currentDay && lightFormat(date, 'dd-MM-yy') === lightFormat(currentDay, 'dd-MM-yy')
          && (
          <div className={classNames('halfDayModale')}>

            <button className="halfDayModale_button" type="button" value="matin" onClick={(event) => (handleClick(event, date))}>Matin</button>
            <button className="halfDayModale_button" type="button" value="aprem" onClick={(event) => (handleClick(event, date))}>Après-midi</button>
            <button className="halfDayModale_button" type="button" value="full" onClick={(event) => (handleClick(event, date))}>Journée</button>
            {
              dayIsInBookingList(date)
              && <button className="halfDayModale_button  halfDayModale_button--delete " type="button" onClick={(event) => (removeFromBookingsList(event, date))}> <Trash2 size={16} /> </button>
            }
          </div>
          )
        }
      </div>
    );
  };

  const renderCustomHeader = ({
    date, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled,
  }) => (
    <div className="monthNav">
      <button
        type="button"
        onClick={() => {
          decreaseMonth();
          if (currentMonth === 1) {
            setCurrentMonth(12);
          }
          else {
            setCurrentMonth(currentMonth - 1);
          }
        }}
        disabled={prevMonthButtonDisabled}
        className="buttonNav"
        aria-label="Previous Month"
      >
        <ChevronLeft />

      </button>

      <div className="react-datepicker__current-month">{format(date, 'MMMM')} {getYear(date)}</div>

      <button
        type="button"
        onClick={() => {
          increaseMonth();
          if (currentMonth === 12) {
            setCurrentMonth(1);
          }
          else {
            setCurrentMonth(currentMonth + 1);
          }
        }}
        disabled={nextMonthButtonDisabled}
        className="buttonNav"
        aria-label="Next Month"
      >
        <ChevronRight />

      </button>

    </div>
  );

  return (
    <div className="searchCalendar">

      <DatePicker
        selected={currentDay}
        locale={fr}
        onSelect={handleSelect}
        inline
        renderDayContents={renderDayContents}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 12)}
        showDisabledMonthNavigation
        openToDate={null}
        // eslint-disable-next-line no-nested-ternary
        dayClassName={(date) => (bookingAlreadySelected(date, 8, 12) ? 'morningSelected' : bookingAlreadySelected(date, 13, 17) ? 'afternoonSelected' : bookingAlreadySelected(date, 8, 17) ? 'fullDaySelected' : undefined)}
        renderCustomHeader={renderCustomHeader}
      >

        <div className="searchCalendarButtonContainer">

          <button className="clearSelectedDates" type="button">
            Effacer
          </button>

          <Button
            variant="contained"
            size="small"
            onClick={() => {
              console.log('pouet!!!');
            }}
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
          >Enregistrer
          </Button>
        </div>

      </DatePicker>

    </div>
  );
}

export default SearchCalendar;
