import './Error.scss';
import { Link } from 'react-router-dom';

function error() {
  return (
    <div className="containerError">
      <p className="error404">Oups</p>
      <p className="errormessage"> Il semble que vous vous soyez trompé de bureau.</p>
      <Link className="buttonBackToHome" to="/">Revenir à l'accueil</Link>
    </div>
  );
}

export default error;
