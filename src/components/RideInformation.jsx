import React, { Component } from 'react';
import '../assets/styles/components/RideInformation.scss';
import { Field, reduxForm } from 'redux-form';
import { StandaloneSearchBox } from '@react-google-maps/api';
import PropagateLoader  from 'react-spinners/PropagateLoader';

//Redux
import { connect } from 'react-redux';

//Actions 
import { destinyLocation } from '../actions';

//Components
import SearchOrigin from './SearchOrigin';
import SearchDestination from './SearchDestination';

class RideInformation extends Component {

    render() {
        const { handleSubmit, initialize, actualForm, userLocation, destinyLocation } = this.props

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
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      actualForm: state.form.formRide,
      userLocation: state.locations.userLocation
    };
};

const mapDispatchToProps = {
    destinyLocation,
  };

export default reduxForm({
    form: 'formRide' // a unique name for this form
  })(connect(mapStateToProps, mapDispatchToProps)(RideInformation));
  