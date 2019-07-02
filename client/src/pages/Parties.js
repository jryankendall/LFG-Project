import React, {Component} from 'react';
import Party from '../components/Party';
import API from '../utils/api/Party';
import { Link } from 'react-router-dom';

class Parties extends Component {

    state = {
        searchQuery: "",
        searchCategory: ""
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

    searchForParties = () => {
        if (this.state.searchCategory) {
            API.get( { category: this.state.searchCategory } )
                .then( (response) => {
                    console.log(response);
                    
                })
                .catch( err => {
                    console.log(err);
                    
                })
        } else {
            console.log("No search category, how?");
            
        }
    }

    render() {
        return(
            <div className="row">
                <div className="col s12">
                    <Link to={`/parties/new`}>
                        <button className="btn col s6 offset-s3 waves-effect" id="new-party-btn">
                            Create New Party
                        </button>
                    </Link>
                </div>
                <p style={ { 'text-align': 'center' }}>Or...</p>
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
                    <button className="btn col xl4 offset-xl4 l6 offset-l3 m8 offset-m2 s10 offset-s1 waves-effect" id="submit-search-btn" onClick={this.searchForParties}>
                        <span role="img" aria-label="hand emoji">✋</span> <span>SLAM THAT SEARCH BTN</span>
                    </button>
                </div>
                <div className="col s12">
                    <p>Parties Go Here</p>
                    Like this one
                    <Party />
                </div>
            </div>
        )
    }
}

export default Parties;