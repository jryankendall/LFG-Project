import React, {Component} from 'react';
import API from '../../utils/api/User';

class DevUser extends Component {
    state = {
        username: "UserName",
        password: "PassWord"
    }

    inputChanged = (event) => {
        let box = event.target.id;
        let value = event.target.value;

        switch (box) {
            case "username-input":
                this.setState({
                    username: value
                });
                break;
            case "user-password-input":
                this.setState( {
                    password: value
                });
                break;
            default:
                return null;
        }
    }

    testGetUser = () => {
        API.get.test({ username: "Me"})
            .then( res => {
                console.log(res);
            })
    }

    testRegisterUser = () => {
        let newUser = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(newUser);
        
        API.register.test(newUser)
            .then( res => {
                console.log(res);
                
            })
    };
    
    testLogin = (event) => {
        event.preventDefault();
        let loginDetails = {
            username: this.state.username,
            password: this.state.password
        };
        console.log(loginDetails);
        
        API.login.test(loginDetails)
            .then( (response) => {
                console.log(response);
                if (response.status === 200) {
                    document.cookie = response;
                } else {
                    const error = new Error(response.error);
                    throw error;
                }
            })
            .catch( (err) => {
                console.log(err);
            })
    };

    dropDb = () => {
        API.delete.test.all();
    }

    render() {
        let state = this.state;
        return(
            <div>
                <h3>Test Commands go Here</h3>
                <p>name</p>
                <input id="username-input" value={state.username} onChange={this.inputChanged}></input>
                <p>Pass</p>
                <input id="user-password-input" value={state.password} onChange={this.inputChanged}></input>
                <button id="register-user-test" onClick={this.testRegisterUser}>Click Here to Test User Creation</button>
                <br/>
                <button id="get-user-test" onClick={this.testGetUser}>CLick to test Grab User</button>
                <button id="test-user-login" onClick={this.testLogin}>Click to Try Login Func</button>
                <br />
                <br />
                <button id="clear-db-test" onClick={this.dropDb}>DANGER: Empty Database</button>
            </div>
        )
    }
}

export default DevUser;