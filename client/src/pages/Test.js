import React, {Component} from 'react';
import DevUser from '../components/devUser';
import DevParty from '../components/devParty';

class Test extends Component {
    render() {
        return(
            <div>
                <h1>This is the test page.</h1>
                <DevUser>
                </DevUser>
                <hr></hr>
                <DevParty />
            </div>
        )
    }
}

export default Test;