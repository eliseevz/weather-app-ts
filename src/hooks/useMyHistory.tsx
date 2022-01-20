import React, {useContext, useState, FC, useEffect} from "react"
import {useWeather} from "./useWeather";
import {localStorageService} from "../services/localStorageService";

interface ISHistoryProvider {
    children: React.ReactElement<any, any> | React.ReactElement<any, any>[] | null
}

interface IValueProvider {
    history: string[]
    historyChangeHandler: (name: string) => void
}

const SHistoryContext = React.createContext<IValueProvider | any>({})

export const useSHistory = () =>
    useContext(SHistoryContext)


export const SHistoryProvider: FC<ISHistoryProvider> = ({children}) => {

    const [history, setHistory] = useState<string[]>([])
    const {data} = useWeather()

    useEffect(() => {
        const historyLS = localStorageService.getHistory()
        setHistory(historyLS)
    }, [])

    useEffect(() => {
        if (data !== null) {
            localStorageService.setHistory(history)
        }
    }, [data])

    const historyChangeHandler = (name: string) => {
        if (history[0] === name) {
            return
        }
        if (history.includes(name)) {
            const newState = history.filter(city => city !== name)
            newState.reverse().push(name)
            setHistory(newState)
            return
        }
        if (history.length < 6 && data !== undefined) {
            setHistory(prevState => [...prevState, name])
            return
        }
        if (history.length === 6 && data !== undefined) {
            setHistory(prevState => {
                const newState = [...prevState]
                newState.shift()
                newState.push(name)
                return newState
            })
            return
        }
    }

    const clearHistory = () => {
        setHistory([])
        localStorageService.setHistory([])
    }

    return <SHistoryContext.Provider value={{history, historyChangeHandler, clearHistory}}>
        {
            children
        }
    </SHistoryContext.Provider>
}

