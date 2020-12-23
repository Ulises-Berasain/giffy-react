import React from "react";
import Gif from "./Gifs";

export default function ListOfGifs( {gifs} ){

    return (<div>{gifs.map(({id, title, url}) => <Gif key={id} id={id} title={title} url={url}/>)}</div>);
};
