import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFC000', // jaune
    },
    secondary: {
      main: '#FFFFFF', // blanc
    },
    neutral: {
      main: '#8A8A8A', // gris
      contrastText: '#000000', // noir
    },
  },
});

export default theme;
