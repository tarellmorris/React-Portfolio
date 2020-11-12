import styled from 'styled-components';

const transition = '.75s ease';


export const CardImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    width: 350px;
    text-align: center;
    position: relative;
    transition: ${transition};
    transform-style: preserve-3d;
`
export const CardHead = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 350px;
`
export const CardTitle = styled.h2`
    font-size: 25px;
    color: white;
    user-select: none;
    // text-shadow: 1px 1px 1px #2e2e3b;
    // transition: ${transition};
`
export const Frontside = styled.div`
    position: absolute;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => props.thumb});
    width: 350px;
    height: 350px;
    transform: translateZ(0px);
    opacity: .9;
    backface-visibility: hidden;
`
export const Backside = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 350px;
    height: 350px;
    backface-visibility: hidden;
    transform: translateZ(0px);
    transform: rotateY(180deg);
    background: white;
    padding: 25px;
    color: #2e2e3b;
    user-select: none;
`
export const CardContainer = styled.div`
    width: 350px;
    height: 450px;
    background: #222222;
    box-shadow: 0px 4px 18px 0px #000000a6;
    overflow: hidden;

    &:hover {
        cursor: pointer;

        & ${CardTitle} {
            color: #e6b82f;
        }

        & ${CardImgWrapper} {
            transform: rotateY(.5turn);
        }
    }

    // @media screen and (min-width: 960.5px) {
    //     &:hover ${CardImgWrapper} {
    //         transform: rotateY(.5turn);
    //     }
    // }
`