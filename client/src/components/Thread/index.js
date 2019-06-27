import React, {Component} from 'react';
import { Link } from 'react-router-dom';

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
        let props = this.props;
        return(
            <tr className="thread-row">
                <td className="thread-title"><Link to={`./${props.subForum}/thread/${props.url}`}>{props.title}</Link></td>
                <td className="thread-author">{props.author}</td>
                <td className="thread-replies">{props.replies}</td>
                <td className="thread-last-reply">{props.lastReply}</td>
            </tr>
        )
    }
}

export default Thread;