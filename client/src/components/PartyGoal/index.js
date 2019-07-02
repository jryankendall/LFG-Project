import React, { Component} from 'react';

class PartyGoal extends Component {

    state = {
        raims: "taims"
    }

    render() {
        if (this.props.category === "video games") {
            return(
                <div>

                </div>
            )
        } else if (this.props.category === "board games") {

        } else if (this.props.category === "other") {

        } else {
            console.log("What happened?!");
            
        };
    };
}

export default PartyGoal;