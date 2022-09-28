import { useState } from 'react';
import DatePicker from 'react-datepicker';

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
}

export default Calendar;
