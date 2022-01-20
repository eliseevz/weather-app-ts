import React, {useContext, useState, FC} from "react"
import {IResponse} from "../types";
import {getURL} from "../config";
import axios, {AxiosError} from "axios";

interface IWeatherProvider {
    children: React.ReactElement<any, any> | React.ReactElement<any, any>[] | null
}

interface IValueProvider {
    data?: IResponse
    error?: string
    loading?: boolean
}

const WeatherContext = React.createContext<IValueProvider | any>({})

export const useWeather = () =>
    useContext(WeatherContext)


export const WeatherProvider: FC<IWeatherProvider> = ({children}) => {

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
            setData(response.data)
            setLoading(false)
        } catch (e: any | AxiosError | Error) {
            setError(e.response.data.message)
            setLoading(false)
        }

    }


    return <WeatherContext.Provider value={{data, error, loading, fetchData}}>
        {
            children
        }
    </WeatherContext.Provider>
}

