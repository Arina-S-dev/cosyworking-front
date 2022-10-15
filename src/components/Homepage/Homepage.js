import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CallToAction from './CallToAction/CallToAction';
import InfoStatic from './InfoStatic/InfoStatic';
import RandomAnnounces from './RandomAnnounces/RandomAnnounces';
import SearchHome from './SearchHome/SearchHome';
import './Homepage.scss';

function Homepage() {
  const loading = useSelector((state) => state.randomannounce.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'GET_RANDOM_ANNOUNCES' });
    dispatch({ type: 'EMPTY_STATE' });
  }, []);

  return (
    <div className="Homepage">
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

export default Homepage;
