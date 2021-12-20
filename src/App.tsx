import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios"
import MainPanel from "./components/MainPanel";


function App() {

  const [data, setData] = useState()

  const fetchInfo = async () => {
      const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=пЕтроЗавоДск&lang=ru&units=Metric&appid=91904eca8f95f6fe668e89cf40846e50")
      // const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(response.data)
      setData(response.data)
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div className="App">
      <MainPanel/>
    </div>
  );
}

export default App;
