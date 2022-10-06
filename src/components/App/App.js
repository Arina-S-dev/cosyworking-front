import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import EspacePerso from '../EspacePerso/EspacePerso';
import EspaceCoworker from '../EspacePerso/EspaceCoworker/EspaceCoworker';
import './App.scss';
import ModalAlertConnection from '../ModalAlertConnection/ModalAlertConnection';
import WorkspaceDetail from '../WorkspaceDedail';
import PublicProfil from '../PublicProfile';

// import css du caroussel de la page de detail du workspace
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import EspaceHost from '../EspacePerso/EspaceHost/EspaceHost';

function App() {
  // On vérifie si le token n'a pas expiré en récupérant l'état de connexion
  const errorConnection = useSelector((state) => state.user.error_connection);

  return (
    <div className="App">
      <Nav />
      {/* Si le token a expiré, on récupère une erreur et donc on incite l'user à se reconnecter */}
      {errorConnection && <ModalAlertConnection />}
      <Routes>
        <Route path="/espace-perso" element={<EspacePerso />} />
        <Route path="/espace-perso/mes-reservations" element={<EspaceCoworker />} />
        <Route path="/espace-perso/mes-locations" element={<EspaceHost />} />
        <Route path="/workspace" element={<WorkspaceDetail />} />
        <Route path="/profil" element={<PublicProfil />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
