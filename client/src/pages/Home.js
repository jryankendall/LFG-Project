import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    testHomeClick = (event) => {
        fetch("http://localhost:3001/pages/pub/home", {
            credentials: 'include',
            method: "GET",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json("F"))
            .then(msg => { console.log(msg)});
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