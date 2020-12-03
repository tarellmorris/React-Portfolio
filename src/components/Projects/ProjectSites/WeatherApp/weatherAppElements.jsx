import styled from 'styled-components'
import {Color, Accent} from '../../../../styles/theme'

export const WeatherContainer = styled.div`
    & ::selection {
        background: ${Accent};
        color: ${Color};
    }

    & .weatherContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(0deg, #e8cbc0 0%,#636fa4 100% );
    color: white;
    padding: 25px;
    min-height: 80vh;
    opacity: .8;
    
    & h1 {
        font-size: 2.5rem;
        text-shadow: 2px 1px 1px #7A7A7A;
        margin: 50px 0;
        text-align: center;
    }

    & h2 {
        font-size: 1.2rem;
        margin-bottom: 10px;
        text-shadow: 2px 1px 1px #7A7A7A;
    }

    &.cold {
        background: linear-gradient(0deg,#1c92d2 0%,#a3c9d2 100%);
        opacity: .9;
    }

    &.warm {
        background: linear-gradient(0deg, #ffafbd 0%,#ffc3a0 100%);
        opacity: 1;
    }
`
export const WeatherSearch = styled.input`
    min-width: 300px;
    background: rgba(220, 220, 220, .7);
    outline: none;
    border: 2px solid #7A7A7A;
    border-radius: 12px;
    padding: 10px;
    margin-bottom: 50px;
`
export const DateDisplay = styled.div`
    text-align: center;
    font-size: 1rem;
    text-shadow: 2px 1px 1px #7A7A7A;
`
export const LocationDisplay = styled.div`
    text-align: center;
    font-size: 1.5rem;
    text-shadow: 2px 1px 1px #7A7A7A;
`
export const TempDisplay = styled.div`
    width: fit-content;
    padding: 10px;
    background: rgba(220, 220, 220, .7);
    border-radius: 12px;
    margin: 10px 0px;
    box-shadow: 2px 1px 1px 0px #7A7A7A;

    & div {
        text-align: center;
        font-size: 3rem;
        text-shadow: 2px 1px 1px #7A7A7A;
    }
`
export const WeatherDisplay = styled.div`
    text-align: center;
    font-size: 1.5rem;
    text-shadow: 2px 1px 1px #7A7A7A;
    text-transform: capitalize;
`