import React, {Component} from 'react';
import PartyGoal from '../components/PartyGoal';
import { TimePicker, Select, Textarea, Button } from 'react-materialize';
import API from '../utils/api/Party';

const moment = require("moment");

class NewParty extends Component {

    state = {
        new: {
            author: "",
            'members-got': 1,
            'members-min': 3,
            'members-max': 5,
        },
        disabled: false
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
    };

    timeChanged = (hour, minute) => {
        this.setState(state => {
            return {
                ...state,
                startHour: hour,
                startMinute: minute
            }
        })
        
    }

    submitParty = (event) => {
        const grab = function(element) {
            return document.getElementById(element);
        }
        console.log(event);
        event.preventDefault();
        if (this.state.disabled) {
            return;
        }
        this.setState({disabled: true});
        let startTime =  grab("party-start-time").value;
        startTime = moment(startTime, "hh:mm a").toISOString();
        let partyDuration = parseInt(grab("end-time-select").value) || 1;
        let endTime = moment(startTime).add(partyDuration, 'h').toISOString();
        let details = this.getTitle();
        
        let newPartyObj = {
            title: grab("party-title").value || "Untitled",
            author: grab("party-author").value || "Anonymous",
            category: this.state.new.category || "other",
            expiry: endTime,
            details: {
                body: grab("party-description-input").value.toString(),
                goals: {
                    goalType: this.state.new.category || "other",
                    title: details[0] || "None",
                    source: details[1] || "None"
                },
                time: {
                    start: startTime,
                    end: endTime
                },
                members: {
                    needApproval: false,
                    min: this.state.new["members-got"],
                    max: this.state.new["members-max"],
                    wanted: this.state.new["members-min"],
                    list: [this.state.new.author]
                }
            }
        }

        API.post(newPartyObj)
            .then( success => {
                console.log(success);
            })
            .catch(err => {
                console.log(err);
                
            })

    }

    parseChildInfo = (data) => {
        this.setState( data );
    }

    getTitle = () => {
        const category = this.state.category;
        switch (category) {
            case "videoGame":
                return [this.state.videoName, this.state.videoSource];
            case "boardGame":
                return [this.state.boardName, this.state.boardSource];
            case "other":
                return [this.state.otherName, null];
            default:
                return [null, null];
        }
    }

    render() {
        const party = this.state.new;
        return(
            <div className="row">
                <form className="col l10 offset-l1 s12 party-form">
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
                        <div className="col l6 offset-10 s10 offset-s1">
                            <label>
                                <input type="checkbox" className="filled-in" id="party-requires-approval" name="require-approval" />
                                <span>Require leader approval before accepting non-friends applicants?</span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <PartyGoal category={this.state.new.category} state={this.state} callback={this.parseChildInfo} />
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <p>When you plan to start?</p>
                            <TimePicker id="party-start-time" onChange={this.timeChanged} />
                        </div> 
                        <div className="col s12">
                            <p>About how long you gonna do this for? This party will be automatically deleted after this long.</p>
                            <Select defaultValue="" id="end-time-select" icon="timer" s={8}>
                                <option value="" disabled>
                                Choose a time here
                                </option>
                                <option value={1}>
                                    Like an hour
                                </option>
                                <option value={2}>
                                    Around 2 hours
                                </option>
                                <option value={3}>
                                    3 hours
                                </option>
                                <option value={4}>
                                    Like 4 hours baby!
                                </option>
                            </Select>
                            <div className="col s12">
                            <p>Type a short description of your party below. Provide any necessary details such as
                                how to find you, server addresses, etc. </p>
                                </div>
                            <Textarea
                                s={12}
                                m={12}
                                l={10}
                                xl={10}
                                placeholder="Description goes in here."
                                id="party-description-input"
                            />
                        </div> 
                    </div>
                    <Button id="submit-party-btn" 
                    className="col s4 offset-s4" node="a" waves="light" 
                    onClick={this.submitParty}
                    disabled={this.state.disabled}
                    large>
                        {this.state.disabled ? 'Sending...' : 'Submit Party'}</Button>
                </form>
            </div>
        )
    }
}

export default NewParty;