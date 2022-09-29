import './style.scss';
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
      <section className="search-tools">
        <Input />
        <Calendar />
        <Filters />
        <SearchButton />
      </section>
      <section className="result-container">
        <Cards />
        <Map />
      </section>
    </div>
  );
}

export default SearchPage;
