/* eslint-disable no-console */
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './SearchInput.scss';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from '../Calendar/Calendar';

function SearchInput() {
  const dispatch = useDispatch();
  const getOther = () => {
    dispatch({
      type: 'GET_OTHER',
    });
  };

  const other = useSelector((state) => state.searchhome.other);
  // const getSelectedCity = useSelector((state) => state.searchhome.city);
  const getCity = (event) => {
    const searchCity = event.target.value;
    dispatch({
      type: 'GET_CITY',
      city: searchCity,
    });
  };
  return (
    <div className="divBox">
      <Box sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '16px', Width: '20vw', bgcolor: 'white', pt: 0.5, pb: 0.5, pl: 6, pr: 6,
      }}
      >
        <div className="textInfo">
          <p>Trouvez facilement votre <br />prochain espace de travail</p>
        </div>
        <div className="searchInput">

          <SearchIcon sx={{
            alignContent: 'left', color: 'black', mr: 1, ml: 1,
          }}
          />
          <Input
            onClick={getOther}
            onChange={getCity}
            className="input"
            placeholder="Ou allez vous ? "
            label="Ou ?"
          />
        </div>
        {other
      && (
      <div className="calendarButton">
        <div className="textCalendar"><p className="wherewhen">Quand ?</p>
          <Calendar />
        </div>
        <Button variant="contained">Rechercher</Button>
      </div>
      )}
      </Box>
    </div>
  );
}

export default SearchInput;
