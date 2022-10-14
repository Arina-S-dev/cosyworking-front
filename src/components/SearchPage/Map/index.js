/* eslint-disable react/prop-types */
import './style.scss';

import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import {
  // eslint-disable-next-line no-unused-vars
  MapContainer, TileLayer, Marker, Popup, useMap,
} from 'react-leaflet';

import L from 'leaflet';
import theme from '../../../tools/themeMui';
import UrlImage from '../../../axiosUrlImage';

const markerIcon = new L.Icon({
  // eslint-disable-next-line global-require
  iconUrl: require('./marker3.png'),
  iconSize: [35, 35],
  iconAnchor: [17, 46], // [left/right, top/bottom]
  popupAnchor: [0, -46], // [left/right, top/bottom]
});

function Map() {
  const center = [48.858370, 2.294481];
  const workspaces = useSelector((state) => state.search.workspaces);
  const isLoading = useSelector((state) => state.search.worspacesAPIisLoading);

  function FlyMapTo({ lat, lng }) {
    const map = useMap();
    useEffect(() => {
      map.flyTo([lat, lng]);
    }, [lat, lng]);
    return null;
  }
  return (
    <MapContainer center={center} zoom={12} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url="https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=6IRFLhFyQhR2SSllVfb2"
      />
      {!isLoading
        && workspaces.map((workspace) => (
          <><FlyMapTo lat={workspace.latitude} lng={workspace.longitude} />
            <Marker
              key={workspace.id}
              position={[workspace.latitude, workspace.longitude]}
              icon={markerIcon}
            >
              <ThemeProvider theme={theme}>
                <Popup className="popup" margin="0">
                  <Link to={`/workspace/${workspace.id}`} target="_blank">
                    <img className="popup-image" src={`${UrlImage}${workspace.link}`} width="200" height="150" alt="workspace" />
                    <p className="popup-title">{workspace.title}</p>
                    <div className="popup-flex">
                      <p className="popup-flex-price">{workspace.day_price}€/jour</p>
                      <Button className="popup-flex-favorite" sx={{ minWidth: 0 }}> <FavoriteBorderIcon onClick={() => console.log('Je clique sur le coeur!')} /></Button>
                    </div>
                  </Link>
                </Popup>
              </ThemeProvider>
            </Marker>
          </>
        ))}
    </MapContainer>
  );
}

export default Map;
