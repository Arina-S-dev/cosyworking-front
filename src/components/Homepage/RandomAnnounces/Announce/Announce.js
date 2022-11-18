import './Announce.scss';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { Button, ThemeProvider } from '@mui/material/';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import UrlImage from '../../../../axiosUrlImage';
import theme from '../../../../tools/themeMui';

function Announce({
  image, announceName, cityName, price, workspaceId,
}) {
  const isLogged = useSelector((state) => state.user.logged);
  const wishlist = useSelector((state) => state.user.wishlist);

  const isWished = wishlist.map((workspace) => workspace.id).includes(workspaceId);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!isLogged) {
      console.log('Erreur vous devez être connecté');
      return;
    }
    if (!isWished) {
      dispatch({
        type: 'ADD_WISHLIST',
        workspaceId: workspaceId,
      });
    }
    else if (isWished) {
      const newWishlist = wishlist.filter((workspace) => workspace.id !== workspaceId);
      dispatch({
        type: 'REMOVE_FROM_WISHLIST',
        wishlist: newWishlist,
        workspaceId: workspaceId,
      });
    }
  };
  return (
    <div className="Card">
      <img className="cardIMG" src={`${UrlImage}${image}`} alt="bureau" />
      <div className="infoText">
        <div className="nameAnnounce">
          <p>{announceName}</p>
          {!isWished && (<StarBorderIcon className="star" onClick={handleClick} />)}
          {isWished && isLogged && (<StarIcon className="star" onClick={handleClick} color="error" />)}
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
