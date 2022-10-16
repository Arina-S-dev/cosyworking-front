import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../tools/themeMui';

const cities = [
  { label: 'Paris' },
  { label: 'Bayonne' },
  { label: 'Angers' },
  { label: 'Rennes' },
  { label: 'Marseille' },
  { label: 'Cannes' },
  { label: 'Tours' },
];

function Input() {
  const cityState = useSelector((state) => state.search.city);
  console.log('cityState', cityState);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cityState === '') {
      dispatch({
        type: 'SEARCH_CITY',
        city: 'Paris',
      });
    }
  }, []);
  const handleChange = (event) => {
    const city = event.target.value;
    dispatch({
      type: 'SEARCH_CITY',
      city: city,
    });
  };

  const handleCityChange = (value) => {
    const city = value.target.innerText;
    dispatch({
      type: 'SEARCH_CITY',
      city: city,
    });
  };

  return (
    <div className="search-input">
      <ThemeProvider theme={theme}>
        <Autocomplete
          size="small"
          disablePortal
          freeSolo
          id="combo-box-demo"
          forcePopupIcon={false}
          options={cities}
          onChange={handleCityChange}
          sx={{
            width: {
              xs: 280,
              sm: 400,
              md: 600,
              lg: 600,
            },
            textAlign: 'center',
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Recherchez par ville"
              label={cityState}
              onChange={handleChange}
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
      </ThemeProvider>
    </div>

  );
}

export default Input;
