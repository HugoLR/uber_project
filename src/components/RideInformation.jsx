import React, { Component } from 'react';
import '../assets/styles/components/RideInformation.scss'
import { Field, reduxForm } from 'redux-form';
import Autocomplete from 'react-google-autocomplete';

//Redux
import { connect } from 'react-redux';

class RideInformation extends Component {

    render() {
        return (
            <div className='ride__container'>
                <form className='ride__form'>
                    <h2 className='ride__form-title'>Viaje</h2>
                    <Field
                        name='origin'
                        component='input'
                        onChange={e => e}
                    />
                    {/* <Autocomplete
                        style={{width: '90%'}}
                        onPlaceSelected={(place) => {
                        console.log(place);
                        }}
                        types={['(regions)']}
                        componentRestrictions={{country: "ru"}}
                    /> */}
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'formRide' // a unique name for this form
  })(RideInformation);
  