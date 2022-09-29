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
  const getSelectedCity = useSelector((state) => state.searchhome.city);
  console.log(getSelectedCity);
  const getCity = (event) => {
    console.log(event);
    // dispatch({
    // type: 'GET_CITY',
    // city: city,
    // });
  };
  return (
    <div className="divBox">
      <Box sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '16px', width: '20%', bgcolor: 'white', pt: 0.5, pb: 0.5,
      }}
      >
        <div className="searchInput">
          <SearchIcon sx={{
            alignContent: 'left', color: 'black', mr: 1, ml: 1,
          }}
          />
          <Input
            onClick={getOther}
            onChange={getCity}
            className="input"
            placeholder="Demarrez votre recherche d'un workspace"
            fullWidth
          />
        </div>
        {other
      && (
      <div className="calendarButton">
        <div><Calendar /></div>
        <Button variant="contained">Rechercher</Button>
      </div>
      )}
      </Box>
    </div>
  );
}

export default SearchInput;
