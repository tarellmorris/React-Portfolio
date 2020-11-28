import styled from 'styled-components'

export const ArrowContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 25px;
    transition: .25s ease;
    transform: translateY(50px);
    opacity: 0;
    visibility: hidden;

    &.visible {
        transform: none;
        opacity: .9;
        visibility: visible;
    }

    & svg {
        font-size: 4.5rem;
        color: #3ee1a5;
        opacity: .7;
        cursor: pointer;
        filter: drop-shadow(0px 0px 1px #000000a6);
        transition: .25s ease;

        &:hover {
            transform: scale(1.03);
            opacity: .9;
        }

        &:active {
            transform: scale(.95);
        }
    }
`