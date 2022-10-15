/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Avatar, CircularProgress } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import {
  lightFormat,
} from 'date-fns';
import theme from '../../tools/themeMui';
import { actionGetPublicProfil } from '../../actions/profil';

import WorkspaceCard from './WorkspaceCard';
import UrlImage from '../../axiosUrlImage';

// import style
import './style.scss';

function PublicProfil() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    // console.log('useEFFECT');
    dispatch(actionGetPublicProfil(id));
  }, []);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const user = useSelector((state) => state.publicProfile.userToDisplay);

  // const membershipDate = lightFormat(new Date(user.created_at), 'dd-MM-yy');
  return (

    <div>

      {
      !user && (
        <ThemeProvider theme={theme}>
          <CircularProgress />
        </ThemeProvider>
      )
    }

      {
      user && (

      <div className=" publicProfileContainer">

        <div className="publicProfileContainer__header">
          <Avatar alt={user.pseudo} src={`${UrlImage}${user.avatar}`} sx={{ width: 140, height: 140 }} />

          <p className="userInfo__pseudo">{user.username}</p>
          <p className="userInfo__membership">Member since: {lightFormat(new Date(user.created_at), 'dd-MM-yy')}</p>

        </div>
        <div className="headerSvg" />

        <div className="publicProfileContainer__about">
          <h3>A propos</h3>
          <p className="publicProfileContainer__about__desc">
            {user.about}
          </p>
        </div>

        {
        user.role === 'host'
      && (
      <div className="publicProfileContainer__workspaces">
        <h3>Workspaces</h3>
        <div className="publicProfileContainer__workspaces__cardsContainer">

          {
          user.workspaces.map((workspace) => (
            <WorkspaceCard key={workspace.workspace_id} mainImage={workspace.image_link} title={workspace.workspace_title} workspaceId={workspace.workspace_id} />
          ))
        }

        </div>
      </div>
      )
      }

        <div className="publicProfileContainer__comments">
          <h3>commentaires</h3>

          <div className="publicProfileContainer__comments__container">

            <div className="publicProfileContainer__comments__container__comment">

              <div className="publicProfileContainer__comments__container__comment__header">
                <Avatar alt="image de jane" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                <div className="publicProfileContainer__comments__container__comment__header__infos">
                  <p className="publicProfileContainer__comments__container__comment__header__infos--userName">jane Doeuf</p>
                  <p className="publicProfileContainer__comments__container__comment__header__infos--date">22/09/22</p>
                </div>
              </div>

              <div className="publicProfileContainer__comments__container__comment__content">
                <p className="publicProfileContainer__comments__container__comment__content--desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem praesentium repellat et quis eaque architecto distinctio quibusdam aspernatur quaerat, voluptas, dicta excepturi incidunt veniam porro at eius cupiditate vero a minima. Veritatis mollitia omnis dicta!</p>
              </div>

            </div>

            <div className="publicProfileContainer__comments__container__comment">

              <div className="publicProfileContainer__comments__container__comment__header">
                <Avatar alt="image de jane" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                <div className="publicProfileContainer__comments__container__comment__header__infos">
                  <p className="publicProfileContainer__comments__container__comment__header__infos--userName">jane Doeuf</p>
                  <p className="publicProfileContainer__comments__container__comment__header__infos--date">22/09/22</p>
                </div>
              </div>

              <div className="publicProfileContainer__comments__container__comment__content">
                <p className="publicProfileContainer__comments__container__comment__content--desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem praesentium repellat et quis eaque architecto distinctio quibusdam aspernatur quaerat, voluptas, dicta excepturi incidunt veniam porro at eius cupiditate vero a minima. Veritatis mollitia omnis dicta!</p>
              </div>

            </div>

            <div className="publicProfileContainer__comments__container__comment">

              <div className="publicProfileContainer__comments__container__comment__header">
                <Avatar alt="image de jane" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                <div className="publicProfileContainer__comments__container__comment__header__infos">
                  <p className="publicProfileContainer__comments__container__comment__header__infos--userName">jane Doeuf</p>
                  <p className="publicProfileContainer__comments__container__comment__header__infos--date">22/09/22</p>
                </div>
              </div>

              <div className="publicProfileContainer__comments__container__comment__content">
                <p className="publicProfileContainer__comments__container__comment__content--desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem praesentium repellat et quis eaque architecto distinctio quibusdam aspernatur quaerat, voluptas, dicta excepturi incidunt veniam porro at eius cupiditate vero a minima. Veritatis mollitia omnis dicta!</p>
              </div>

            </div>

          </div>

        </div>

      </div>
      )
    }
    </div>

  );
}

