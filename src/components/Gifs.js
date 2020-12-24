import React from "react";
import "./Gifs.css"
import {Link} from "wouter";

export default function Gif({title, id, url}){
    return(
        <div className="gif">
            <Link to={`/gif/${id}`} className="link-gif">
                <h4>{title}</h4>
                <img loading="lazy" alt={title} id={id} src={url}/>
            </Link>
        </div>
    );
};
