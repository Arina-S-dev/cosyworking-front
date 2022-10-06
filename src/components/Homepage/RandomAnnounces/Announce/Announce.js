import './Announce.scss';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

function Announce({
  image, announceName, cityName, price,
}) {
  return (
    <div className="Card">
      <img className="cardIMG" src={image} alt="bureau" />
      <div className="infoText">
        <div className="nameAnnounce">
          <p>{announceName}</p>
          <StarBorderIcon />
        </div>
        <p className="cityName">{cityName}</p>
        <div className="priceButton">
          <p>{price}</p>
          <Button variant="contained" size="small">Voir l'annonce</Button>
        </div>
      </div>
    </div>
  );
}

Announce.propTypes = {
  image: PropTypes.string.isRequired,
  announceName: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Announce;
