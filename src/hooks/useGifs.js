import {useState, useEffect, useContext} from "react";
import  getGifs  from "../api/api.js";
import GifsContext from "../context/GifsContext";

export default function useGifs({keyword} = {keyword: null}){
    const [loading, setLoading] = useState(false);
    const {gifs, setGifs} = useContext(GifsContext);

    useEffect(()=>{
        setLoading(true);

        const keywordToUse = keyword || localStorage.getItem("lastkeyword")

        getGifs({keyword: keywordToUse})
        .then(gifsResp => {
            setGifs(gifsResp);
            setLoading(false);
            localStorage.setItem("lastkeyword", keyword);
        });
    }, [keyword, setGifs]);

    return {loading, gifs};
}
