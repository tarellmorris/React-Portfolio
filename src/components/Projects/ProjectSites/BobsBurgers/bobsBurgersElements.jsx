import styled from 'styled-components';

export const BobsContainer = styled.div`
    margin: 0px;
    background: #222222;
    font-family: 'Raleway', sans-serif;
`
export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcdd60;
    width: 100%;
    padding: 25px;
`
export const BobsLogo = styled.img`
    width: 100%;
    height: auto;

    @media screen and (min-width: 850px) {
        width: 30%;
    }
`
export const Divider = styled.div`
    height: 10px;
    width: 100%;
    background: white;
    border-top: solid 1px black;
    border-bottom: solid 1px black;
    z-index: 5;
`
export const SlideShowContainer = styled.div`
    & div {
        background-position: center top;
        background-repeat: no-repeat;
        background-size: contain;
        opacity: 0.98;
        
    }
`
export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    overflow: hidden;
    padding: 25px;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    position: relative;

    &::after {
        content: "";
        height: 100%;
        width: 100%;
        background: ${props => props.bgColor};
        position: absolute;
        top: 0;
        left: 0;
    }
`
export const HeadText = styled.h2`
    text-shadow: -1px 1px 0 #000, 1px -1px 0 #000, -3px 1px 0 #000, -1px -1px 0 #000;
    color: white;
    text-transform: uppercase;
    font-variant: small-caps;
    letter-spacing: 2px;
    font-size: ${props => props.fontSize};
    font-weight: 800;
    font-family: 'Oswald', sans-serif;
    margin: 10px;
    text-align: center;
    z-index: 5;
`
export const Text = styled.div`
    color: black;
    font-size: 1.1em;
    margin: 10px 0;
    max-width: 90%;
    z-index: 5;
    text-align: left;
`
export const ProfilesWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 5;

    & .wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 125px;
        margin: 0 5px;

        & p {
            display: none;
        }

        @media screen and (min-width: 1100px) {
            width: 175px;
        }
    }

    & .maximized {
        position: absolute;
        width: 500%;
        height: 500%;
        transform: scale(1.2);
        background: #000000ee;
        flex-direction: row;  
        padding: 25px;
        top: -215%;
        left: -200%;
        z-index: 6;

        & p {
            display: block;
            color: white;
            font-size: 1.1rem;
            max-width: 300px;
            margin: 15px;
        }

        @media screen and (max-width: 815px) {
            flex-direction: column;

            & p {
                font-size: .8em;
            }
        }
    }
`
export const PortraitContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    position: relative;
    overflow: hidden;

    &::after {
        content: "";
        height: 100%;
        width: 100%;
        background: #8eb446e8;
        position: absolute;
        opacity: 0.9;
        top: 0;
        left: 0;
    }
`
export const Portrait = styled.img`
    width: 125px;
    height: 200px;
    background: white;
    border: 2px solid black;
    border-radius: 25px;
    object-fit: cover;
    object-position: top;
    transition: .25s ease;

    @media screen and (min-width: 1100px) {
        height: 250px;
        width: 150px;
    }

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
`
export const Footer = styled.div`
    display: flex;
    justify-content: center;
    padding: 25px;
    background: #fcdd60;

    & div {
        font-size: 16px;
    }
`