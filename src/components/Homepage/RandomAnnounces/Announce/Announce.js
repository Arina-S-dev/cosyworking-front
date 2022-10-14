import './Announce.scss';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Button, ThemeProvider } from '@mui/material/';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UrlImage from '../../../../axiosUrlImage';
import theme from '../../../../tools/themeMui';

function Announce({
  image, announceName, cityName, price, workspaceId,
}) {
  return (
    <div className="Card">
      <img className="cardIMG" src={`${UrlImage}${image}`} alt="bureau" />
      <div className="infoText">
        <div className="nameAnnounce">
          <p>{announceName}</p>
          <StarBorderIcon />
        </div>
        <p className="cityName">{cityName}</p>
        <div className="priceButton">
          <p>{price}</p>
          <ThemeProvider theme={theme}>
            <Link to={`/workspace/${workspaceId}`}>
              <Button variant="contained" size="small">Voir l'annonce</Button>
            </Link>
          </ThemeProvider>
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
  workspaceId: PropTypes.number.isRequired,
};

export default Announce;
