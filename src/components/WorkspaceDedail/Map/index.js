/* eslint-disable max-len */
import {
  MapContainer, TileLayer, Popup, CircleMarker,
} from 'react-leaflet';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// import ReactDOMServer from 'react-dom/server';

// import L from 'leaflet';

// import { useMapEvents } from 'react-leaflet/hooks';

import './style.scss';

function LeafletMap({ latitude, longitude }) {
  const workspace = useSelector((state) => state.workspaces.currentWorkspace);
  return (
    <MapContainer
      className="map"
      center={[workspace.workspace.latitude, workspace.workspace.longitude]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='  <a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>'
        url="https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=RoB5sLVRgNXoZDprpD78"
      />

      <CircleMarker
        center={[latitude, longitude]}
        radius={20}
        pathOptions={{ weight: 1 }}
        eventHandlers={{
          click: (e) => {
            // eslint-disable-next-line no-console
            console.log(e);
          },
        }}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>

      </CircleMarker>

    </MapContainer>
  );
}

LeafletMap.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default LeafletMap;
