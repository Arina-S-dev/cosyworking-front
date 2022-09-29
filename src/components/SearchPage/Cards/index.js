import './style.scss';
import CardItem from './CardItem';
import test from '../../../data/test.json';

function Cards() {
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
