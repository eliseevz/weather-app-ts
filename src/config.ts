export const getIconURL = (id: string | undefined) =>
    `http://openweathermap.org/img/wn/${id}@4x.png`

export const getURL = (name: string) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&lang=ru&units=Metric&appid=91904eca8f95f6fe668e89cf40846e50`

export const myCeil = (x: number | undefined) => {
    if (x === undefined) {
        return x
    }
    return Math.ceil(x)
}
