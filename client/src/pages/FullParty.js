import React, { Component } from 'react';
import API from '../utils/api/Party';
import { Button } from 'react-materialize';

const moment = require("moment");

class FullParty extends Component {

    state = {
        thisPartyId: this.props.match.params.id
    }

    componentDidMount() {
        this.getPartyDeets();
    }

    getPartyDeets = () => {
        API.get( { _id: this.state.thisPartyId } )
            .then( (response) => {
                if (response.data.length === 1) {
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

    printArrayValues = (arr) => {
        arr.map( (value, index) => {
            return value;
        })
    }


    render() {
        let party = this.state.body;
        if (this.state.body) {
            return( 
                <>
                    <div className="row">
                        <div className="col s10 offset-s1 fullparty-box">
                            <h1>{party.title}</h1>
                            <div className="col s12">
                                <h4 className="detail-prefix">Details</h4>
                                <p><span className="detail-prefix">Author: </span> {party.author}</p>
                                <p><span className="detail-prefix">Created at: </span> {moment(party.posted).format("hh:mm a, MM-DD-YYYY")}</p>
                                <p><span className="detail-prefix">Category: </span> {party.category}</p>
                                <p><span className="detail-prefix">Time: </span> {moment(party.details.time.start).format("hh:mm a, MM-DD-YYYY")} to {moment(party.details.time.end).format("hh:mm a, MM-DD-YYYY")}</p>
                                <p><span className="detail-prefix">Objective: </span> {party.details.goals.title}</p>
                                <p><span className="detail-prefix">Source: </span> {party.details.goals.source}</p>
                                <p><span className="detail-prefix">Users Joined: </span> {party.details.members.list.map((value, index) => { return value; })} </p>
                                <p><span className="detail-prefix">Members:</span> {party.details.members.list.length}, <span className="detail-prefix">Wanted: </span>{party.details.members.wanted-1}</p>
                                <p><span className="detail-prefix">Information</span><br /> {party.details.body}</p>
                            </div>
                            <div className="col s6 input-field username-input">
                                <input id="party-join-user-input" name="nickname" type="text"></input>
                                <label htmlFor="party-join-user-input">Your Nickname</label>
                            </div>
                            <div className="col s12">
                                <Button className="col s4 join-button waves-effect">
                                    Join This Party
                                </Button>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return(
                <>
                <div className="row">
                    <div className="col s10 offset-s1 fullparty-box">
                        <h1>404: Party not found.</h1>
                        <h3>It may not exist, or it may have been deleted, or the ID may be incorrect. Sorry!</h3>
                    </div>
                </div>
                </>
            )
        }
    }
}

export default FullParty;