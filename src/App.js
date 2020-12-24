import React, {useState}from "react";
import './App.css';
import {Route, Link, useLocation} from "wouter";
import Home from "./pages/Home.js";
import giffy from "./img/giffy.png";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Details";
import {GifsContextProvider}from "./context/GifsContext";

export default function App() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleSubmit = (e)=>{ 
    e.preventDefault(); 
    return pushLocation(`/search/${keyword}`), setKeyword("");
  };

  const handleChange = (e)=>{
    return setKeyword(e.target.value);
  };

  return (
      <div className="App">
        <Link className="link-logo" to="/"><img className="logo-giffy" alt="Giffy logo" src={giffy} /></Link>

        <form onSubmit={handleSubmit} className="contenedor-input">
          <input onChange={handleChange} type="text" value={keyword} id="input-gif" placeholder="Search a Gif"/>
          <button className="button-gif">Search Gif</button>
        </form>

        <GifsContextProvider>
          <div className="contenedor-links">
            <Route path="/" component={Home}/>
          </div>

          <section className="App-content">
            <Route path="/search/:keyword" component={SearchResults}/>

            <Route path="/gif/:id" component={Detail}/>
          </section>
        </GifsContextProvider>

      </div>
  );
};
