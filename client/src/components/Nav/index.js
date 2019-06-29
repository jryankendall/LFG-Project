import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

    render() {
        return(
            <nav>
                <div className="nav-wrapper blue darken-1">
                    <ul>
                        <li><Link to={'../../../'}>Home</Link></li>
                        <li><Link to={'../../../forum'}>Forums</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;