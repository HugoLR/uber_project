import React, { Component } from 'react';
import '../assets/styles/components/RideInformation.scss';
import { Field, reduxForm } from 'redux-form';
import { StandaloneSearchBox } from '@react-google-maps/api';
import PropagateLoader  from 'react-spinners/PropagateLoader';
import classNames from 'classnames';

//Redux
import { connect } from 'react-redux';

//Actions 
import { destinyLocation, rideClass, initialLocationCoordenates } from '../actions';

//Components
import SearchOrigin from './SearchOrigin';
import SearchDestination from './SearchDestination';

class RideInformation extends Component {

  parsePrice = (rideGrade, distance, time) => {
        let price;
        const newDistance = Number(distance.replace(/,/g, '.').split(' ')[0])
        const newTime = time.split(' ')[0]
        const pricePerMinute = 3.50
        const pricePerKilometer = 7
        if (newDistance < 1) {
            switch (rideGrade){
                case 0:
                    return price = pricePerMinute * newTime
                    break;
                case 1:
                    return price = (pricePerMinute * newTime) + 20
                    break;
                case 2:
                    return price = (pricePerMinute * newTime) + 40
                    break;
                default:
                    break;

            }
        } else {
            switch (rideGrade){
                case 0:
                    return price = pricePerKilometer * newDistance
                    break;
                case 1:
                    return price = (pricePerKilometer * newDistance) + 20
                    break;
                case 2:
                    return price = (pricePerKilometer * newDistance) + 40
                    break;
                default:
                    break;

            }
        }
    }

    handleClickClass = (rideClass, price) => {
        // To do: if class was already selected return
        let payload = {}
        payload.class = rideClass
        payload.price = price
        return this.props.rideClass(payload)
    }

    render() {
        const { handleSubmit, initialize, actualForm, userLocation, destinyLocation, distanceMatrixService, rideGrade, initialLocationCoordenates } = this.props
        const standartClassNames = classNames({
            'ride__form-grade' : true,
            'ride__form-grade-selected': !!rideGrade && rideGrade.class === 0
        })

        const bussinessClassNames = classNames({
            'ride__form-grade' : true,
            'ride__form-grade-selected': !!rideGrade && rideGrade.class === 1
        })

        const premiumClassNames = classNames({
            'ride__form-grade' : true,
            'ride__form-grade-selected': !!rideGrade && rideGrade.class === 2
        })

        return (
            <div className='ride__container'>
                <form onSubmit={ handleSubmit } className='ride__form'>
                    <h2 className='ride__form-title'>Viaje</h2>
                    {
                        !userLocation &&
                        <div className='loading_map__container'>
                            <PropagateLoader color='white'/>
                         </div>
                    }
                    {
                        !!userLocation &&
                        <React.Fragment>
                            <Field
                                name='origin'
                                component={ SearchOrigin }
                                initializeForm={ initialize }
                                actualForm={ actualForm }
                                userLocation= { userLocation }
                                newUserCoordenates={ initialLocationCoordenates }
                            /> 
                          <Field
                              name='destination'
                              component={ SearchDestination }
                              initializeForm={ initialize }
                              actualForm={ actualForm }
                              userLocation={ userLocation }
                              destinyLocation={ destinyLocation }
                          /> 
                      </React.Fragment>
                  }
                  {
                      !!distanceMatrixService &&
                      <React.Fragment>
                          <div className='ride__form-duration'>Tiempo estimado {distanceMatrixService.rows[0].elements[0].duration.text}</div>
                          <h3 className='ride__form-title'>Selecciona una clase</h3>
                          <div className={standartClassNames} onClick={() => this.handleClickClass(0,this.parsePrice(0, distanceMatrixService.rows[0].elements[0].distance.text, distanceMatrixService.rows[0].elements[0].duration.text).toFixed(2))}>
                              <p>Standart</p>
                              <p>${this.parsePrice(0, distanceMatrixService.rows[0].elements[0].distance.text, distanceMatrixService.rows[0].elements[0].duration.text).toFixed(2)}</p>
                          </div>
                          <div className={bussinessClassNames} onClick={() => this.handleClickClass(1,this.parsePrice(1, distanceMatrixService.rows[0].elements[0].distance.text, distanceMatrixService.rows[0].elements[0].duration.text).toFixed(2))}>
                              <p>Bussiness</p>
                              <p>${this.parsePrice(1, distanceMatrixService.rows[0].elements[0].distance.text, distanceMatrixService.rows[0].elements[0].duration.text).toFixed(2)}</p>
                          </div>
                          <div className={premiumClassNames} onClick={() => this.handleClickClass(2,this.parsePrice(2, distanceMatrixService.rows[0].elements[0].distance.text, distanceMatrixService.rows[0].elements[0].duration.text).toFixed(2))}>
                              <p>Premium</p>
                              <p>${this.parsePrice(2, distanceMatrixService.rows[0].elements[0].distance.text, distanceMatrixService.rows[0].elements[0].duration.text).toFixed(2)}</p>
                          </div>
                      </React.Fragment>
                  }
                  {
                      !!rideGrade &&
                      <div>
                          <button className='ride__form-button'>Confirmar viaje</button>
                      </div>
                  }
              </form> 
          </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    actualForm: state.form.formRide,
    userLocation: state.locations.userLocation,
    distanceMatrixService: state.locations.distanceMatrixService,
    rideGrade: state.locations.rideClass,
  };
};

const mapDispatchToProps = {
  destinyLocation,
  initialLocationCoordenates,
  rideClass,
};

export default reduxForm({
  form: 'formRide' // a unique name for this form
})(connect(mapStateToProps, mapDispatchToProps)(RideInformation));

