import React, {FC} from 'react';
import {IResponse} from "../types";
import Loader from "./Loader/Loader";
import skyImg from "../assets/sky2.png"
import ResultContent from "./ResultContent";

interface ResultProps {
    data: IResponse | null
    loading: boolean
}

const Result: FC<ResultProps> = ({data, loading}) => {

    if (!data && !loading) {
        return <div className="d-flex flex-column align-items-center justify-content-center mt-5">
            Пока ничего не найдено
            <img className="mt-4" style={{width: 150}} src={skyImg} alt=""/>
        </div>
    }
    return (
        <div style={{height: "80%"}}>
            {
                loading
                ? <Loader/>
                : <ResultContent data={data} />
            }
        </div>
    );
};

export default Result;
