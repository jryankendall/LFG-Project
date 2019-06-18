import React, {Component} from 'react';
import DevUser from '../components/devUser';

class Test extends Component {
    render() {
        return(
            <div>
                <h1>This is the test page.</h1>
                <DevUser />
            </div>
        )
    }
}

export default Test;