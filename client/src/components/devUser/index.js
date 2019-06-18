import React, {Component} from 'react';
import API from '../../utils/api/User';

class DevUser extends Component {

    testGetUser = () => {
        API.get.test({ username: "Me"})
            .then( res => {
                console.log(res);
            })
    }

    render() {
        return(
            <div>
                <h3>Test Commands go Here</h3>
                <p>name</p>
                <input id="username-input"></input>
                <p>Pass</p>
                <input id="user-password-input"></input>
                <button id="register-user-test">Click Here to Test User Creation</button>
                <br/>
                <button id="get-user-test" onClick={this.testGetUser}>CLick to test Grab User</button>
            </div>
        )
    }
}

export default DevUser;