import React, { Component } from 'react';
import { StandaloneSearchBox } from '@react-google-maps/api';
import '../assets/styles/components/SearchOrigin.scss';

import casaIcon from '../assets/icons/casa-icon.png';

class SearchOrigin extends Component {
    constructor(props){
        super(props)
        this.state = {
          text: '',
        }
    } // End constructor

    componentDidMount(){
        this.setState({text:this.props.userLocation})
    }

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
                const { newUserCoordenates } = this.props
                let newOriginCoordenates = {}
                newOriginCoordenates.latitude = this.searchBox.getPlaces()[0].geometry.location.lat()
                newOriginCoordenates.longitude = this.searchBox.getPlaces()[0].geometry.location.lng()
                newUserCoordenates(newOriginCoordenates)
                console.log(this.searchBox.getPlaces())
                console.log(this.searchBox.getBounds())
            }}
        >   
            <div className = 'input__origin'>
                
                <div><img src={casaIcon} alt='imagen' /> </div>
                <input
                type='text'
                placeholder='Ingresa punto de partida'
                value={ text }
                onChange={ this.handleInpuchChange }
                className='inputRide'
                />
            </div>
            
        </StandaloneSearchBox>
        )
    }     
}

export default SearchOrigin;