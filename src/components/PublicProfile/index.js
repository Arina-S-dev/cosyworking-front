/* eslint-disable max-len */
import { useSelector } from 'react-redux';
// import { useState } from 'react';
import { Avatar } from '@mui/material';
import {
  lightFormat,
} from 'date-fns';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import style
import './style.scss';

function PublicProfil() {
  const user = useSelector((state) => state.publicProfile.userToDisplay);
  // eslint-disable-next-line no-console
  console.log(user.workSpaces);

  //   const [PictureModalOpen, setpictureModalOpen] = useState(false);
  //   const [CalendarModalOpen, setcalendarModalOpen] = useState(false);

  //   const calendarModalClassName = CalendarModalOpen ? 'calendarModal' : 'isHidden';
  const membershipDate = lightFormat(new Date(user.created_at), 'dd-MM-yy');
  return (

    <div className=" publicProfileContainer">

      <div className="publicProfileContainer__header">
        <Avatar alt={user.pseudo} src={user.avatar} sx={{ width: 140, height: 140 }} />

        <p className="userInfo__pseudo">{user.pseudo}</p>
        <p className="userInfo__membership">Member since: {membershipDate}</p>

      </div>
      <div className="headerSvg" />

      <div className="publicProfileContainer__about">
        <h3>A propos</h3>
        <p className="publicProfileContainer__about__desc">
          {user.about}
        </p>
      </div>

      <div className="publicProfileContainer__workspaces">
        <h3>Workspaces</h3>
        <div className="publicProfileContainer__workspaces__cardsContainer">

          <Card sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 9 }}>
            <CardMedia
              component="img"
              height="60%"
              image={user.workSpaces[0].mainImage}
              alt="green iguana"
            />
            <CardContent sx={{ paddingBottom: 0 }}>
              <Typography variant="h3" sx={{ fontSize: 14 }} component="div">
                {user.workSpaces[0].title}
              </Typography>

            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 9 }}>
            <CardMedia
              component="img"
              height="60%"
              image={user.workSpaces[0].mainImage}
              alt="green iguana"
            />
            <CardContent sx={{ paddingBottom: 0 }}>
              <Typography variant="h3" sx={{ fontSize: 14 }} component="div">
                {user.workSpaces[0].title}
              </Typography>

            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 9 }}>
            <CardMedia
              component="img"
              height="60%"
              image={user.workSpaces[0].mainImage}
              alt="green iguana"
            />
            <CardContent sx={{ paddingBottom: 0 }}>
              <Typography variant="h3" sx={{ fontSize: 14 }} component="div">
                {user.workSpaces[0].title}
              </Typography>

            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

        </div>
      </div>

      <div className="publicProfileContainer__comment">
        commentaires
      </div>

    </div>
  );
}

export default PublicProfil;

// boxShadow: '-10px -10px 15px rgba(255,255,255,0.5) 10px 10px 15px rgba(70,70,70,0.12)'
