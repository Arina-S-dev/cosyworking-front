import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import EspacePerso from '../EspacePerso/EspacePerso';
import EspaceCoworker from '../EspacePerso/EspaceCoworker/EspaceCoworker';
import Homepage from '../Homepage/Homepage';
import Error from '../Error/Error';
import EspaceHost from '../EspacePerso/EspaceHost/EspaceHost';
import MesReservations from '../EspacePerso/EspaceCoworker/MesReservations/MesReservations';
import MesAnnonces from '../EspacePerso/EspaceHost/MesAnnonces/MesAnnonces';
import WorkspaceDetail from '../WorkspaceDedail';
import PublicProfil from '../PublicProfile';
import WorkspaceEdition from '../WorkspaceEdition';
import SearchPage from '../SearchPage';
import './App.scss';

// import css du caroussel de la page de detail du workspace
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Faq from '../Faq/Faq';
import MentionsLegales from '../MentionsLegales/MentionsLegales';
import CGV from '../CGV/CGV';
import ContactUs from '../ContactUs/ContactUs';
import MonProfil from '../EspacePerso/MonProfil/MonProfil';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        {/* <Route path="/espace-perso" element={<MyAccountMenu />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/mentionslegales" element={<MentionsLegales />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/workspace/:id" element={<WorkspaceDetail />} />
        <Route path="/profil/:id" element={<PublicProfil />} />
        <Route path="/espace-perso/espace-hote/mes-annonces/annonce/" element={<WorkspaceEdition />} />
        <Route path="/recherche" element={<SearchPage />} />
        <Route path="/espace-perso" element={<EspacePerso />} />
        <Route path="/espace-perso/mon-profil" element={<MonProfil />} />
        <Route path="/espace-perso/espace-coworker" element={<EspaceCoworker />} />
        <Route path="/espace-perso/espace-coworker/mes-reservations" element={<MesReservations />} />
        <Route path="/espace-perso/espace-hote" element={<EspaceHost />} />
        <Route path="/espace-perso/espace-hote/mes-annonces" element={<MesAnnonces />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
