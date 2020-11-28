import styled from 'styled-components';

export const AboutWrapper = styled.div`

`
export const ImgDiv = styled.div`
    min-width: 350px;
    min-height: 350px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: ${props => props.opac};
    box-shadow: 0px 4px 8px 1px #000000a6;
    overflow: hidden;
    transition: transform .5s ease, opacity .5s ease;

    &.visible {
        background-image: url(${props => props.imgUrl});
        opacity: 1;
        transform: none;
    }
    &.hidden {
        opacity: 0;
    }
    &.right {
        transform: translateX(25px);
    }
    &.left {
        transform: translateX(-25px);
    }
`
export const TextWrapper = styled.div`
    min-width: 300px;
    max-width: 800px;
    justify-self: center;
`
export const PBlock = styled.p`
    padding-bottom: 15px;
`
export const GridWrap = styled.div`
    display: grid;
    grid-template-columns: ${props => props.template};
    align-items: normal;
    grid-column-gap: 4.5em;
    padding: 0px 150px;
    margin: 50px 0;

    @media screen and ( max-width: 775px ) {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr
        grid-column-gap: 0;
        grid-row-gap: 2em;
        padding: 0px;

        ${ImgDiv} {
            grid-row: 1;
            max-width: 350px;
            height: auto;
            justify-self: center;

            &.bottom {
                transform: translateY(25px);
            }
        }

        ${TextWrapper} {
            padding: 10px;
        }
    }
`



