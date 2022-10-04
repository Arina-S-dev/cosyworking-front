import './style.scss';

import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ThemeProvider } from '@mui/material/styles';

import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

import L from 'leaflet';
import theme from '../../../tools/themeMui';
import test from '../../../data/test.json';
import image from '../../../img/desk.jpg';

const center = [48.858370, 2.294481];

const markerIcon = new L.Icon({
  // eslint-disable-next-line global-require
  iconUrl: require('./marker3.png'),
  iconSize: [35, 35],
  iconAnchor: [17, 46], // [left/right, top/bottom]
  popupAnchor: [0, -46], // [left/right, top/bottom]
});

function Map() {
  return (
    <MapContainer center={center} zoom={12} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url="https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=6IRFLhFyQhR2SSllVfb2"
      />
      {test.map(
        (workspace) => (
          <Marker
            key={workspace.id}
            position={[workspace.latitude, workspace.longitude]}
            icon={markerIcon}
          >
            <ThemeProvider theme={theme}>
              <Popup className="popup" margin="0">
                <img className="popup-image" src={image} width="200" height="150" alt="workspace" />
                <p className="popup-title">{workspace.title}</p>
                <div className="popup-flex">
                  <p className="popup-flex-price">{workspace.dayPrice}€/jour</p>
                  <Button className="popup-flex-favorite" sx={{ minWidth: 0 }}> <FavoriteBorderIcon onClick={() => console.log('Je clique sur le coeur!')} /></Button>
                </div>
              </Popup>
            </ThemeProvider>
          </Marker>
        ),
      )}
    </MapContainer>
  );
}

export default Map;
