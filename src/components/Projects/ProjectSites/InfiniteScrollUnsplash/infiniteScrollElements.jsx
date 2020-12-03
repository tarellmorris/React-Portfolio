import styled from 'styled-components'
import {Color, Accent} from '../../../../styles/theme'

export const InfiniteScrollContainer = styled.div`
    width: 100%

    & ::selection {
        background: ${Accent};
        color: ${Color};
    }
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%
    padding: 25px;
    background: #ad578d;

    & h1 {
        font-size: 3rem;
        color: white;
        margin: 15px;
        font-family: 'Kaushan Script', cursive;
        text-align: center;
    }
`
export const ScrollContainer = styled.div`
    & * {
        font-weight: bold;
        font-family: 'Open Sans', sans-serif;
        text-align: center;
    }

    & p {
        padding: 25px;
    }

    & .scroll {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 15px;

        & img {
            object-fit: cover;
        }
    }
`
export const UnsplashDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    content: '${props => props.description}';
    text-transform: capitalize;
    height: 0px;
    width: 100%;
    padding: 5px;
    top: 0;
    left: 0;
    font-size: 20px;
    background: rgb(255,255,255,.9);
    color: #ad578d;
    position: absolute;
    opacity: 0;
    z-index: 0;
    transition: .25s ease;
    user-select: none;

    & a {
        color: #ad578d;
        text-decoration: underline;
        margin: 0 5px;
    }
`
export const UnsplashImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    user-select: none;
`
export const ImageContainer = styled.div`
    position: relative;
    height: 350px;
    width: 350px;
    overflow: hidden;
    margin: 5px;
    border: solid 3px #ad578d;
    padding: 0;

    &:hover {
    
        & ${UnsplashDetails} {
        opacity: 1;
        height: 100%;
        z-index: 2;
        }
    }
`
export const LoadAnimation = styled.div`
    &.lds-facebook {
        display: block;
        position: relative;
        width: 80px;
        height: 80px;
        margin: 0 100px;
    }

    &.lds-facebook div {
        display: inline-block;
        position: absolute;
        left: 8px;
        width: 16px;
        background: #ad578d;
        animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }

    &.lds-facebook div:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
    }

    &.lds-facebook div:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
    }
    
    &.lds-facebook div:nth-child(3) {
        left: 56px;
        animation-delay: 0;
    }

    @keyframes lds-facebook {
        0% {
        top: 8px;
        height: 64px;
        }
        50%, 100% {
        top: 24px;
        height: 32px;
        }
`