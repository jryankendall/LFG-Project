import React, {Component} from 'react';
import PartyGoal from '../components/PartyGoal';
import API from '../utils/api/Party';

class NewParty extends Component {

    state = {
        new: {
            author: "",
            'members-got': 1,
            'members-min': 3,
            'members-max': 5,
        }
    }

    inputChanged = (event) => {
        let stateName = event.target.name;
        let value = event.target.value;

        if (event.target.type === "number") {
            value = parseInt(value);
        }

        if (true) {
            this.setState(state => {
                return {
                    ...state,
                    new: {
                        ...state.new,
                        [stateName]: value
                    }
                }
            })
        }
    }

    render() {
        const party = this.state.new;
        return(
            <div className="row">
                <p>Form Goes Below</p>
                <form className="col s12 party-form">
                    <div className="row">
                        <div className="col s6 input-field">
                            <input id="party-author" name="author" type="text" value={party.author} onChange={this.inputChanged}></input>
                            <label htmlFor="party-author">Your Nickname</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s10 input-field">
                            <input id="party-title" name="title" type="text" value={party.title} onChange={this.inputChanged} />
                            <label htmlFor="party-title">Party Name</label>
                        </div>
                        <div className="col s12 category-picker">
                            <span>Category:</span>
                            <label htmlFor="search-video-games">
                                <input className="with-gap" name="category" type="radio" id="search-video-games" checked={party.category === "video games"} onChange={this.inputChanged} value="video games" />
                                <span>Video Games</span>
                            </label>
                            <label htmlFor="search-board-games">
                                <input className="with-gap" name="category" type="radio" id="search-board-games" checked={party.category === "board games"} onChange={this.inputChanged} value="board games" />
                                <span>Board Games</span>
                            </label>
                            <label htmlFor="search-other">
                                <input className="with-gap" name="category" type="radio" id="search-other" checked={party.category === "other"} onChange={this.inputChanged} value="other" />
                                <span>Other</span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l4 offset-l0 s10 offset-s1 input-field">
                            <input type="number" name="members-got" id="have-members" step="1" min="1" max="20" value={party['members-got']} onChange={this.inputChanged} />
                            <label htmlFor="have-members">How Many You Got? (Including You)</label>
                        </div>
                        <div className="col l4 offset-l0 s10 offset-s1 input-field">
                            <input type="number" name="members-min" id="min-members" step="1" min="1" max="30" value={party['members-min']} onChange={this.inputChanged} />
                            <label htmlFor="min-members">How Many You Want? (Not Including You)</label>
                        </div>
                        <div className="col l4 offset-l0 s10 offset-s1 input-field">
                            <input type="number" name="members-max" id="max-members" step="1" min="2" max="30" value={party['members-max']} onChange={this.inputChanged} />
                            <label htmlFor="max-members">Total Max Peeps (Including You)</label>
                        </div>
                    </div>
                    <div className="row">

                    </div>
                </form>
            </div>
        )
    }
}

export default NewParty;