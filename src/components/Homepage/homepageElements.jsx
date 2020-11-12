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

    @media screen and (min-width: 960.5px) {
        background-attachment: fixed;
    }
`
export const TextContainer = styled.div`
    text-align: center
`
export const WelcomeMessage = styled.h1`
    color: white;
    font-size: 55px;
    padding: 10px;
    text-shadow: 1px 1px 1px #2e2e3b;
    user-select: none;
`