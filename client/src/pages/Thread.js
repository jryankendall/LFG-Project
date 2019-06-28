import React, { Component } from 'react';
import API from '../utils/api/Post';
import Reply from '../components/Reply';

class Thread extends Component {

    state = {
        thread: {
            originalPost: {
                title: "Sample Thread",
                author: "Developer",
                mongoid: "69",
                posted: "January 1, 1969",
                lastReply: "January 2, 1969 by Frederick",
                body: "Sample Text",
                url: "idwouldgohere",
                subForum: "general",
                properties: {
                    reply: {
                        repliesNum: 0,
                        replies: []
                    }
                }
            },
            replies: []
        }
    }

    getOPandReplies = () => {
        const threadId = this.props.match.params.threadid;
        API.get.onePost( { _id: threadId })
            .then( (result) => {
                console.log(result.data);
                API.get.repliesToPost( { 'properties.reply.replyTo' : threadId } )
                .then( (replies) => {
                    console.log(replies.data);
                    this.setState( state => {

                        return {
                            ...state,
                            thread: {
                                originalPost: result.data,
                                replies: replies.data
                            }
                        }
                    })
                })
                .catch(err =>{
                    console.log(err);
                    
                })
                
            })
            .catch (err => {
                console.log(err);
                
            })
    }

    async componentDidMount() {
        await this.getOPandReplies();
    }

    render() {
        let originalPost = this.state.thread.originalPost;
        let threadReplies = this.state.thread.replies;
        return(
            <div className="row">
                <div className="col s12 whole-post-box">
                    <div className="row post-row">
                        <div className="col s12 post-header">
                            <h4>{originalPost.title}</h4>
                            <h5>Posted: {originalPost.posted}</h5>
                        </div>
                        <div className="col s2 thread-poster-info">
                            <i class="material-icons large">person</i>
                            <p>{originalPost.author}</p>
                        </div>
                        <div className="col s10 thread-post-box">
                            <p>{originalPost.body}</p>
                        </div>
                    </div>
                </div>
                {threadReplies.map((value, index) => {
                    let thisReply = threadReplies[index];
                    return <Reply
                            key={index}
                            author={thisReply.author}
                            body={thisReply.body}
                            posted={thisReply.posted}
                             />
                })}
            </div>
        )
    }
}

export default Thread;