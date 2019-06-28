import React, { Component } from 'react';

class NewThread extends Component {


    render() {
        const subForum = this.props.match.params.id;
        return(
            <div>
                <p>New Post box for subforum {subForum} here</p>
            </div>
        )
    }
}

export default NewThread;