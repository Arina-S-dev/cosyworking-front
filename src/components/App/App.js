import './App.scss';
// import WorkspaceDetail from '../WorkspaceDedail';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import LeafletMap from '../WorkspaceDedail/Map';
// import { Route, Routes } from 'react-router-dom';
// import SearchCalendar from '../SearchCalendar';
import PublicProfil from '../PublicProfile';

function App() {
  return (
    <div className="App">
      <div className="NavBar">navBar</div>

      {/* <WorkspaceDetail /> */}
      <PublicProfil />

      {/* <SearchCalendar /> */}

      {/* <div className="footer">footer</div> */}
    </div>
  );
}

export default App;
