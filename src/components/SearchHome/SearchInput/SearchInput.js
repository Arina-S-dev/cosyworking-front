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
  useSelector
  return (
    <Box sx={{
      display: 'flex', alignItems: 'center', alignContent: 'center', borderRadius: '16px', width: '50%', bgcolor: 'white', pt: 0.5, pb: 0.5,
    }}
    >
      <SearchIcon sx={{
        alignContent: 'center', color: 'black', mr: 1, ml: 1,
      }}
      />
      <Input
        onClick={getOther}
        className="input"
        placeholder="Demarrez votre recherche"
        fullWidth
        sx={{
          border: 'none',
        }}
      />
      {other
      && (
      <>
        <Calendar />
        <Button variant="contained">Contained</Button>
      </>
      )}
    </Box>
  );
}

export default SearchInput;
