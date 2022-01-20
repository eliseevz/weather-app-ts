import React, {useState} from 'react';
import './App.css';
import MainPanel from "./components/MainPanel";
import SideBar from "./components/SideBar";
import {useWeather} from "./hooks/useWeather";


function App() {

    // const {data} = useWeather()

  return (
    <div className="App">
        <SideBar />
        <MainPanel/>
    </div>
  );
}

export default App;
