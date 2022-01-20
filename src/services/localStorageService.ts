const HISTORY_KEY = "history"
const FAVORITE_KEY = "favorite"

const setHistory = (data: string[]) => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(data))
}

const addFavorite = (data: string[]) => {
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(data))
}

const getFavorite = () => {
    const data = localStorage.getItem(FAVORITE_KEY)
    if (data !== null) {
        return JSON.parse(data)
    }
    return null
}

const getHistory = () => {
    const data = localStorage.getItem(HISTORY_KEY)
    if (data !== null) {
        return JSON.parse(data)
    }
    return null
}

export const localStorageService = {
    setHistory,
    addFavorite,
    getHistory,
    getFavorite
}