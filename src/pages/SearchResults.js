import React from "react";
import Spinner from "../components/Spinner.js";
import useGifs from "../hooks/useGifs";
import ListOfGifs from "../components/ListOfGifs";

export default function SearchResults({ params }){
    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({keyword});

    const handleNextPage = ()=>setPage(prevPage => prevPage + 1);

    return (
        <React.Fragment>
            {loading ? <Spinner /> : <ListOfGifs gifs={gifs}/>}
            <button onClick={handleNextPage} className="button-more-gifs">Mas Gifs</button>
        </React.Fragment>
    );
};
