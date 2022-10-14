import './CallToAction.scss';
import { Button, ThemeProvider } from '@mui/material/';
import { Link } from 'react-router-dom';
import theme from '../../../tools/themeMui';

function CallToAction() {
  return (
    <div className="CTO">
      <p>Alors, qu'attendez vous pour reserver votre prochain espace de travail ? </p>
      <ThemeProvider theme={theme}>

        <Link to="/recherche"> <Button variant="contained">Effectuer une recherche</Button> </Link>

      </ThemeProvider>
    </div>
  );
}

export default CallToAction;
