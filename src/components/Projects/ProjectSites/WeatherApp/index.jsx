import React, {useState} from 'react'
import FixedImgBanner from '../../../Common/FixedImgBanner'
import {
    WeatherContainer,
    AppWrapper,
    WeatherSearch,
    DateDisplay,
    LocationDisplay,
    TempDisplay,
    WeatherDisplay
} from './weatherAppElements'
import bgImg from '../../../../assets/backgrounds/web-dev-bg2.webp'

const api = {
    key: 'd176e5022318ec17acde3ea69ddad0af',
    base: 'https://api.openweathermap.org/data/2.5/'
}

export const WeatherApp = () => {
    const [location, setLocation] = useState('')
    const [weather, setWeather] = useState({})

    const search = e => {
        if (e.key === "Enter") {
            fetch(`${api.base}weather?q=${location}&units=imperial&appid=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result)
                    setLocation('')
                })
        }
    }

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        let day = days[d.getDay()]
        let date = d.getDate()
        let month = months[d.getMonth()]
        let year = d.getFullYear()

        return `${day} ${date}, ${month} ${year}`
    }

    return (
        <WeatherContainer>
            <FixedImgBanner bgImg={bgImg} height="170px"/>
            <AppWrapper className={(typeof weather.main != "undefined") ? ((weather.main.temp > 40) ? "warm" : "cold") : ''}>

                <h1>Weather Search</h1>
                <h2>Enter a city name</h2>

                <WeatherSearch 
                placeholder="Search by city (ex. Hopkinton)" 
                type="text"
                onChange={e => setLocation(e.target.value)}
                value={location}
                onKeyPress={search}
                />

                {(typeof weather.main != "undefined") ? (
                    <div className="weatherContainer">
                        <LocationDisplay>{weather.name}, {weather.sys.country}</LocationDisplay>
                        <DateDisplay>{dateBuilder( new Date() )}</DateDisplay>
                        <TempDisplay>
                            <div>
                                {Math.round(weather.main.temp)}<sup>&#176;F</sup> 
                            </div>
                        </TempDisplay>
                        <WeatherDisplay>
                            {weather.weather[0].description}
                        </WeatherDisplay>
                    </div>
                ) : ('')}

            </AppWrapper>
            <FixedImgBanner bgImg={bgImg} height="250px"/>
        </WeatherContainer>
    )
}
