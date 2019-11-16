import React, { Component } from 'react';
import { StandaloneSearchBox } from '@react-google-maps/api';
import '../assets/styles/components/SearchDestination.scss';

import pinIcon from '../assets/icons/pin-icon.png';

class SearchDestination extends Component {
    constructor(props){
        super(props)
        this.state = {
          text: '',
        }
    } // End constructor

    handleInpuchChange = e => {
        this.setState({text:e.target.value})
    }

    render() {
        const { text } = this.state
        return (
            <StandaloneSearchBox
            onLoad={ref => {
                this.searchBox = ref
            }}
            onPlacesChanged={ () => {
                const { destinyLocation } = this.props
                let destiny = {...this.searchBox.getPlaces()[0]}
                destiny.latitude = destiny.geometry.location.lat()
                destiny.longitude = destiny.geometry.location.lng()
                destinyLocation(destiny)
            }}
        >
            <div className = 'input__origin'>
                
                <div><img src={pinIcon} alt='imagen' /> </div>
                <input
                className = 'inputRide'
                type='text'
                placeholder='Selecciona tu destino'
                value={ text }
                onChange={ this.handleInpuchChange }
            />
                
            </div>
            
        </StandaloneSearchBox>
        )
    }     
}

export default SearchDestination;