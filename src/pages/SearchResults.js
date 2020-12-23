import React from "react";
import Spinner from "../components/Spinner.js";
import useGifs from "../hooks/useGifs";
import ListOfGifs from "../components/ListOfGifs";

export default function SearchResults({ params }){
    const { keyword } = params;
    const { loading, gifs } = useGifs({keyword});

    return (
        <React.Fragment>
            {loading ? <Spinner /> : <ListOfGifs gifs={gifs}/>}
        </React.Fragment>
    );
};
