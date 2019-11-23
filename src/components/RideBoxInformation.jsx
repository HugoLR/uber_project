import React, { useState } from 'react';
import timerIcon from '../assets/icons/timer-icon.png';
import costIcon from '../assets/icons/cost-icon.png';
import carIcon from '../assets/icons/car-icon.png';
import '../assets/styles/components/RideBoxInformation.scss';
import DirectionsIcon from 'mdi-react/DirectionsIcon';
import StarRatings from 'react-star-ratings';
import axios from 'axios';

//Redux
import { connect } from 'react-redux';

//Actions 
import { actualRide } from '../actions';

const RideBoxInformation = ({cost, carClass, time, distance, calification, id, actualRide}) => {
  const [rating, setRating] = useState(5)

  const changeRating = (newRating, name ) => {
    setRating(newRating)
  }

  const updateRide = id => {
    const payload = {calification : rating}
    axios.put(`http://localhost:3000/api/rides/${id}`, payload )
     .then(res => {
       axios.get(`http://localhost:3000/api/rides/${id}`)
        .then(res => {
          actualRide(res.data.data)
        })
     })
  }

  return (
  <div className='RideBoxInformation'>
    <div className='RideBoxInformation__container'>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <div className='RideBoxInformation__container-mini'>
          <DirectionsIcon size={50} color={'#19BC9D'}/>
          <div className='RideBoxInformation__container-mini--data'>
            <h5>Distancia</h5>
            <p>{distance}</p>
          </div>
        </div>
        <div>
        {
          !calification &&
          <button onClick={() => updateRide(id)} className='RideBoxInformation__calification-button'>Califica tu viaje</button>
        }
        {
          !!calification &&
          <div className='RideBoxInformation__container-mini--data'>
            <h5>Review</h5>
            <StarRatings
            rating={rating}
            starRatedColor={'#19BC9D'}
            changeRating={null}
            numberOfStars={5}
            name='rating'
            starDimension='25px'
            />
          </div>
        }
        {
          !calification &&
          <StarRatings
            rating={rating}
            starRatedColor={'#36B662'}
            changeRating={changeRating}
            numberOfStars={5}
            name='rating'
            starDimension='25px'
        />
        }
      </div>
      </div>
      <div style={{display:'flex', justifyContent:'space-between'}}>
      <div className='RideBoxInformation__container-mini'>
        <img src={costIcon} alt='imagen' />
        <div className='RideBoxInformation__container-mini--data'>
          <h5>Costo total</h5>
          <p>${cost}</p>
        </div>
      </div>
      <div className='RideBoxInformation__container-mini'>
        <img src={timerIcon} alt='imagen' />
        <div className='RideBoxInformation__container-mini--data'>
          <h5>Tiempo de viaje</h5>
          <p>{time}</p>
        </div>

      </div>
      <div className='RideBoxInformation__container-mini'>
        <img src={carIcon} alt='imagen' />
        <div className='RideBoxInformation__container-mini--data'>
          <h5>Tu vehículo</h5>
          <p>
          {
            carClass == 0 &&
            'Standart'
           }
           {
            carClass == 1 &&
            'Bussiness'
           }
           {
            carClass == 2 &&
            'Premium'
           }
          </p>
        </div>

      </div>
      </div>

    </div>
  </div>
  )
};

const mapDispatchToProps = {
  actualRide
};

export default connect(null, mapDispatchToProps)(RideBoxInformation);
