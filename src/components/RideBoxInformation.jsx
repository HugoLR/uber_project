import React from 'react';
import timerIcon from '../assets/icons/timer-icon.png';
import costIcon from '../assets/icons/cost-icon.png';
import carIcon from '../assets/icons/car-icon.png';
import '../assets/styles/components/RideBoxInformation.scss';

const RideBoxInformation = () => (
  <div className='RideBoxInformation'>
    <div className='RideBoxInformation__container'>
      <div className='RideBoxInformation__container-mini'>
        <img src={costIcon} alt='imagen' />
        <div className='RideBoxInformation__container-mini--data'>
          <h5>Costo total</h5>
          <p>detalle</p>
        </div>
      </div>
      <div className='RideBoxInformation__container-mini'>
        <img src={timerIcon} alt='imagen' />
        <div className='RideBoxInformation__container-mini--data'>
          <h5>Tiempo de viaje</h5>
          <p>detalle</p>
        </div>

      </div>
      <div className='RideBoxInformation__container-mini'>
        <img src={carIcon} alt='imagen' />
        <div className='RideBoxInformation__container-mini--data'>
          <h5>Tu vehículo</h5>
          <p> detalle</p>
        </div>

      </div>
    </div>
  </div>

);

export default RideBoxInformation;
