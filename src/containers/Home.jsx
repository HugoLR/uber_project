import React from 'react';
import '../assets/styles/containers/Home.scss';
import { Container, Col, Row } from 'reactstrap';

//Components
import MapContainer from '../components/MapContainer';
import RideInformation from '../components/RideInformation';
import RideBoxInformation from '../components/RideBoxInformation';

//Redux
import { connect } from 'react-redux';

const Home = ({ride}) => {
  return (
    <div className='home'>
      <Row>
        <Col xs='4' style={{height:'80vh'}}>
          <RideInformation />
        </Col>
        <Col xs='8' style={{height:'80vh'}}>
          <MapContainer />
          {
            !!ride &&
            <RideBoxInformation 
              cost={ride.price} 
              carClass={ride.class} 
              time={ride.rows[0].elements[0].duration.text} 
              distance={ride.rows[0].elements[0].distance.text}
              calification={ride.calification}
              id={ride._id}
            />
          }
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ride: state.ride.actualRide, 
  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Home)