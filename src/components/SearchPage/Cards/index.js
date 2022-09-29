import './style.scss';
import { useSelector } from 'react-redux';
import CardItem from './CardItem';
import test from '../../../data/test.json';

function Cards() {
  const searchedCity = useSelector((state) => state.search.city);
  console.log(searchedCity);

  return (
    <div className="cards-container">
      <ul className="cards">
        {test.map((card) => (
          <CardItem
            key={card.id}
            title={card.title}
            dayPrice={card.dayPrice}
            image={card.images[0].link}
            description={card.description}
          />
        ))}
      </ul>
    </div>
  );
}

export default Cards;
