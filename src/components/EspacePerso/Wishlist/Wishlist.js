// import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import Announce from '../../Homepage/RandomAnnounces/Announce/Announce';
import MyAccountMenu from '../../MyAccountMenu';
import './Wishlist.scss';

function Wishlist() {
  const workspaces = useSelector((state) => state.user.wishlist);

  return (
    <div className="Wishlist">
      <MyAccountMenu />
      <h1 className="Wishlist-title">Mes favoris</h1>
      <div className="Wishlist-detail">
        {
        workspaces.map((workspace) => (
          <Announce
            key={workspace.id}
            image={workspace.link}
            announceName={workspace.title}
            cityName={workspace.city}
            price={`${workspace.day_price} €/jour`}
            workspaceId={workspace.id}
          />
        ))
      }

      </div>
    </div>
  );
}

Wishlist.propTypes = {

};

export default Wishlist;
