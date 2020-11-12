import styled from 'styled-components';

export const RPSContainer = styled.div`
    background: #1a1a1a;
    color: white;
`
export const Header = styled.div`
    background: white;
    width: 100%;
    text-align: center;

    & h1 {
        text-align: center;
        padding: 50px;
        font-size: 2.5em;
        color: #25023e;
    }
`
export const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 780px;
    padding: 50px;
    background: #1a1a1a;
    color: white;
    user-select: none;
`
export const ScoreCard = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid;
    border-radius: 50px;
    width: 220px;
    height: 110px;
    padding: 15px;
    font-size: 3em;
    text-align: center;
    margin: 25px;
`
export const User = styled.div`
    position: absolute;
    background: #bd68fb;
    padding: 5px;
    font-size: 0.4em;
    border: transparent;
    border-radius: 4px;
    top: 20%;
    left: -25%;
`
export const CPU = styled.div`
    position: absolute;
    background: #bd68fb;
    padding: 5px;
    font-size: 0.4em;
    border: transparent;
    border-radius: 4px;
    top: 20%;
    right: -25%;
    transition: .25s ease;
`
export const Score = styled.div`
    text-align: center;
    font-size: 50px;

    & span {
        font-size: 50px;
    }
`
export const ResultDisplay = styled.div`
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 15px;
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 15px;

    & #rock {
        background: #12a0d3;
    }
    & #paper {
        background: #b8c82f;
    }
    & #scissors {
        background: #d43d8c;
    }

    & div {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid;
        border-radius: 50%;
        height: 120px;
        width: 120px;
        margin: 5px;

        & svg {
            font-size: 4em;
        }

        &:hover {
            color: #25023e;
            cursor: pointer;
        }

        &:active {
            transform: scale(.99);
        }
    }
`
export const Instructions = styled.div`
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 10px;

    & span {
        font-size: 1.7rem;
        font-weight: bold;
    }
`
export const ActionMessage = styled.div`
    text-align: center;
    font-size: 1.7em;
    margin-bottom: 10;
`
export const GameOver = styled.div`
    user-select: none;
`
export const RestartButton = styled.button`
    padding: 5px;
    background: #bd68fb;
    border: 3px solid;
    border-radius: 8px;
    color: white;
    font-size: 28px;
    outline: none;

    &:hover {
        background: #25023e;
        cursor: pointer;
    }

    &:active {
        transform: scale(.99);
    }
`
