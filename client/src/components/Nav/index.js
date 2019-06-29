import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

    render() {
        return(
            <nav>
                <div className="nav-wrapper blue darken-1">
                    <ul>
                        <li><Link to={`${process.env.PUBLIC_URL}/`}>Home</Link></li>
                        <li><Link to={`${process.env.PUBLIC_URL}/forum`}>Forums</Link></li>
                        <li><Link to={`${process.env.PUBLIC_URL}/parties`}>Party Finder</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;