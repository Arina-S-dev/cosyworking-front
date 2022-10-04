import './style.scss';
import { FormControl } from '@mui/material';
import Map from './Map';
import Input from './Input';
import Calendar from './Calendar';
import Filters from './Filters';
import SearchButton from './SearchButton';
import Title from './Title';
import Cards from './Cards';

function SearchPage() {
  return (
    <div className="search-container">
      <p className="search-title"><Title /></p>
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
        <Cards />
      </section>
    </div>
  );
}

export default SearchPage;
