import React, { Component} from 'react';

class PartyGoal extends Component {

    state = {
        new: {
            category: "",
            videoGame: {
                gameName: "",
                gameSource: ""
            },
            boardGame: {
                boardName: "",
                boardSource: ""
            },
            other: {
                otherName: ""
            }

        }
    }

    inputChanged = (event) => {
        let inputName = event.target.name;
        let category = event.target.attributes.category.value;
        let value = event.target.value;
        

        this.setState( state => {
            return {
                ...state,
                new: {
                    ...state.new,
                    [category]: {
                        ...state.new[[category]],
                        [inputName]: value
                    }
                }
            };
        })

        this.props.callback( {
            category: category,
            [inputName]: value
        })
    }

    render() {
        if (this.props.category === "video games") {
            return(
                <>
                    <div className="col s12">
                        <div className="col l8 offset-l0 s10 offset-s1 input-field">
                            <input id="chosen-video-game" category="videoGame" name="gameName" type="text" value={this.state.new.videoGame.gameName} onChange={this.inputChanged} />
                            <label htmlFor="chosen-video-game">Video Game Name</label>
                        </div>
                    </div>
                    <div className="col s12">
                        <div className="col l8 offset-l0 s10 offset-s1 input-field">
                            <input id="chosen-game-source" category="videoGame" name="gameSource" type="text" value={this.state.new.videoGame.gameSource} onChange={this.inputChanged} />
                            <label htmlFor="chosen-game-source">Video Game Source (for example, Steam)</label>
                        </div>
                    </div>
                </>
            )
        } else if (this.props.category === "board games") {
            return(
                <>
                    <div className="col s12">
                        <div className="col l8 offset-l0 s10 offset-s1 input-field">
                            <input id="chosen-board-game" category="boardGame" name="boardName" type="text" value={this.state.new.boardGame.boardName} onChange={this.inputChanged} />
                            <label htmlFor="chosen-board-game">Board Game Name</label>
                        </div>
                    </div>
                    <div className="col s12">
                        <div className="col l8 offset-l0 s10 offset-s1 input-field">
                            <input id="chosen-board-source" category="boardGame" name="boardSource" type="text" value={this.state.new.boardGame.boardSource} onChange={this.inputChanged} />
                            <label htmlFor="chosen-board-source">Board Game Source (for example, roll20 or Brettspielwelt)</label>
                        </div>
                    </div>
                </>
            )
        } else if (this.props.category === "other") {
            return(
                <>
                    <div className="col s12">
                        <div className="col l8 offset-l0 s10 offset-s1 input-field">
                            <input id="chosen-other" category="other" name="otherName" type="text" value={this.state.new.other.otherName} onChange={this.inputChanged} />
                            <label htmlFor="chosen-other">Title of Other Thing</label>
                        </div>
                    </div>
                </>
            )
        } else {
            console.log("What happened?!");
            return(
                <div>
                    <p>&nbsp; Select a category above</p>
                </div>
            )
        };
    };
}

export default PartyGoal;