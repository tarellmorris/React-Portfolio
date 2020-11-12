import styled from 'styled-components';

export const DropdownMenu = styled.div`
    display: ${props => props.display};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    padding: 80px 25px 25px;
    top: 0;
    right: 0;
    background: white;
    z-index: 20;
    transition: .5s ease;
    box-shadow: 0px 2px 9px 1px #000000a6;

    & .cross {
        font-size: 26px;
        color: #2e2e3b;
        cursor: pointer;
        position: absolute;
        top: 26px;
        right: 35px;
    }

    & .brand {
        position: absolute;
        top: 20px;
        left: 25px;
    }

    & a {
        color: #2e2e3b;
        user-select: none;
    }
`
