import React, { Component } from 'react';
import API from '../utils/api/Party';

class FullParty extends Component {

    state = {
        thisPartyId: this.props.match.params.id
    }

    getPartyDeets = () => {
        API.get( { _id: this.state.thisPartyId } )
            .then( (response) => {
                console.log(response);
                if (response.data) {
                    this.setState( state => {
                        return {
                            ...state,
                            body: response.data[0]
                        }
                    })
                } else {
                    this.setState( state => {
                        return {
                            ...state,
                            body: false
                        }
                    })
                }
            })
            .catch( err => {
                console.log(err);
                
            })
    }

}

export default FullParty;