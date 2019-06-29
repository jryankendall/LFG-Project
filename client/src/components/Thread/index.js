import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

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
        let lastReply;
        if (props.lastReplyDate !== "Never") {
            lastReply = moment(props.lastReplyDate).format("MMMM Do YYYY, h:mm:ss a");
        } else {
            lastReply = "Never";
        }
        return(
            <tr className="thread-row">
                <td className="thread-title"><Link to={`${process.env.PUBLIC_URL}/forum/${props.subForum}/thread/${props.url}`}>{props.title}</Link></td>
                <td className="thread-author">{props.author}</td>
                <td className="thread-replies">{props.replies}</td>
                <td className="thread-last-reply">by {props.lastReplyAuthor}, on {lastReply}</td>
            </tr>
        )
    }
}

export default Thread;