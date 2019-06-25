import React, {Component} from 'react';
import Thread from '../components/Thread';

class Forum extends Component {

    render() {
        return(
            <>
            <div>
                <h2>This is the {this.props.match.params.id} Subforum</h2>
            </div>
            <Thread />
            </>
        )
    }
}

export default Forum;