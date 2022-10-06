import './style.scss';
import { FormControl } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Map from './Map';
import Input from './Input';
import Calendar from './Calendar';
import Filters from './Filters';
import SearchButton from './SearchButton';
import Title from './Title';
import Cards from './Cards';
import FailedSearch from './FailedSearch';

function SearchPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'GET_EQUIPMENTS',
    });
  }, []);

  const workspaces = useSelector((state) => state.search.workspaces);

  return (
    <div className="search-container">
      <div className="search-title"><Title /></div>
      <div className="search-form">
        <FormControl className="search-form">
          <Input />
          <Calendar />
          <Filters />
          <SearchButton />
        </FormControl>
      </div>
      <section className="result-container">
        <Map />
        {workspaces.length > 0 && <Cards />}
        {workspaces.length === 0 && <FailedSearch /> }
      </section>
    </div>
  );
}

export default SearchPage;
