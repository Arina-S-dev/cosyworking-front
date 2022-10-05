import './style.scss';
import { useSelector } from 'react-redux';
import CardItem from './CardItem';

function Cards() {
  const searchedCity = useSelector((state) => state.search.city);
  console.log(searchedCity);

  const workspaces = useSelector((state) => state.search.workspaces);
  console.log(workspaces);
  const isLoading = useSelector((state) => state.search.worspacesAPIisLoading);
  console.log(isLoading);

  return (
    <div className="cards-container">
      <ul className="cards">
        {!isLoading
        && workspaces.map((card) => (
          <CardItem
            key={card.id}
            title={card.title}
            dayPrice={card.day_price}
            image={card.link}
            description={card.description}
          />
        ))}
      </ul>
    </div>
  );
}

export default Cards;
