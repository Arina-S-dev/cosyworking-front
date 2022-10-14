import './style.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import UrlImage from '../../../axiosUrlImage';

function Cards() {
  const searchedCity = useSelector((state) => state.search.city);
  // eslint-disable-next-line no-console
  console.log(searchedCity);

  const workspaces = useSelector((state) => state.search.workspaces);
  const isLoading = useSelector((state) => state.search.worspacesAPIisLoading);
  console.log(workspaces);

  return (
    <div className="cards-container">
      {!isLoading
        && workspaces.map((card) => (
          <Link to={`/workspace/${card.id}`} target="_blank">
            <CardItem
              key={card.id}
              title={card.title}
              dayPrice={card.day_price}
              image={`${UrlImage}${card.link}`}
              description={card.description}
            />
          </Link>

        ))}
    </div>
  );
}

export default Cards;
