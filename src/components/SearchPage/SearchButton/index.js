import './style.scss';

import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../tools/themeMui';

function SearchButton() {
  return (
    <div className="search-button">
      <ThemeProvider theme={theme}>
        <Button
          color="primary"
          variant="contained"
        >
          <SearchIcon />
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default SearchButton;
