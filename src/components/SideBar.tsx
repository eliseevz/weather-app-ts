import React, {FC} from 'react';
import {useSHistory} from "../hooks/useMyHistory";
import {useWeather} from "../hooks/useWeather";

interface SidebarProps {

}

const SideBar: FC<SidebarProps> = () => {

    const {history, clearHistory, historyChangeHandler} = useSHistory()
    const {fetchData} = useWeather()

    const historyElementClickHandler = (name: string) => {
        fetchData(name)
        historyChangeHandler(name)
    }

    return (
        <div className="sideBar">
            <h4>history</h4>
            <ul className="list-group mt-3">
                {
                    history?.reverse().map((city: string) =>
                        <li
                            onClick={() => historyElementClickHandler(city)}
                            className="list-group-item"
                            style={{fontSize: 14}}
                            key={city}
                            role="button"
                        >
                            {city}
                        </li>
                    )
                }
            </ul>
            <span onClick={clearHistory} className="btn btn-light mt-2">clear</span>
        </div>
    );
};

export default SideBar;
