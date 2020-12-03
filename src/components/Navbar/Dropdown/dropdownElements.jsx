import styled from 'styled-components'
import {Background, Color, Accent} from '../../../styles/theme'

export const DropdownMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: auto;
    padding: 25px;
    top: 70px;
    box-shadow: -1px 7px 6px 0px #000000a6;
    background: ${Background};
    z-index: 9;
    transition: .25s ease;
    overflow: hidden;

    & ::selection {
        background: ${Accent};
        color: ${Color};
    }

    &.show {
        top: 80px;
        opacity: 1;
        visibility: visible;
    }

    &.hide {
        opacity: 0;
        visibility: hidden;
    }

    & a {
        color: ${Color};
        font-size: 1.3rem;
        user-select: none;
    }
`
