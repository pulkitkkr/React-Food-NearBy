import React, { Component } from 'react';

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
    render() {
        const { lat, long, address, placeId} = this.props;
        return(
            <h1>NearBy Places Zone {address}</h1>
        )
    }
}
export default Places;