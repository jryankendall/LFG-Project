import React, {Component} from 'react';
import Thread from '../components/Thread';
import API from '../utils/api/Post';
import { Link } from 'react-router-dom';

class Forum extends Component {

    state = {
        threads: {
            pulled: [ {
                title: "Sample Thread",
                author: "Developer",
                lastReply: "January 2, 1969 by Frederick",
                url: "idwouldgohere",
                subForum: "general",
                properties: {
                    reply: {
                        repliesNum: 0,
                        replies: []
                    }
                }
            }]
        }
    }

    subForums = ["general", "random", "games"];

    getThreadsBySubforum = () => {
        const thisForum = this.props.match.params.id;
        API.get.threadsBySubforum( {
            subForum: thisForum,
            'properties.reply.isReply': false
            
        })
        .then( (results) => {
            this.setState (state => {
                const threadList = [];
                results.data.forEach( (element) => {
                    threadList.push(element);
                })
                
                return {
                    ...state,
                    threads: {
                        pulled: threadList
                    }
                }
            })
        })
    }

    seedDB = () => {
        API.create.seed()
            .then( (results) => {
                console.log(results);
                
            })
            .catch( (err) => {
                console.log(err);
            })
    }


    async componentDidMount() {
        await this.getThreadsBySubforum();
    }

    render() {
        let gotThreads = this.state.threads.pulled;
        if (this.subForums.includes(this.props.match.params.id)) {
            return(
                <span id={this.props.match.params.id}>
                <div>
                    <h2>This is the {this.props.match.params.id} Subforum</h2>
                    <Link to={`${process.env.PUBLIC_URL}/forum/${this.props.match.params.id}/post`}><button>Create New Thread</button></Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Replies</th>
                            <th>Last Reply</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gotThreads.map((value, index) => {
                            let oneThread = gotThreads[index];
                            if (oneThread.properties.reply.replies.length > 0) {
                                oneThread.lastReply = oneThread.properties.reply.replies[oneThread.properties.reply.replies.length -1];
                            } else {
                                oneThread.lastReply = {
                                    author: "Nobody",
                                    posted: "Never"
                                };
                            }

                            oneThread.url = oneThread._id;
                            
                            return <Thread
                            key={index}
                            subForum = {oneThread.subForum}
                            title={oneThread.title}
                            replies={oneThread.properties.reply.repliesNum}
                            author={oneThread.author}
                            lastReplyAuthor={oneThread.lastReply.author}
                            lastReplyDate={oneThread.lastReply.posted}
                            url={oneThread.url}
                             />
                        })}
                    </tbody>
                </table>
                </span>
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