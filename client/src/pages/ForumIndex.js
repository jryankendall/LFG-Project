import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ForumIndex extends Component {
    
    render(){
        return(
            <>
            <div>Forum Index</div>

            <h4>Subforums</h4>

            <p><Link to={`/forum/general`}> General </Link></p>
            <p><Link to={`/forum/random`}> Random </Link></p>
            <p><Link to={`/forum/games`}> Games </Link></p>
            </>
        )
    }
}

export default ForumIndex;