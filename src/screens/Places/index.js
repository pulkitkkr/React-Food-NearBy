import React, { Component } from 'react';
import axios from 'axios';
import { GooglePlacesKey } from '../../common/apiKey';

class Places extends Component {
    constructor(props) {
        super(props);
        if(this.props.match.params.data) {
            let data = JSON.parse(this.props.match.params.data);
            this.state = {
                ...data
            }
        } else {
            this.state = {
                address: null,
                placeId: null,
                lat: null,
                long: null
            }
        }
        console.log(this.state);
    }
    componentDidMount() {
        const config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };
        const {lat, long } = this.state;
        if(this.state.placeId === null) {
            window.location.href = '/';
        } else {
            axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=5000&types=restaurant&key=${GooglePlacesKey}`, config)
                .then(resp => {
                console.log(resp);
            });
        }
    }
    render() {
        const { lat, long, address, placeId} = this.state;
        return(
            <h1>NearBy Places Zone {address}</h1>
        )
    }
}
export default Places;