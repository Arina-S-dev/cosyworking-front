import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CallToAction from '../CallToAction/CallToAction';
import InfoStatic from '../InfoStatic/InfoStatic';
import RandomAnnounces from '../RandomAnnounces/RandomAnnounces';
import SearchHome from '../SearchHome/SearchHome';
import './Homepage.scss';

function App() {
  const loading = useSelector((state) => state.randomannounce.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'GET_RANDOM_ANNOUNCES' });
  }, []);
  return (
    <div className="App">
      <SearchHome />
      <InfoStatic />
      <CallToAction />
      {
        loading === false
        && <RandomAnnounces />
      }
    </div>
  );
}

export default App;
