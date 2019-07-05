import React, {Component} from 'react';
import Party from '../components/Party';
import API from '../utils/api/Party';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';

class Parties extends Component {

    state = {
        searchQuery: "",
        searchCategory: "",
        found: [],
        disabled: false
    }

    changeState = (stateName, value) => {
        this.setState( state => {
            return {
                ...state,
                [stateName]: value
            };
        })
    }

    clickRadio = (event) => {
        let radioValue = event.target.value;

        this.changeState("searchCategory", radioValue);
    }

    searchForParties = (event) => {
        event.preventDefault();
        if (this.state.disabled) {
            return;
        }
        if (this.state.searchCategory) {
            this.setState({disabled: true});
            
            API.get( { category: this.state.searchCategory } )
                .then( (response) => {
                    console.log(response.data);
                    this.changeState('found', response.data);
                })
                .catch( err => {
                    console.log(err);
                    
                })
        } else {
            console.log("No search category, how?");
            
        }
    }

    render() {
        const foundParties = this.state.found || [];
        return(
            <div className="row">
                <div className="col s12">
                    <Link to={`/parties/new`}>
                        <button className="btn col s6 offset-s3 waves-effect" id="new-party-btn">
                            Create New Party
                        </button>
                    </Link>
                </div>
                <p style={ { 'textAlign': 'center' }}>Or...</p>
                <div className="col s8 offset-s2 search-container" id="search-container">
                    <div className="input-field col s10 offset-s1">
                        <input id="party-search-box" type="text" />
                        <label htmlFor="party-search-box">Search</label>
                    </div>
                    <div className="col s12 category-picker">
                        <label htmlFor="search-video-games">
                            <input className="with-gap" name="category" type="radio" id="search-video-games" checked={this.state.searchCategory === "video games"} onChange={this.clickRadio} value="video games" />
                            <span>Video Games</span>
                        </label>
                        <label htmlFor="search-board-games">
                            <input className="with-gap" name="category" type="radio" id="search-board-games" checked={this.state.searchCategory === "board games"} onChange={this.clickRadio} value="board games" />
                            <span>Board Games</span>
                        </label>
                        <label htmlFor="search-other">
                            <input className="with-gap" name="category" type="radio" id="search-other" checked={this.state.searchCategory === "other"} onChange={this.clickRadio} value="other" />
                            <span>Other</span>
                        </label>
                    </div>
                    <Button id="submit-search-btn" 
                    className="btn col xl4 offset-xl4 l6 offset-l3 m8 offset-m2 s10 offset-s1 waves-effect" node="a" waves="light" 
                    onClick={this.searchForParties}
                    disabled={this.state.disabled}
                    large>
                        {this.state.disabled ? 'Searching!' : <><span role="img" aria-label="hand emoji">✋</span> <span>SLAM THAT SEARCH BTN</span></> }</Button>
                </div>
                <div className="col s12">
                    {foundParties.map((value, index) => {
                        let thisThread = foundParties[index];
                        console.log(thisThread);
                        
                        if (thisThread) {
                            return ( <Party 
                                key={index}
                                details={thisThread}
                                />
                            )
                        } else {
                            return(
                                <p>No Results</p>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default Parties;