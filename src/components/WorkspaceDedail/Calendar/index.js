/* eslint-disable no-console */
/* eslint-disable max-len */
// import React and DatePicker

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import {
  getHours, getDate, setHours, addMonths, lightFormat, getMonth, getYear, format, isWithinInterval, eachDayOfInterval,
} from 'date-fns';
import classNames from 'classnames';
import { fr } from 'date-fns/locale';
import { Trash2 } from 'react-feather';
import { Button } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import BookingModal from './BookingModal';

import './index.scss';

// eslint-disable-next-line max-len

function MultipleReactDatePicker({
  dayPrice, halfDayPrice,
}) {
  const bookingsList = useSelector((state) => state.workspaces.currentWorkspace.booking_list) || [];
  // const workspaceId = useSelector((state) => state.workspaces.currentWorkspace);
  // const bookingsList = useSelector((state) => [state.workspaces.currentWorkspace.booking_list[0]]);
  // const userId = useSelector((state) => state.user.user_id);
  // const dispatch = useDispatch();
  const [bookings, setBookings] = useState([]);
  const [totalSelectedDays, setTotalSelectedDays] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);

  const [currentMonth, setCurrentMonth] = useState(getMonth(new Date()) + 1);
  const [currentDay, setCurrentDay] = useState(null);

  const [isOpenBookingModal, setIsOpenModaleInfos] = useState(false);

  const dispatch = useDispatch();
  const handleOpenBookingModal = () => {
    if (localStorage.getItem('userToken')) {
      setIsOpenModaleInfos(true);
    }
    else {
      // console.log('pas CONECTé');
      dispatch({
        type: 'MODAL_CONNEXION_OPENING',
        getOpening: true,
      });
    }
  };
  const handleCloseBookingModal = () => setIsOpenModaleInfos(false);

  useEffect(() => {
    const fullDaysSelected = bookings.filter((booking) => (getHours(booking.start_date) === 8 && getHours(booking.end_date) === 17));
    const halfDaysSelected = bookings.filter((booking) => (!(getHours(booking.start_date) === 8 && getHours(booking.end_date) === 17)));

    // eslint-disable-next-line no-multi-assign
    const totalDays = (fullDaysSelected.length) + (halfDaysSelected.length * 0.5);
    const totalAmount = (halfDaysSelected.length * halfDayPrice) + (fullDaysSelected.length * dayPrice);

    setTotalSelectedDays(totalDays);
    setTotalPrice(totalAmount);
  }, [bookings]);

  // eslint-disable-next-line no-console
  console.log('CURRENTDAY===>', currentDay);
  console.log('bookedDatesList===>', bookingsList);
  // eslint-disable-next-line no-console
  console.log('bookings===>', bookings);

  const DateIsBooked = (dateToTest) => {
    let isBooked = false;
    bookingsList.forEach((booking) => {
      const isInInterval = isWithinInterval(setHours(dateToTest, 8), {
        start: new Date(booking.start_date),
        end: new Date(booking.end_date),
      })
      && isWithinInterval(setHours(dateToTest, 17), {
        start: new Date(booking.start_date),
        end: new Date(booking.end_date),
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
        start: new Date(booking.start_date),
        end: new Date(booking.end_date),
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
        start: new Date(booking.start_date),
        end: new Date(booking.end_date),
      });
      unvalidDates = [...unvalidDates, ...arrayOfDaysInIntervale];
    });
    const filteredUnvalidDates = unvalidDates.filter((unvalidDate) => halfDayIsBooked(unvalidDate, 10) && halfDayIsBooked(unvalidDate, 14));
    return filteredUnvalidDates;
  };

  const bookingAlreadySelected = (date, startHour, endHour) => {
    const result = bookings.find((booking) => (
      (lightFormat(booking.start_date, 'dd-MM-yy-HH') === lightFormat(setHours(date, startHour), 'dd-MM-yy-HH'))
      && (lightFormat(booking.end_date, 'dd-MM-yy-HH') === lightFormat(setHours(date, endHour), 'dd-MM-yy-HH'))
    ));
    return Boolean(result);
  };

  const handleSelect = (date) => {
    // eslint-disable-next-line no-console
    console.log('selected date ==>', date);
    setCurrentDay(date);
  };

  const dayIsInBookingList = (date) => {
    const result = bookings.find((booking) => (
      (lightFormat(booking.start_date, 'dd-MM-yy') === lightFormat(date, 'dd-MM-yy'))
        && (lightFormat(booking.end_date, 'dd-MM-yy') === lightFormat(date, 'dd-MM-yy'))
    ));
    return Boolean(result);
  };

  const setBookingsList = (date, startHour, endHour) => {
    if (!bookingAlreadySelected(date, startHour, endHour)) {
      if (dayIsInBookingList(date)) {
        const filteredBooking = bookings.filter((booking) => (
          (lightFormat(booking.start_date, 'dd-MM-yy') !== lightFormat(date, 'dd-MM-yy'))
        && (lightFormat(booking.end_date, 'dd-MM-yy') !== lightFormat(date, 'dd-MM-yy'))
        ));

        setBookings([...filteredBooking, {
          start_date: setHours(date, startHour),
          end_date: setHours(date, endHour),
        }]);
      }
      else {
        setBookings([...bookings, {
          start_date: setHours(date, startHour),
          end_date: setHours(date, endHour),
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

  const removeFromBookingsList = (event, date) => {
    event.stopPropagation();
    const filteredBooking = bookings.filter((booking) => (
      (lightFormat(booking.start_date, 'dd-MM-yy') !== lightFormat(date, 'dd-MM-yy'))
    && (lightFormat(booking.end_date, 'dd-MM-yy') !== lightFormat(date, 'dd-MM-yy'))
    ));

    setBookings([...filteredBooking]);

    setCurrentDay(null);
  };

  const renderDayContents = (day, date) => {
    const tooltipText = `Tooltip for date: ${date}`;

    const morningBooked = halfDayIsBooked(date, 10);

    const afternoonBooked = halfDayIsBooked(date, 14);

    const disableFullDay = morningBooked || afternoonBooked;

    const isDisabledDay = DateIsBooked(date) || (halfDayIsBooked(date, 10) && halfDayIsBooked(date, 14));
    // (morningBooked && afternoonBooked)

    return (
      <div
        className={classNames(
          'dayContainer',
          { isHidden: getMonth(date) !== currentMonth - 1 },
          { 'react-datepicker__day--disabled': isDisabledDay },
        )}
      >
        <span title={tooltipText}>{getDate(date)}</span>
        {
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
    <div className="calendarContainer">

      <DatePicker
        selected={currentDay}
        locale={fr}
        onSelect={handleSelect}
        inline
        renderDayContents={renderDayContents}
        excludeDates={getUnvalidDays()}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 12)}
        showDisabledMonthNavigation
        openToDate={null}
        // eslint-disable-next-line no-nested-ternary
        dayClassName={(date) => (bookingAlreadySelected(date, 8, 12) ? 'morningSelected' : bookingAlreadySelected(date, 13, 17) ? 'afternoonSelected' : bookingAlreadySelected(date, 8, 17) ? 'fullDaySelected' : undefined)}
        renderCustomHeader={renderCustomHeader}
      >

        <div className="bookingsContainer">
          <p className="bookingsContainer_desc price"> Demi-journée: {halfDayPrice} &euro; </p>
          <p className="bookingsContainer_desc price"> Journée complète: {dayPrice} &euro;</p>
          {
          totalSelectedDays > 0
          && (
            <div className="totalSelected">

              <p className="bookingsContainer_desc"> Nombres de jours: {totalSelectedDays} </p>
              <p className="bookingsContainer_desc--total"> TOTAL: {totalPrice} &euro;</p>
            </div>
          )
          }

        </div>

        <Button
          variant="contained"
          size="small"
          onClick={handleOpenBookingModal}
          disabled={bookings.length === 0}
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
        <BookingModal handleCloseBookingModal={handleCloseBookingModal} isOpenBookingModal={isOpenBookingModal} bookings={bookings} setBookings={setBookings} totalPrice={totalPrice || 0} />

      </DatePicker>

    </div>
  );
}

MultipleReactDatePicker.propTypes = {
  halfDayPrice: PropTypes.number.isRequired,
  dayPrice: PropTypes.number.isRequired,
};

export default MultipleReactDatePicker;
