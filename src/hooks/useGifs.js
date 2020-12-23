import {useState, useEffect} from "react";
import  getGifs  from "../api/api.js";

export default function useGifs({keyword} = {keyword: null}){
    const [loading, setLoading] = useState(false);
    const [gifs, setGifs]= useState([]);

    useEffect(()=>{
        setLoading(true);

        const keywordToUse = keyword || localStorage.getItem("lastkeyword")

        getGifs({keyword: keywordToUse})
        .then(gifsResp => {
            setGifs(gifsResp);
            setLoading(false);
            localStorage.setItem("lastkeyword", keyword);
        });
    },
    [keyword]);

    return {loading, gifs};
}
