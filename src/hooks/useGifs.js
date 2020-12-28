import {useState, useEffect, useContext} from "react";
import  getGifs  from "../api/api.js";
import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0;

export default function useGifs({keyword} = {keyword: null}){
    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);
    const {gifs, setGifs} = useContext(GifsContext);
    const keywordToUse = keyword || localStorage.getItem("lastkeyword")

    useEffect(()=>{
        setLoading(true);

        getGifs({keyword: keywordToUse})
        .then(gifsResp => {
            setGifs(gifsResp);
            setLoading(false);
            localStorage.setItem("lastkeyword", keyword);
        });
    }, [keyword, keywordToUse, setGifs]);

    useEffect(()=>{
        if(page === INITIAL_PAGE) return
        setLoadingNextPage(true);

        getGifs({keyword: keywordToUse, page})
        .then(nextGifs=>{
            setGifs(prevGifs=>{
                return prevGifs.concat(nextGifs);
            });
            setLoadingNextPage(false);
        })
    }, [page, keywordToUse]);

    return {loading, gifs, loadingNextPage, setPage};
}
