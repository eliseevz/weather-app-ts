export interface IWeather {
    id: number
    description: string
    icon: string
}

export interface IMain {
    temp: number
    temp_max: number
    temp_min: number
}

export interface IResponse {
    name: string
    weather: IWeather[]
    main: IMain
}