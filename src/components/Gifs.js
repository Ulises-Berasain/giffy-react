import React from "react";
import "./Gifs.css"

export default function Gif({title, id, url}){
    return(
        <a href={url} target="_blank" className="gif">
            <h4>{title}</h4>
            <img loading="lazy" alt={title} id={id} src={url}/>
        </a>
    );
};
