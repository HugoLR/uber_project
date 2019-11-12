import React, { Component } from 'react';
import { StandaloneSearchBox } from '@react-google-maps/api';

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
            <input
                type='text'
                placeholder='Selecciona tu destino'
                style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `10px`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                }}
                value={ text }
                onChange={ this.handleInpuchChange }
            />
        </StandaloneSearchBox>
        )
    }     
}

export default SearchDestination;