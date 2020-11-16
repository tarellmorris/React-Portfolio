import styled from 'styled-components';

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${props => props.height};
    background-image: url('${props => props.bgImg}');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

    & svg {
        font-size: 8rem;
        color: #3ee1a5;
        opacity: .7;
        margin: 0 25px;
    }

    @media screen and (min-width: 960.5px) {
        background-attachment: fixed;
    }
`