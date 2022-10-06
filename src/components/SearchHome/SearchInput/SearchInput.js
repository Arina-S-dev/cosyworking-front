/* eslint-disable no-console */
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './SearchInput.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import SearchCalendar from '../../SearchCalendar';
import theme from '../../../tools/themeMui';

function SearchInput() {
  const dispatch = useDispatch();
  const getOther = () => {
    dispatch({
      type: 'OPEN_CALENDAR_ON_HOMEPAGE',
    });
  };

  const calendarIsOpen = useSelector((state) => state.search.calendarHomePageIsOpen);
  // const getSelectedCity = useSelector((state) => state.searchhome.city);
  const getCity = (event) => {
    const city = event.target.value;
    dispatch({
      type: 'SEARCH_CITY',
      city: city,
    });
  };
  return (
    <div className="divBox">
      <ThemeProvider theme={theme}>
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
          {calendarIsOpen
      && (
      <div className="calendarButton">
        <div className="textCalendar"><p className="wherewhen">Quand ?</p>
          <SearchCalendar />
        </div>

      </div>
      )}
          <Button
            variant="contained"
            sx={{ margin: 3 }}
            onClick={() => {
              dispatch({
                type: 'GET_WORKSPACES',
              });
            }}
          >
            <Link to="/recherche">Rechercher</Link>
          </Button>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default SearchInput;
