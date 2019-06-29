import React, { Component } from 'react';
import API from '../utils/api/Post';
import Reply from '../components/Reply';
import moment from 'moment';

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
        },
        author: "",
        body: ""
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

    sendReply = () => {
        const state = this.state;
        const threadId = this.props.match.params.threadid;
        let newReply = {
            author: state.author,
            body: state.body,
            posted: Date.now(),
            subForum: this.props.match.params.id,
            properties: {
                reply: {
                    isReply: true,
                    replyTo: this.props.match.params.threadid
                }
            }
        }
        API.create.new(newReply)
            .then( (response) => {
                console.log("Reply posted.");
                API.get.onePost( { _id: threadId })
            .then( (document) => {
                console.log(document.data);
                
                let opReplies = parseInt(document.data.properties.reply.repliesNum) + 1;
                let newLastReply = [ {
                    author: newReply.author,
                    posted: newReply.posted
                }]
                console.log(opReplies);

                let passedValues = {
                    properties: {
                        reply: {
                            isReply: document.data.properties.reply.isReply,
                            replyTo: document.data.properties.reply.replyTo,
                            repliesNum: opReplies,
                            replies: newLastReply
                        }
                    }
                }
                

                API.update.onePost( { _id: threadId }, passedValues)
                    .then(succ => {
                        console.log(succ);
                    })
            })

                
            })
            .catch(err => {
                console.log(err);
                
            })

    }

    changeState = (whichState, newState) => {
        this.setState( state => {

            return {
                ...state,
                [whichState]: newState
            }
        })
    }

    inputChanged = (event) => {
        const box = event.target.id;
        let value = event.target.value;
        switch (box) {
            case "nickname":
                this.changeState("author", value);
                break;
            case "post-body":
                this.changeState("body", value);
                break;
            default:
                return null;
        }
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
                            <h5>Posted: &nbsp;{moment(originalPost.posted).format("MMMM Do YYYY, h:mm:ss a")}</h5>
                        </div>
                        <div className="col s2 thread-poster-info">
                            <i className="material-icons large">person</i>
                            <p>{originalPost.author}</p>
                        </div>
                        <div className="col s10 thread-post-box">
                            <p>{originalPost.body}</p>
                        </div>
                    </div>
                </div>
                {threadReplies.map((value, index) => {
                    let thisReply = threadReplies[index];
                    return( <div className="col s12 whole-post-box" key={index}><Reply
                            key={index}
                            author={thisReply.author}
                            body={thisReply.body}
                            posted={thisReply.posted}
                             /></div>)
                })}
                <form className="col s12">
                    <br></br>
                    <div className="row">
                        <div className="col s12 form-column">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">person</i>
                                <input placeholder="Anonymous" id="nickname" type="text" onChange={this.inputChanged} value={this.state.author} />
                                <label htmlFor="nickname">Nickname</label>
                            </div>
                        </div>
                        <div className="col s12 form-column form-post-column">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">mode_edit</i>
                                <textarea id="post-body" className="materialize-textarea newthread-body" onChange={this.inputChanged} value={this.state.body}></textarea>
                                <label htmlFor="post-body">Reply Body</label>
                            </div>
                        </div>
                        
                    </div>

                    <i className="material-icons">send</i> &nbsp;
                    <button className="btn waves-effect" id="submit-thread-btn" onClick={this.sendReply}>
                        <span>Send Reply</span>
                    </button>

                </form>
            </div>
        )
    }
}

export default Thread;