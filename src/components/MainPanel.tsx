import React, {FC, useState} from 'react';
import Form from "./Form";
import Result from "./Result";
import axios, {AxiosError} from "axios"
import {getURL} from "../config";
import {IResponse} from "../types";

const MainPanel: FC = () => {

    const [data, setData] = useState<IResponse | null>(null)
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const fetchData = async (cityName: string) => {
        setError("")
        setData(null)
        setLoading(true)
        const url =  getURL(cityName)
        try {
            const response = await axios.get(url)
            console.log(response.data)
            setData(response.data)
            setLoading(false)
        } catch (e: any | AxiosError | Error) {
            console.log(e.response.data.message)
            setError(e.response.data.message)
            setLoading(false)
        }

    }

    return (
        <div className="mainPanel">
            <Form error={error} submit={fetchData}/>
            <Result loading={loading} data={data}/>
        </div>
    );
};

export default MainPanel;
