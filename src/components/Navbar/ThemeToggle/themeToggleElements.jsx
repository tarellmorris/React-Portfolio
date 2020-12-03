import styled from 'styled-components'
import {Color, Accent} from '../../../styles/theme'

export const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    & .oval {
        background: ${Accent};
        border-radius: 25px;
        width: 55px;
        height: 30px;
        position: relative;
        cursor: pointer;

        & .sun {
            position: absolute;
            color: ${Color};
            left: 10%;
            top: 20%;
        }

        & .moon {
            position: absolute;
            color: ${Color};
            right: 10%;
            top: 20%;
        }

        & .circle {
            position: absolute;
            top: 2.5%;
            height: 95%;
            width: 50%;
            border-radius: 50px;
            background: white;
            box-shadow: 0px 0px 3px 0px #000000a6;
            transition: .25s ease;

            &.dark {
                left: 0;
                right: 100%;
            }

            &.light {
                right: 0;
                left: 50%;
            }
        }
    }

`