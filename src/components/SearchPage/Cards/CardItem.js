/* eslint-disable no-console */
import './style.scss';
import PropTypes from 'prop-types';

import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useDispatch, useSelector } from 'react-redux';
import theme from '../../../tools/themeMui';
// import FavoriteIcon from '@mui/icons-material/Favorite';

function CardItem({
  title, image, dayPrice, description, id,
}) {
  const isLogged = useSelector((state) => state.user.logged);
  const wishlist = useSelector((state) => state.user.wishlist);

  const isWished = wishlist.map((workspace) => workspace.id).includes(id);
  console.log(isWished);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    if (!isLogged) {
      console.log('Erreur vous devez être connecté');
      return;
    }
    if (!isWished) {
      dispatch({
        type: 'ADD_WISHLIST',
        workspaceId: id,
      });
    }
    else if (isWished) {
      const newWishlist = wishlist.filter((workspace) => workspace.id !== id);
      dispatch({
        type: 'REMOVE_FROM_WISHLIST',
        wishlist: newWishlist,
        workspaceId: id,
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="card">
        <Link to={`/workspace/${id}`} target="_blank">
          <Card
            sx={{
              width: {
                xs: 360,
                md: 400,
                lg: 650,
              },
              boxShadow: 3,
            }}
            className="card-content"
          >
            <CardMedia
              className="card-content-left"
              component="img"
              alt={title}
              height="200"
              width="250"
              image={image}
            />
            <CardContent className="card-content">
              <div className="card-content-flex">
                <Typography gutterBottom variant="h5" component="div" textAlign="left" margin="0">
                  {title}
                </Typography>
              </div>
              <Typography gutterBottom variant="h7" component="div" textAlign="left">
                {description}
              </Typography>
              <Typography className="card-content-flex" variant="body2" color="text.secondary" textAlign="left">
                {dayPrice}€/jour
                <p>
                  {!isWished && (<StarBorderIcon className="star" onClick={handleClick} />)}
                  {isWished && isLogged && (<StarIcon className="star" onClick={handleClick} color="primary" />)}

                </p>
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </div>
    </ThemeProvider>
  );
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  dayPrice: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardItem;
