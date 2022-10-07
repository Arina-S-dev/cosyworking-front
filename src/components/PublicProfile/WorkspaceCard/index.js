import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function WorkspaceCard({ mainImage, title, workspaceId }) {
  return (

    <Card sx={{
      maxWidth: 300, borderRadius: 3, boxShadow: 9,
    }}
    >
      <CardMedia
        component="img"
        height="60%"
        image={mainImage}
        alt="green iguana"
      />
      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography variant="h3" sx={{ fontSize: 14 }} component="div">
          {title}
        </Typography>

      </CardContent>
      <CardActions>
        {/* <Button size="small">Détail</Button> */}
        <Link to={`/workspace/${workspaceId}`}>
          <Button size="small">Détail</Button>
        </Link>
      </CardActions>
    </Card>

  );
}

WorkspaceCard.propTypes = {

  mainImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  workspaceId: PropTypes.number.isRequired,
};

export default WorkspaceCard;
