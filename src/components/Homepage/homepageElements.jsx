import styled from 'styled-components';

export const HomepageContainer = styled.div`

`
export const HeroImg = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 96vh;
    width: 100%;
    background: #2e2e3b;
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
        color: white;
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
    background: #3ee1a5;
    opacity: .6;
    box-shadow: 0px 4px 8px 1px #000000a6;

    @media screen and (min-height: 925px) {
        top: 73%;
    }

`
export const WelcomeMessage = styled.h1`
    color: white;
    font-size: 55px;
    margin-bottom: 100px;
    padding: 10px;
    // text-shadow: 1px 1px 1px #2e2e3b;
    user-select: none;
`