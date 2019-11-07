import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

//Constants
import { GOOGLE_MAPS_API_KEY }  from '../constans/app'

class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={google}
        zoom={5}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
      >
        <Marker
          position={{ lat: 19.4267261, lng: -99.1718706 }}
        />
      </Map>
    );
  }
};

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API_KEY,
})(MapContainer);
