import React, { Component} from 'react';

class PartyGoal extends Component {

    state = {
        raims: "taims"
    }

    render() {
        if (this.props.category === "video games") {
            return(
                <div>
                    <p>Vidya</p>
                </div>
            )
        } else if (this.props.category === "board games") {
            return(
                <div>
                    <p>Byoard</p>
                </div>
            )
        } else if (this.props.category === "other") {
            return(
                <div>
                    <p>Oth0r</p>
                </div>
            )
        } else {
            console.log("What happened?!");
            return(
                <div>
                    <p>No! NOOOOO!</p>
                </div>
            )
        };
    };
}

export default PartyGoal;