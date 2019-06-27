import React, {Component} from 'react';
import Thread from '../components/Thread';
import API from '../utils/api/Post';

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

    seedDB = () => {
        API.create.seed()
            .then( (results) => {
                console.log(results);
                
            })
            .catch( (err) => {
                console.log(err);
            })
    }

    testGetThreads = () => {
        API.get.threadsBySubforum( {
            subForum: "general"
         })
         .then( (results) => {
            this.setState( state => {
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
         .catch( err => {
             console.log(err);
             
         })
    }

    render() {
        let gotThreads = this.state.threads.pulled;
        if (this.subForums.includes(this.props.match.params.id)) {
            return(
                <>
                <div>
                    <h2>This is the {this.props.match.params.id} Subforum</h2>
                    <button onClick={this.testGetThreads}>Get Thread Test</button>
                    <button onClick={this.seedDB}>Seed Database with Tests</button>
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
                            console.log(oneThread);
                            if (oneThread.properties.reply.replies.length > 0) {
                                oneThread.lastReply = oneThread.properties.reply.replies[oneThread.properties.reply.replies.length -1];
                            } else {
                                oneThread.lastReply = "None";
                            }
                            
                            return <Thread
                            key={index}
                            subForum = {oneThread.subForum}
                            title={oneThread.title}
                            replies={oneThread.properties.reply.repliesNum}
                            author={oneThread.author}
                            lastReply={oneThread.lastReply}
                            url={oneThread.url}
                             />
                        })}
                    </tbody>
                </table>
                </>
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