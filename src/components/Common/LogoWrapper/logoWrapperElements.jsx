import styled from 'styled-components';

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Logo = styled.img`
    width: auto;
    height: 150px;
    margin: 0px 50px;

    @media screen and ( max-width: 700px ) {
        height: 80px;
        margin: 0px 15px;
    }
`