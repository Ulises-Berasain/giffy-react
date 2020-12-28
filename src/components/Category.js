import React from "react";
import {Link} from "wouter";

export default function Category(props){
    const name = props.name;
    const options = props.options;

    return(
        <React.Fragment>
            <div className="trends-container">
                <h4 className="title-trends">{name}</h4>
                {options.map(option => <Link to={`/search/${option}`}>{option}</Link>)}
            </div>
        </React.Fragment>
    );
};
