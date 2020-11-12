import styled from 'styled-components';

export const InfographicContainer = styled.div`
    padding: 0px;
    font-family: Rubik, sans-serif;

    & h1 {
        font-weight: 600;
        font-size: 2rem;
        font-family: Rubik, sans-serif;
    }
    & h2 {
        font-weight: 500;
        font-size: 1.5rem;
        font-family: Rubik, sans-serif;
    }
    & h3 {
        font-weight: 500;
        font-size: 1.5rem;
        font-family: Rubik, sans-serif;
    }
    & p {
        font-family: Rubik, sans-serif;
    }
`
export const InfoHeader = styled.div`
    background-image: linear-gradient(to right, #4C1B94, #404897, #3572B1);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 25px;
`
export const ProContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 25px;
    background-color: #fafafa;
    text-align: center;

    & h2 {
        color: #404897;
        font-size: 1.5rem;
        margin-bottom: 25px;
        text-align: left;
    }
`
export const Profiles = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: auto;
    width: 100%;
    justify-content: center;
`
export const PictureWrapper = styled.div`
    position: relative;
    height: 160px;
    width: 160px;
`
export const Gradient = styled.div`
    position: absolute;
    border: transparent;
    background: linear-gradient(to right, #4C1B94, #404897, #3572B1, #1ED5D0);
    border-radius: 150px;
    top: 0;
    left: 0;
    height: 160px;
    width: 160px;
    z-index: 2;
`
export const ProPicture = styled.img`
    position: absolute;
    z-index: 3;
    top: 5px;
    left: 5px;
    height: 150px;
    width: 150px;
`
export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 15px;
    max-width: 160px;

    & p {
        color: #12A6A1;
        font-weight: 600;
        font-size: 1.3rem;
        margin-bottom: 10px;
    }

    &:hover {
        cursor: pointer;
        
        & ${Gradient} {
            background: #4C1B94;
        }

        & p {
            color: #4C1B94;
        }
    }
    
    @media screen and (max-width: 620px) {
        transform: scale(0.8);
        margin: 0;
    }
`
export const BlockContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 100%;
    background-color: ${props => props.blockColor};
`
export const ProBlock = styled.div`
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: url(${props => props.block});
`
export const LogoBanner = styled.div`
    width: 100%;
    background-color: white;
    padding: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    background-color: #fafafa;

    & svg {
        width: 20%;
        padding: 5px;

        & .outside_dotsGroup, .healthcareGroup {
            fill: #01C2F3;    
        } 
        & .definitiveGroup, .inside_dotsGroup {
            fill: #4C1B94;
        }

        @media screen and (max-width: 820px) {
            width: 40%;
            padding: 0;
        }
    }
`
export const GradientBorder = styled.div`
    height: 10px;
    width: 100%;
    background-image: linear-gradient(to right, #4C1B94, #404897, #3572B1, #1ED5D0);
`