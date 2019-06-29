import React, { Component } from 'react';
import moment from 'moment';

class Reply extends Component {

    render(){
        let props = this.props;
        return(
            <div className="row post-row">
                <div className="col s12 whole-post-box">
                        <div className="col s12 reply-header">
                            <h5>Posted: &nbsp;{moment(props.posted).format("MMMM Do YYYY, h:mm:ss a")}</h5>
                        </div>
                        <div className="col s2 thread-poster-info">
                            <i className="material-icons large">person</i>
                            <p>{props.author}</p>
                        </div>
                        <div className="col s10 thread-post-box">
                            <p>{props.body}</p>
                        </div>
                </div>
            </div>
        )
    }
}

export default Reply;