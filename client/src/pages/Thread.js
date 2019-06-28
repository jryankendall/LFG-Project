import React, { Component } from 'react';
import API from '../utils/api/Post';

class Thread extends Component {

    state = {
        thread: {
            originalPost: {
                title: "Sample Thread",
                author: "Developer",
                mongoid: "69",
                lastReply: "January 2, 1969 by Frederick",
                url: "idwouldgohere",
                subForum: "general",
                properties: {
                    reply: {
                        repliesNum: 0,
                        replies: []
                    }
                }
            }
        }
    }

    getOPandReplies = () => {
        const threadId = this.props.match.params.threadid;
        API.get.onePost( { _id: threadId })
            .then( (result) => {
                console.log(result.data);

            })
    }

    async componentDidMount() {
        await this.getOPandReplies();
    }

    render() {
        let originalPost = this.state.thread.originalPost;
        let threadReplies = this.state.thread.originalPost.properties.reply;
        return(
            <div className="row">
                <div className="col s12 whole-post-box">
                    <div className="col s12 post-header">
                        <p>Original Post</p>
                    </div>
                    <div className="col s3 thread-poster-info">
                    <i class="material-icons">person</i>
                    </div>
                    <div className="col s9 thread-post-box">
                    </div>
                </div>
            </div>
        )
    }
}

export default Thread;