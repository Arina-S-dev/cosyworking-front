/* eslint-disable no-console */
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './SearchInput.scss';
import { useDispatch, useSelector } from 'react-redux';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import SearchCalendar from '../../../SearchCalendar';
import theme from '../../../../tools/themeMui';
import style from './modalStyle';

function SearchInput() {
  const open = useSelector((state) => state.search.modaleCalendarIsOpen);
  const cityInputIsClicked = useSelector((state) => state.search.dateAppear);
  const dispatch = useDispatch();
  const OpenCalendar = () => {
    dispatch({
      type: 'OPEN_MODAL_CALENDAR',
    });
  };

  const CloseCalendar = () => {
    dispatch({
      type: 'CLOSE_MODAL_CALENDAR',
    });
  };

  const DateAppear = () => {
    dispatch({
      type: 'DATE_APPEAR_ON_HOMEPAGE',
    });
  };

  const dateList = useSelector((state) => state.search.date_list);
  console.log(dateList);
  function dateintableau() {
    if (dateList.length === 0) {
      return false;
    } return true;
  }
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
          display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '16px', Width: '20vw', bgcolor: 'white', pt: 0.5, pb: 6.5, pl: 6, pr: 6,
        }}
        >
          <div className="textInfo">
            <p>Trouvez facilement votre <br />prochain espace de travail</p>
          </div>
          <div className="searchInput">

            <SearchIcon />
            <Input
              onClick={DateAppear}
              onChange={getCity}
              className="input"
              placeholder="Ou allez vous ? "
              label="Ou ?"
            />
          </div>
          {cityInputIsClicked && (
          <ThemeProvider theme={theme}>
            <Button
              color="neutral"
              variant="outlined"
              onClick={OpenCalendar}
            >
              <CalendarMonthIcon />
              <span>Selectionnez vos dates</span>
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={CloseCalendar}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <SearchCalendar onClose={CloseCalendar} />
                </Box>
              </Fade>
            </Modal>
          </ThemeProvider>
          )}
          {dateintableau() && (
            <div className="validationDate">
              <p>Vos dates ont bien été prises en compte</p>
            </div>
          )}
          {cityInputIsClicked && (
          <Button
            variant="contained"
            sx={{
              mt: 4,
              mb: 1,
            }}
            onClick={() => {
              dispatch({
                type: 'GET_WORKSPACES',
              });
            }}
          >
            <Link to="/recherche">Rechercher</Link>
          </Button>
          )}
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default SearchInput;
