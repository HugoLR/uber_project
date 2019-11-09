import React from 'react';
import '../assets/styles/containers/Home.scss';
import { Container, Col, Row } from 'reactstrap';

//Components
import MapContainer from '../components/MapContainer';
import RideInformation from '../components/RideInformation';

const Home = () => {
  return (
    <div className='home'>
        <Row>
          <Col xs='4'>
              <RideInformation />
          </Col>
          <Col xs='8'>
              <MapContainer />
          </Col>
        </Row>
    </div>
  );
};

export default Home;
