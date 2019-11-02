import React from 'react';
import MapContainer from '../components/MapContainer';
import '../assets/styles/containers/Home.scss';

const Home = () => {
  return (
    <div calssName='home'>
      <div className='home__map-container'>
        <MapContainer />
      </div>
      <div>
        hola
      </div>
    </div>
  );
};

export default Home;
