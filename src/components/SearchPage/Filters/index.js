import './style.scss';

import { useDispatch, useSelector } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TuneIcon from '@mui/icons-material/Tune';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { ThemeProvider } from '@mui/material/styles';
// import dataF from '../../../data/dataF.json';

import theme from '../../../tools/themeMui';

import style from './modalStyle';

function Modalfilters() {
  const filters = useSelector((state) => state.search.equipments);
  const open = useSelector((state) => state.search.modaleFilterIsOpen);
  const equipmentsListFromAPI = useSelector((state) => state.search.equipmentsListFromAPI);
  const isLoading = useSelector((state) => state.search.equipementsAPIisLoading);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleToggle = () => {
    dispatch({
      type: 'SET_MODAL_FILTERS',
    });
  };

  const handleFiltersChange = (event) => {
    const index = filters.indexOf(event.target.value);
    const { value } = event.target;
    if (index === -1) {
      dispatch({
        type: 'ADD_FILTER',
        filters: event.target.value,
      });
    }
    else {
      dispatch({
        type: 'REMOVE_FILTER',
        value: value,
      });
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className="filters-button">
          <Button
            onClick={handleToggle}
            color="neutral"
            variant="outlined"
          >
            <TuneIcon />
            <span>Filtres</span>
          </Button>

        </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleToggle}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Filtres
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Choisissez les équipements :
              </Typography>
              <form className="form-filters" onSubmit={handleSubmit}>
                <FormGroup>
                  {!isLoading
                  && equipmentsListFromAPI.map((filter) => (
                    <FormControlLabel
                      control={<Checkbox checked={filters.includes(filter.desciption)} />}
                      key={filter.id}
                      label={filter.description}
                      value={filter.description}
                      onClick={handleFiltersChange}
                    />
                  ))}
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    onClick={handleToggle}
                  >Appliquer
                  </Button>
                </FormGroup>
              </form>

            </Box>
          </Fade>
        </Modal>
      </ThemeProvider>
    </div>
  );
}

export default Modalfilters;
