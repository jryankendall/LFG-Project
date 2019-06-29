import React, { Component } from 'react';

class Reply extends Component {

    render(){
        let props = this.props;
        return(
            <div className="row post-row">
                <div className="col s12 whole-post-box">
                        <div className="col s12 post-header">
                            <h5>Posted: {props.posted}</h5>
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