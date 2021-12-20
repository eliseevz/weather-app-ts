import React, {FC} from 'react';
import {IResponse} from "../types";
import {getIconURL} from "../config";
import {myCeil} from "../config"

interface ResultContentProps {
    data: IResponse | null
}


const ResultContent: FC<ResultContentProps> = ({data}) => {
    const imgURL = getIconURL(data?.weather[0]?.icon)
    return (
        <div>
            <h2>{data?.name}</h2>
            <div>
                <img src={imgURL}/>
            </div>
            <div className="fs-5 mb-2">
                <strong>{data?.weather[0].description}</strong> шо пизда
            </div>
            <div className="mb-2 fs-5">
                Температура: <strong>{myCeil(data?.main.temp)}°</strong>
            </div>
            <div>
                <span className="me-2 fs-7">
                    Минимальная: <strong>{myCeil(data?.main.temp_min)}°</strong>
                </span>
                <span>
                    Максимальная: <strong>{myCeil(data?.main.temp_max)}°</strong>
                </span>
            </div>
            <div></div>
        </div>
    );
};

export default ResultContent;
