import './style.scss';
import PropTypes from 'prop-types';

import { ThemeProvider } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import theme from '../../../tools/themeMui';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import img from '../../../img/desk.jpg'; // image à récupérer de la BDD à l'avenir

function CardItem({ title, /* image, */ dayPrice, description }) {
  return (
    <ThemeProvider theme={theme}>
      <div className="card">
        <Card sx={{ width: 790, boxShadow: 3 }} className="card-content">
          <CardMedia
            className="card-content-left"
            sx={{ margin: 1 }}
            component="img"
            alt={title}
            height="200"
            width="250"
            image={img}
          />
          <CardContent className="card-content-right">
            <div className="card-content-right-flex">
              <Typography gutterBottom variant="h5" component="div" textAlign="left" margin="0">
                {title}
              </Typography>
              <Button sx={{ minWidth: 0 }}> <FavoriteBorderIcon onClick={() => console.log('Je clique sur le coeur!')} /></Button>
            </div>
            <Typography gutterBottom variant="h7" component="div" textAlign="left">
              {description}
            </Typography>
            <Typography className="card-content-right-flex" variant="body2" color="text.secondary" textAlign="left">
              {dayPrice}€/jour
              <p><StarIcon color="primary" fontSize="small" />5 (17 avis)</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired,
  dayPrice: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardItem;
