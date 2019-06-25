import React, {Component} from 'react';
import Thread from '../components/Thread';

class Forum extends Component {

    subForums = ["general", "random", "games"];

    render() {
        if (this.subForums.includes(this.props.match.params.id)) {
            return(
                <>
                <div>
                    <h2>This is the {this.props.match.params.id} Subforum</h2>
                </div>
                <Thread />
                </>
            )
        } else {
            return(
                <>
                <div>
                    <h1>ERROR</h1>
                    <h1>That Subforum ({this.props.match.params.id}) Doesn't Exist!</h1>
                </div>
                </>
            )
        }
    }
}

export default Forum;