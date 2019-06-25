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
            <div>
                <h2>THIS is the HOME PAGE</h2>
                <Link to={'./test'}>
                    <button variant="raised">
                        Test
                    </button>
                </Link>
                <button variant="raised" onClick={this.testHomeClick}>
                    Test Home Link
                </button>
            </div>
        )
    }
}

export default Home;