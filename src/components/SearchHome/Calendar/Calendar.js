/* eslint-disable no-console */
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Calendar() {
  const getSelectedDate = useSelector((state) => state.searchhome.date);
  console.log(getSelectedDate);
  // const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const getDate = (date) => {
    // eslint-disable-next-line no-console
    // console.log(date);
    // setStartDate(new Date());
    dispatch({
      type: 'GET_DATE',
      date: date,
    });
  };
  return (
    <DatePicker selected={getSelectedDate} onChange={getDate} dateFormat="dd/MM/yyyy" placeholderText="Cliquez pour selectionner une date" className="calendar" isClearable>
      <div style={{ color: 'red' }}>Selectionnez votre date d'arrivée</div>
    </DatePicker>
  );
}
export default Calendar;
