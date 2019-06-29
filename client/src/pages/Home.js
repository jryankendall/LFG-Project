import React, { Component } from 'react';

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
            <div className="welcome-message">
                <h1>Welcome to the LFG Community!</h1>
                
                <p>As you can see, everything here is under construction. However, feel free to visit our forums, via the link above!</p>
            </div>
        )
    }
}

export default Home;