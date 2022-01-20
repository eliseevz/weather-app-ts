import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {WeatherProvider} from "./hooks/useWeather"
import {SHistoryProvider} from "./hooks/useMyHistory";

ReactDOM.render(
    <WeatherProvider>
        <SHistoryProvider>
            <App />
        </SHistoryProvider>
    </WeatherProvider>,
  document.getElementById('root')
);