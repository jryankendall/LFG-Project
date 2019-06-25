import React, {Component} from 'react';

class Thread extends Component {

    state = {
        threadid: "Sample ID",
        title: "Sample Title",
        subforum: "General",
        author: "Anonymous",
        posted: "January 1, 1969",
        url: "#",
        replies: 1,
        lastreply: {
            author: "Anonymous",
            posted: "January 2, 1969"
        }
    }

    render(){
        return(
            <div className="forum-thread">
                <p>Thread sample text here.</p>
                {this.props.children}
            </div>
        )
    }
}

export default Thread;