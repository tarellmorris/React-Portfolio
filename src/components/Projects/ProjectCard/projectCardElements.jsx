import styled from 'styled-components';
import {Accent} from '../../../styles/theme'

export const CardImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    width: 350px;
    text-align: center;
    position: relative;
    transition: .5s ease;
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
`
export const Frontside = styled.div`
    position: absolute;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 350px;
    height: 350px;
    transform: translateZ(0px);
    opacity: .9;
    backface-visibility: hidden;

    &.visible {
        background-image: url(${props => props.thumb});
    }
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
    background: ${Accent};
    padding: 25px;
    color: #222222;
    user-select: none;
`
export const CardContainer = styled.div`
    width: 350px;
    height: 450px;
    background: #222222;
    box-shadow: 0px 4px 8px 1px #000000a6;
    overflow: hidden;
    transition: .25s ease;

    &:hover {
        cursor: pointer;

        & ${CardTitle} {
            color: ${Accent};
        }

        & ${CardImgWrapper} {
            transform: rotateY(.5turn);
        }
    }

    &.visible {
        opacity: 1;
        transform: none;
    }
    &.hidden {
        opacity: 0;
    }
    &.bottom {
        transform: translateY(25px);
    }
`