import React, {Component} from 'react';
import API from '../../utils/api/Party';
const moment = require("moment");

class DevParty extends Component {

    state = {
        behold: "nothing",
        and: "this should be blank"
    }

    testNewPost = () => {
        const newParty = { 
            title: "F in chat",
            author: "Developer",
            expires: moment(),
            details: {
                body: "Pretend a post is here. Bottom text.",
                goals: {
                    goalType: "Game",
                    title: "Mordhau",
                    source: "Steam"
                },
                members: { 
                    min: 1,
                    max: 5,
                    list: ["Developer"],
                    wanted: 4
                },
                time: {
                    end: moment()
                }
            }
        }
        console.log(newParty);
        
        API.post(newParty)
    }

    renderState = () => {
        const renderArray = [];
        for (let i in this.state) {
            renderArray.push(<p>{this.state[i]}</p>);
        };
        return renderArray;
    }

    render() {
        return(
            <>
                <button id="test-new-post" onClick={this.testNewPost}>Insert New Post</button>
                <button id="test-get-post" onClick={this.testGetPost}>Test Grab Post</button>
                {/* <div id="post-render-spot">
                    {this.renderState()}
                </div> */}
            </>
        )
    }
}

export default DevParty;