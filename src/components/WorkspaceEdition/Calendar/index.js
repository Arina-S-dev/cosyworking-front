/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
// import React and DatePicker

import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
// import getDate from 'date-fns/getDate';
import {
  getHours, getDate, setHours, addMonths, lightFormat, getMonth, getYear, format, isWithinInterval, eachDayOfInterval,
} from 'date-fns';
import classNames from 'classnames';
import { fr } from 'date-fns/locale';
// import { Trash2 } from 'react-feather';
// import { Button } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import './style.scss';

// eslint-disable-next-line max-len

function MultipleReactDatePicker() {
  // const [bookings, setBookings] = useState([]);
  // const [totalSelectedDays, setTotalSelectedDays] = useState(null);

  const [currentMonth, setCurrentMonth] = useState(getMonth(new Date()) + 1);
  const [currentDay, setCurrentDay] = useState(null);

  // useEffect(() => {
  //   const fullDaysSelected = bookings.filter((booking) => (getHours(booking.startDate) === 8 && getHours(booking.endDate) === 17));
  //   const halfDaysSelected = bookings.filter((booking) => (!(getHours(booking.startDate) === 8 && getHours(booking.endDate) === 17)));

  //   // eslint-disable-next-line no-multi-assign
  //   const totalDays = (fullDaysSelected.length) + (halfDaysSelected.length * 0.5);

  //   setTotalSelectedDays(totalDays);
  // }, [bookings]);

  // eslint-disable-next-line no-console
  // console.log('CURRENTDAY===>', currentDay);
  // eslint-disable-next-line no-console
  // console.log('bookings===>', bookings);

  const bookingsList = [
    {
      startDate: 'Wed Oct 12 2022 08:00:00 GMT+0200 (heure d’été d’Europe centrale)',
      endDate: 'Wed Oct 12 2022 17:00:00 GMT+0200 (heure d’été d’Europe centrale)',
    },
    {
      startDate: 'Sat Oct 15 2022 08:00:00 GMT+0200 (heure d’été d’Europe centrale)',
      endDate: 'Sat Oct 15 2022 12:00:00 GMT+0200 (heure d’été d’Europe centrale)',
    },
    {
      startDate: 'Mon Oct 17 2022 13:00:00 GMT+0200 (heure d’été d’Europe centrale)',
      endDate: 'Mon Oct 17 2022 17:00:00 GMT+0200 (heure d’été d’Europe centrale)',
    },
    {
      startDate: 'Thu Oct 20 2022 13:00:00 GMT+0200 (heure d’été d’Europe centrale)',
      endDate: 'Thu Oct 20 2022 17:00:00 GMT+0200 (heure d’été d’Europe centrale)',
    },
    {
      startDate: 'Sat Oct 22 2022 08:00:00 GMT+0200 (heure d’été d’Europe centrale)',
      endDate: 'Sat Oct 22 2022 17:00:00 GMT+0200 (heure d’été d’Europe centrale)',
    },
    {
      startDate: 'Wed Oct 26 2022 08:00:00 GMT+0200 (heure d’été d’Europe centrale)',
      endDate: 'Wed Oct 26 2022 12:00:00 GMT+0200 (heure d’été d’Europe centrale)',
    },
  ];

  const DateIsBooked = (dateToTest) => {
    let isBooked = false;
    bookingsList.forEach((booking) => {
      const isInInterval = isWithinInterval(setHours(dateToTest, 8), {
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      })
      && isWithinInterval(setHours(dateToTest, 17), {
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
      if (isInInterval) {
        isBooked = true;
      }
    });
    return isBooked;
  };

  const halfDayIsBooked = (dateToTest, hour) => {
    let isBooked = false;

    bookingsList.forEach((booking) => {
      const isInInterval = isWithinInterval(setHours(dateToTest, hour), {
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
      if (isInInterval) {
        isBooked = true;
      }
    });
    return isBooked;
  };

  const getUnvalidDays = () => {
    let unvalidDates = [];

    bookingsList.forEach((booking) => {
      const arrayOfDaysInIntervale = eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
      unvalidDates = [...unvalidDates, ...arrayOfDaysInIntervale];
    });
    const filteredUnvalidDates = unvalidDates.filter((unvalidDate) => halfDayIsBooked(unvalidDate, 10) && halfDayIsBooked(unvalidDate, 14));
    return filteredUnvalidDates;
  };

  // const bookingAlreadySelected = (date, startHour, endHour) => {
  //   const result = bookings.find((booking) => (
  //     (lightFormat(booking.startDate, 'dd-MM-yy-HH') === lightFormat(setHours(date, startHour), 'dd-MM-yy-HH'))
  //     && (lightFormat(booking.endDate, 'dd-MM-yy-HH') === lightFormat(setHours(date, endHour), 'dd-MM-yy-HH'))
  //   ));
  //   return Boolean(result);
  // };

  // const bookingAlreadyExist = (date, startHour, endHour) => {
  //   const result = bookingsList.find((booking) => (
  //     (lightFormat(new Date(booking.startDate), 'dd-MM-yy-HH') === lightFormat(setHours(date, startHour), 'dd-MM-yy-HH'))
  //     && (lightFormat(new Date(booking.endDate), 'dd-MM-yy-HH') === lightFormat(setHours(date, endHour), 'dd-MM-yy-HH'))
  //   ));
  //   return Boolean(result);
  // };

  // const handleSelect = (date) => {
  //   // eslint-disable-next-line no-console
  //   console.log('selected date ==>', date);
  //   setCurrentDay(date);
  // };

  // const dayIsInBookingList = (date) => {
  //   const result = bookings.find((booking) => (
  //     (lightFormat(booking.startDate, 'dd-MM-yy') === lightFormat(date, 'dd-MM-yy'))
  //       && (lightFormat(booking.endDate, 'dd-MM-yy') === lightFormat(date, 'dd-MM-yy'))
  //   ));
  //   return Boolean(result);
  // };

  // const setBookingsList = (date, startHour, endHour) => {
  //   if (!bookingAlreadySelected(date, startHour, endHour)) {
  //     if (dayIsInBookingList(date)) {
  //       const filteredBooking = bookings.filter((booking) => (
  //         (lightFormat(booking.startDate, 'dd-MM-yy') !== lightFormat(date, 'dd-MM-yy'))
  //       && (lightFormat(booking.endDate, 'dd-MM-yy') !== lightFormat(date, 'dd-MM-yy'))
  //       ));

  //       setBookings([...filteredBooking, {
  //         startDate: new Date(setHours(date, startHour)),
  //         endDate: new Date(setHours(date, endHour)),
  //       }]);
  //     }
  //     else {
  //       setBookings([...bookings, {
  //         startDate: new Date(setHours(date, startHour)),
  //         endDate: new Date(setHours(date, endHour)),
  //       }]);
  //     }
  //   }
  // };

  // const handleClick = (event, date) => {
  //   event.stopPropagation();

  //   switch (event.target.value) {
  //     case 'matin':
  //       setBookingsList(date, 8, 12);
  //       break;
  //     case 'aprem':
  //       setBookingsList(date, 13, 17);
  //       break;
  //     case 'full':
  //       setBookingsList(date, 8, 17);
  //       break;
  //     default:
  //       return;
  //   }

  //   setCurrentDay(null);
  // };

  // const removeFromBookingsList = (event, date) => {
  //   event.stopPropagation();
  //   const filteredBooking = bookings.filter((booking) => (
  //     (lightFormat(booking.startDate, 'dd-MM-yy') !== lightFormat(date, 'dd-MM-yy'))
  //   && (lightFormat(booking.endDate, 'dd-MM-yy') !== lightFormat(date, 'dd-MM-yy'))
  //   ));

  //   setBookings([...filteredBooking]);

  //   setCurrentDay(null);
  // };

  const renderDayContents = (day, date) => {
    const tooltipText = `Tooltip for date: ${date}`;

    const morningBooked = halfDayIsBooked(date, 10);

    const afternoonBooked = halfDayIsBooked(date, 14);

    // const disableFullDay = morningBooked || afternoonBooked;

    const isDisabledDay = DateIsBooked(date) || (halfDayIsBooked(date, 10) && halfDayIsBooked(date, 14));
    // (morningBooked && afternoonBooked)

    return (
      <div
        className={classNames(
          'dayContainer',
          { isHidden: getMonth(date) !== currentMonth - 1 },
          { afternoonBooked: afternoonBooked && !isDisabledDay },
          { morningBooked: morningBooked && !isDisabledDay },
          { fullDayBooked: isDisabledDay },
        )}
      >
        <span title={tooltipText}>{getDate(date)}</span>
        {/* {
          currentDay && lightFormat(date, 'dd-MM-yy') === lightFormat(currentDay, 'dd-MM-yy')
          && (
          <div className={classNames('halfDayModale')}>

            <button className="halfDayModale_button" type="button" value="matin" onClick={(event) => (handleClick(event, date))} disabled={morningBooked}>Matin</button>
            <button className="halfDayModale_button" type="button" value="aprem" onClick={(event) => (handleClick(event, date))} disabled={afternoonBooked}>Après-midi</button>
            <button className="halfDayModale_button" type="button" value="full" onClick={(event) => (handleClick(event, date))} disabled={disableFullDay}>Journée</button>
            {
              dayIsInBookingList(date)
              && <button className="halfDayModale_button  halfDayModale_button--delete " type="button" onClick={(event) => (removeFromBookingsList(event, date))}> <Trash2 size={16} /> </button>
            }
          </div>
          )
        } */}
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
    <div className="calendarContainer">

      <DatePicker
        selected={currentDay}
        locale={fr}
        // onSelect={handleSelect}
        inline
        renderDayContents={renderDayContents}
        excludeDates={getUnvalidDays()}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 12)}
        showDisabledMonthNavigation
        openToDate={null}
        // eslint-disable-next-line no-nested-ternary
        // dayClassName={(date) => (bookingAlreadySelected(date, 8, 12) ? 'morningSelected' : bookingAlreadySelected(date, 13, 17) ? 'afternoonSelected' : bookingAlreadySelected(date, 8, 17) ? 'fullDaySelected' : undefined)}
        renderCustomHeader={renderCustomHeader}
      >

        {/* <div className="bookingsContainer">
          {
          totalSelectedDays > 0
          && (
            <div className="totalSelected">

              <p className="bookingsContainer_desc"> Nombres de jours: {totalSelectedDays} </p>
            </div>
          )
          }

        </div> */}

        {/* <Button
          variant="contained"
          size="small"
          onClick={() => {
            // eslint-disable-next-line no-console
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
        >Reserver
        </Button> */}

      </DatePicker>

    </div>
  );
}

MultipleReactDatePicker.propTypes = {

};

export default MultipleReactDatePicker;

// bookingAlreadyExist(date, 8, 12) ? 'morningBooked' :  bookingAlreadyExist(date, 13, 17) ? 'afternoonBooked' : bookingAlreadyExist(date, 8, 17) ? 'fullDayBooked' : undefined
