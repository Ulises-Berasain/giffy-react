import React, { useState } from "react";
import './App.css';
import ListOfGifs from "./components/ListOfGifs.js";

function App() {
  const [keyword, setKeyword] = useState("programming");
  const handleSubmit = (e)=>{ 
    e.preventDefault(); 
    return setKeyword(document.getElementById("input-gif").value);
  }

  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" id="input-gif" placeholder="Search a Gif"/>
        <button className="button-gif">Search Gif</button>
      </form>
      <section className="App-content">
        <ListOfGifs keyword={keyword}/>
      </section>
    </div>
  );
};

export default App;