export default PublicProfil;

// boxShadow: '-10px -10px 15px rgba(255,255,255,0.5) 10px 10px 15px rgba(70,70,70,0.12)'

{ /* <div>

{user && (

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

  {
user.role === 'host'
&& (
<div className="publicProfileContainer__workspaces">
<h3>Workspaces</h3>
<div className="publicProfileContainer__workspaces__cardsContainer">

{
user.workspaces.map((workspace) => (
  <WorkspaceCard key={workspace.workspace_id} mainImage={workspace.image_link} title={workspace.workspace_title} workspaceId={workspace.workspace_id} />
))
}

</div>
</div>
)
}

  <div className="publicProfileContainer__comments">
    <h3>commentaires</h3>

    <div className="publicProfileContainer__comments__container">

      <div className="publicProfileContainer__comments__container__comment">

        <div className="publicProfileContainer__comments__container__comment__header">
          <Avatar alt="image de jane" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
          <div className="publicProfileContainer__comments__container__comment__header__infos">
            <p className="publicProfileContainer__comments__container__comment__header__infos--userName">jane Doeuf</p>
            <p className="publicProfileContainer__comments__container__comment__header__infos--date">22/09/22</p>
          </div>
        </div>

        <div className="publicProfileContainer__comments__container__comment__content">
          <p className="publicProfileContainer__comments__container__comment__content--desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem praesentium repellat et quis eaque architecto distinctio quibusdam aspernatur quaerat, voluptas, dicta excepturi incidunt veniam porro at eius cupiditate vero a minima. Veritatis mollitia omnis dicta!</p>
        </div>

      </div>

      <div className="publicProfileContainer__comments__container__comment">

        <div className="publicProfileContainer__comments__container__comment__header">
          <Avatar alt="image de jane" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
          <div className="publicProfileContainer__comments__container__comment__header__infos">
            <p className="publicProfileContainer__comments__container__comment__header__infos--userName">jane Doeuf</p>
            <p className="publicProfileContainer__comments__container__comment__header__infos--date">22/09/22</p>
          </div>
        </div>

        <div className="publicProfileContainer__comments__container__comment__content">
          <p className="publicProfileContainer__comments__container__comment__content--desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem praesentium repellat et quis eaque architecto distinctio quibusdam aspernatur quaerat, voluptas, dicta excepturi incidunt veniam porro at eius cupiditate vero a minima. Veritatis mollitia omnis dicta!</p>
        </div>

      </div>

      <div className="publicProfileContainer__comments__container__comment">

        <div className="publicProfileContainer__comments__container__comment__header">
          <Avatar alt="image de jane" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
          <div className="publicProfileContainer__comments__container__comment__header__infos">
            <p className="publicProfileContainer__comments__container__comment__header__infos--userName">jane Doeuf</p>
            <p className="publicProfileContainer__comments__container__comment__header__infos--date">22/09/22</p>
          </div>
        </div>

        <div className="publicProfileContainer__comments__container__comment__content">
          <p className="publicProfileContainer__comments__container__comment__content--desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem praesentium repellat et quis eaque architecto distinctio quibusdam aspernatur quaerat, voluptas, dicta excepturi incidunt veniam porro at eius cupiditate vero a minima. Veritatis mollitia omnis dicta!</p>
        </div>

      </div>

    </div>

  </div>

</div>
)}
</div> */ }
