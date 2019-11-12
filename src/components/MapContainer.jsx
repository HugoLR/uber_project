import React from 'react';
import ReactDOM from "react-dom";
import PropagateLoader  from 'react-spinners/PropagateLoader';
import { GoogleMap, Marker, DirectionsService, DirectionsRenderer, DistanceMatrixService } from '@react-google-maps/api';
import '../assets/styles/components/MapContainer.scss';
import Geocode from "react-geocode";

//Constants
import { GOOGLE_MAPS_API_KEY }  from '../constans/app';

//Redux
import { connect } from 'react-redux';

//Actions
import { initialLocation, distanceMatrixService } from '../actions';

Geocode.setApiKey(GOOGLE_MAPS_API_KEY);
Geocode.setLanguage("es");
Geocode.setRegion("es");
Geocode.enableDebug();

class MapContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      directions: null,
      loadingDirections : false
    }
  } // End constructor

  componentDidMount(){
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({latitude:position.coords.latitude, longitude:position.coords.longitude}, () => {
          Geocode.fromLatLng(this.state.latitude, this.state.longitude)
            .then(res => {
              this.props.initialLocation(res.results[0].formatted_address)
            })
        })

      })
    }
  }

  onLoad = (autocomplete) => {
    this.autocomplete = autocomplete
  }

  onPlaceChanged = () => {
    if (this.autocomplete !== null) {
      console.log(this.autocomplete.getPlace())
    } else {
      console.log('Autocomplete is not loaded yet!')
    }
  }

  directionsCallback = response => {
    // Todo: Fix call setsatet multiple Times
    if (response !== null) {
      if (response.status === 'OK') {
          this.setState({directions: response})
      } else return
    }
  }

  distanceMatrixCallback = response => {
    if (response !== null) {
      this.props.distanceMatrixService(response)
    } else return
  }

  render() {
    const { latitude, longitude, directions, loadingDirections } = this.state;
    const { destinyLocation } = this.props
    if(!latitude) {
      return (
        <div className='loading_map__container'>
         <PropagateLoader />
        </div>
      )
    } else {
      return (
        <React.Fragment>
          <GoogleMap
            id="map-id"
            zoom={17}
            center={{ lat:latitude , lng:longitude}}
            mapContainerClassName='map-container'
            mapContainerStyle={{
              width:"100%",
              height:"100%"
          }}
          >
          <Marker
            onLoad={marker => {
              console.log('marker: ', marker)
            }}
            position={{
              lat: latitude,
              lng: longitude
            }}
          />
          {
            !!destinyLocation &&
              <React.Fragment>
                <Marker
                  onLoad={marker => {
                    console.log('marker: ', marker)
                  }}
                  position={{
                    lat: destinyLocation.latitude,
                    lng: destinyLocation.longitude
                  }}
                />
                <DirectionsService
                  options={{ // eslint-disable-line react-perf/jsx-no-new-object-as-prop
                  destination: `${destinyLocation.latitude}, ${destinyLocation.longitude}`,
                  origin: `${latitude}, ${longitude}`,
                  travelMode: 'DRIVING'}}
                  onUnmount={directionsService => {
                    console.log('DirectionsService onUnmount directionsService: ', directionsService)}}
                  callback={(response) => this.directionsCallback(response)}

                />
              </React.Fragment>
          }
          {
            directions !== null &&
              <React.Fragment>
                <DirectionsRenderer
                  // required
                  options={{ // eslint-disable-line react-perf/jsx-no-new-object-as-prop
                    directions: directions
                  }}
                  // optional
                  onLoad={directionsRenderer => {
                    console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
                  }}
                  // optional
                  onUnmount={directionsRenderer => {
                    console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
                  }}
                />
                <DistanceMatrixService
                  // required
                  options={{
                    origins:[`${latitude}, ${longitude}`],
                    destinations:[`${destinyLocation.latitude}, ${destinyLocation.longitude}`],
                    travelMode: 'DRIVING',
                  }}
                  callback={(response) => this.distanceMatrixCallback(response)}
                  
                />
              </React.Fragment>
          }
        </GoogleMap>
        </React.Fragment>
      );
    }
  } // END render
}; // END MapContainer

const mapStateToProps = state => {
  return {
    destinyLocation: state.locations.destiny
  };
};

const mapDispatchToProps = {
  initialLocation,
  distanceMatrixService
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
