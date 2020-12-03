import styled from 'styled-components'
import {Accent, Background, Color} from '../../styles/theme'

export const HomepageContainer = styled.div`
    & ::selection {
        background: ${Accent};
        color: ${Color};
    }
`
export const HeroImg = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: ${Background};
    background-image: url(${props => props.bgImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    overflow: hidden;

    @media screen and (min-width: 960.5px) {
        background-attachment: fixed;
    }
`
export const TextContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;

    & #downArrow {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 65%;
        left: 0;
        right: 0;
        color: ${Background};
        font-size: 6.5rem;
        opacity: .9;
        z-index: 2;

        @media screen and (min-height: 925px) {
            top: 75%;
        }
    }
`
export const Banner = styled.div`
    content: '';
    position: absolute;
    top: 63%;
    height: 150px;
    width: 100vw;
    background: ${Accent};
    opacity: .6;
    box-shadow: 0px 4px 8px 1px #000000a6;

    @media screen and (min-height: 925px) {
        top: 73%;
    }

`
export const WelcomeMessage = styled.h1`
    color: white;
    text-shadow: 1px 1px 2px rgba(86, 86, 86, 1);    
    font-size: 55px;
    margin-bottom: 100px;
    padding: 10px;
    user-select: none;
`