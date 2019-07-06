import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ForumIndex extends Component {
    
    render(){
        return(
            <>
            <div>Forum Index</div>

            <h2>Subforums</h2>

            <div className="row">
                <div className="col s10 offset-s1">
                    <div className="col s12 subforum-box">
                        <p><Link to={`/forum/general`}> General </Link></p>
                        <p>Talk about whatever, as long as it's not politics or religion, or something that would fit better on another subforum. Like food, movies, or whatever!</p>
                    </div>
                    <div className="col s12 subforum-box">
                        <p><Link to={`/forum/games`}> Games </Link></p>
                        <p>Talk about games, whether it's board games, video games, traditional games, or puzzles or the like.</p>
                    </div>
                    <div className="col s12 subforum-box">
                        <p><Link to={`/forum/random`}> Random </Link></p>
                        <p>Use this forum for posting random or throwaway stuff, like if you just find a funny picture or link or something and don't intend to really talk about it at length.</p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default ForumIndex;