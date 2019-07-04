import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    testHomeClick = (event) => {
        fetch("http://localhost:3001/devtests/checkToken/", {
            method: "GET",
            headers : {
                'Accept': 'application/json'
            }
        })
            .then( response => {console.log(response);
            })
            .then ( eff => {console.log(eff);
            })
    }

    render() {
        return(
            <div className="row">
                <h1>Welcome to the LFG Community!</h1>
                <div className="col l6 s12">
                    <div className="col l10 offset-l1 s8 offset-s2 white frontcard-box">
                        <div className="row">
                            <div className="col s12 frontcard-header">
                                <Link to={`/parties`}><h1>Party Finder</h1></Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <p>Looking to find a group of friends to do something with?
                                    Use the party finder to create a new party, or to find an existing one
                                    looking for people to join!
                                </p>
                                <h1><i className="material-icons large">person_add</i> <i className="material-icons large">person</i></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col l6 s12">
                     <div className="col l10 offset-l1 s8 offset-s2 white frontcard-box">
                        <div className="row">
                            <div className="col s12 frontcard-header">
                                <Link to={`/forum`}><h1>Forums</h1></Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <p>Just got something on your mind you want to talk about?
                                    Check out the forums for some light conversation or to just
                                    talk about stuff for a little while.
                                </p>
                                <h1><i className="material-icons large">comment</i> <i className="material-icons large">chat</i></h1>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;