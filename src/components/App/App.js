import CallToAction from '../CallToAction/CallToAction';
import InfoStatic from '../InfoStatic/InfoStatic';
import SearchHome from '../SearchHome/SearchHome';
import './App.scss';

function App() {
  return (
    <div className="App">
      <SearchHome />
      <InfoStatic />
      <CallToAction />
    </div>
  );
}

export default App;
