import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sitepath extends Component {

    render() {
        let here = document.location.pathname.split("/");
        console.log(here);
        
        for (let i = here.length-1; i > 0; i--) {
            let newvalue = "";
            for (let j = here.length-1; j > i; j--) {
                newvalue += "../"
            }
            here[i] = newvalue + here[i];
        }

        return(
            <div className="col s12 site-path">
                {here.map( (value, index) => {
                    let notAZ = /[^a-z]/gi;
                    let displayValue = value.replace(notAZ, "");
                    return( 
                        <>
                        <Link to={`${value}`}>{displayValue}</Link> &nbsp; > &nbsp;
                        </>
                    )
                })}
            </div>
        )
    }
}

export default Sitepath;