import styled from 'styled-components';
import bgImg from "../../assets/backgrounds/web-dev-bg1.png";

export const HomepageContainer = styled.div`

`
export const HeroImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 96vh;
    width: 100%;
    background: #2e2e3b;
    background-image: url(${bgImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    overfill: hidden;

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
        top: 75%;
        left: 0;
        right: 0;
        color: white;
        font-size: 6.5rem;
        opacity: .9;
    }

    @media screen and (min-height: 820px) {
        & #downArrow {
            top: 85%;
        }
    }
`
export const WelcomeMessage = styled.h1`
    color: white;
    font-size: 55px;
    padding: 10px;
    text-shadow: 1px 1px 1px #2e2e3b;
    user-select: none;
`