import React, { Component } from 'react';
import { StandaloneSearchBox } from '@react-google-maps/api';

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
                console.log(this.searchBox.getPlaces())
                console.log(this.searchBox.getBounds())
            }}
        >
            <input
                type='text'
                placeholder='Ingresa punto de partida'
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

export default SearchOrigin;