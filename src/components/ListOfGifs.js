import React, {useState,useEffect} from "react";
import getGifs from "../api/api.js";
import Gif from "./Gifs";

export default function ListOfGifs({ keyword }){
    const [gifs, setGifs]= useState([]);

    useEffect(()=>{
        getGifs({keyword})
        .then(gifsResp => setGifs(gifsResp));
    },
    [keyword]);

    return (<div>{gifs.map(({id, title, url}) => <Gif key={id} id={id} title={title} url={url}/>)}</div>);
};
