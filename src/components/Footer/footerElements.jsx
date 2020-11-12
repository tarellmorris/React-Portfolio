import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';


export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #222222;
    width: 100%;
    padding: 50px;
    text-align: center;
`
export const FootNavWrapper = styled.ul`
    display: flex;
    padding: 0px;
    list-style: none;
`
export const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FootLink = styled(LinkR)`
    margin: 15px;
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-weight: 300; 

    &:hover {
        text-decoration: underline;
        cursor: pointer ;
    } 

    &:visited {
        color: white;
    }
`
export const FootSocialLink = styled.div`
    font-size: 16px;
    font-weight: 300;
    margin: 15px;
    color: white;
    
    & a {
        display: flex;
        font-size: 16px;
        font-weight: 300;
        color: white;

        & > svg {
            margin-right: 5px;
        }
    }

    &:hover {
        text-decoration: underline;
        cursor: pointer ;
    } 

`
export const CopyInfo = styled.div`
    font-size: 13px;
    font-weight: 300;
    margin: 15px;
    color: white;
`