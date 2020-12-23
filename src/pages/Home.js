import React from "react";
import useGifs from "../hooks/useGifs";
import ListOfGifs from "../components/ListOfGifs";
import Spinner from "../components/Spinner.js";

export default function Home(){
    const {loading, gifs} = useGifs();

    return(
        <React.Fragment>
            {loading ? <Spinner/> : [<h4 className="gifs-populares">Ultima Busqueda</h4>, <ListOfGifs gifs={gifs}/>]}
        </React.Fragment>
    );
};
