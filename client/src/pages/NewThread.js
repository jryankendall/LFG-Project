import React, { Component } from 'react';
import API from '../utils/api/Post';

class NewThread extends Component {

    state = {
        author: "",
        title: "",
        body: "",
        subForum: this.props.match.params.id,
        fireRedirect: false
    }

    submitPost = (event) => {
        const state = this.state;
        let newThread = {
            author: state.author,
            title: state.title,
            body: state.body,
            subForum: state.subForum,
            properties: {
                reply: {
                    isReply: false,
                    replies: []
                }
            }
        }
        API.create.new(newThread)
            .then( (response) => {
                console.log(response);
                this.setState({ fireRedirect: true })
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
            case "thread-title":
                this.changeState("title", value);
                break;
            case "post-body":
                this.changeState("body", value);
                break;
            default:
                return null;
        }
    }

    render() {
    
        return(
            <div className="row">
                <form className="col s12">
                    <br></br>
                    <div className="row">
                        <div className="col s12 form-column">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">person</i>
                                <input id="nickname" type="text" onChange={this.inputChanged} value={this.state.author} />
                                <label htmlFor="nickname">Nickname</label>
                            </div>
                        </div>
                        <div className="col s12 form-column">
                            <div className="input-field col s10">
                                <i className="material-icons prefix">label</i>
                                <input id="thread-title" type="text" onChange={this.inputChanged} value={this.state.title}/>
                                <label htmlFor="thread-title">Thread Title</label>
                            </div>
                        </div>
                        <div className="col s12 form-column form-post-column">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">mode_edit</i>
                                <textarea id="post-body" className="materialize-textarea newthread-body" onChange={this.inputChanged} value={this.state.body}></textarea>
                                <label htmlFor="post-body">Post Body</label>
                            </div>
                        </div>
                        
                    </div>

                    <i className="material-icons">send</i> &nbsp;
                    <button className="btn waves-effect" id="submit-thread-btn" onClick={this.submitPost.bind(this)}>
                        <span>Submit Post</span>
                    </button>
                </form>
            </div>
        )
    }
}

export default NewThread;