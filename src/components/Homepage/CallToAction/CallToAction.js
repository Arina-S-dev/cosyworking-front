import './CallToAction.scss';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <div className="CTO">
      <p>Alors, qu'attendez vous pour reserver votre prochain espace de travail ? </p>
      <Link to="/recherche"> <Button variant="contained">Effectuer une recherche</Button> </Link>
    </div>
  );
}

export default CallToAction;
