import React, {Component} from 'react';
import { Link } from 'react-router-dom';
const moment = require('moment');

class Party extends Component {

    state = this.props.details;


    render() {
        console.log(this.props);
        let party = this.state;

        return(
            <div className="row">
                <div className="col s10 offset-s1 party-box">
                    <Link to={`parties/${party._id}`}><h3>{party.title}</h3></Link>
                    <p>created by {party.author}</p>
                    <p>posted: {moment(party.posted).format('hh:mm a')}</p>
                    <p>Activity: {party.details.goals.title}</p>
                    <p>from {moment(party.details.time.start).format('hh:mm a')} to {moment(party.details.time.end).format('hh:mm a')}</p>
                </div>
            </div>
        )
    }
}

export default Party;