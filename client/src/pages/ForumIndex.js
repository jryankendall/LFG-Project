import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ForumIndex extends Component {
    
    render(){
        return(
            <>
            <div>Forum Index</div>

            <h4>Subforums</h4>

            <p><Link to={`${process.env.PUBLIC_URL}/forum/general`}> General </Link></p>
            <p><Link to={`${process.env.PUBLIC_URL}/forum/random`}> Random </Link></p>
            </>
        )
    }
}

export default ForumIndex;