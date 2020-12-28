import React from "react";
import useGifs from "../hooks/useGifs";
import ListOfGifs from "../components/ListOfGifs";
import Spinner from "../components/Spinner.js";
import TrendingSerches from "../components/TrendingSerches";

export default function Home(){
    const {loading, gifs} = useGifs();
    
    return(
        <React.Fragment>
            {loading ? <Spinner/> : [
            <TrendingSerches/>,
            <div className="contenedor-links">
                <h4 className="ultima-busqueda">Ultima Busqueda</h4>, <ListOfGifs gifs={gifs}/>
            </div>]}
        </React.Fragment>
    );
};
