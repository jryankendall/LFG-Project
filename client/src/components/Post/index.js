import React, { Component } from 'react';

class Post extends Component {

    state = {
        author: "Anonymous",
        subforum: "General",
        topic: "Test Topic",
        posted: "January 1, 1969",
        body: "Sample Text",
        postid: "NUMBER",
        isOP: true,
        replyNumber: 0
    }

    render() {
        return(
            <div className="forum-post">
                {this.props.children}
            </div>
        )
    }
}
export default Post;