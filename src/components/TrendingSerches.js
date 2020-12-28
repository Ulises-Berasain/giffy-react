import React, {useState, useEffect} from "react";
import getTrending from "../api/getTrending";
import Categoty from "./Category";

export default function TrendingSerches(){
    const [trends, setTrends] = useState([]);

    useEffect(function(){
        getTrending().then(setTrends);
    }, []);
    return <Categoty name="Tendencias" options={trends}/>
};
