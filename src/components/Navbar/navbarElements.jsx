import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'
import {Background, Color, Accent} from '../../styles/theme'

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 10;
    height: 80px;
    width: 100%;
    background: ${Background};
    box-shadow: 0px 4px 8px 1px #000000a6;
    font-size: 1rem;
    transition: .25s ease;
`
export const NavContainer = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    padding: 0 25px;
`
export const BrandWrapper = styled.div`
    display: flex;
    align-items: center;
`
export const Brand = styled.div`
    & a {
        font-size: 1.6rem;
        color: white;
        font-weight: 400;
        user-select: none;
        color: ${Color};

        &:hover {
            cursor: pointer;
            color: ${Accent};
        }
    }
`
export const NavLinkWrapper = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 960px) {
        display: none
    }
`
export const NavLink = styled(LinkScroll)`
        padding: 23.5px 0;
        margin: 0 15px;
        font-size: 1.1rem;
        cursor: pointer;
        color: ${Color};
        font-weight: 400;
        border-bottom: 5px transparent solid;
        user-select: none;

        &:hover{
            border-bottom: 5px ${Color} solid;
        }
`
export const NavLinkR = styled(LinkR)`
        padding: 23.5px 0;
        margin: 0 15px;
        font-size: 1.1rem;
        cursor: pointer;
        color: ${Color};
        font-weight: 400;
        border-bottom: 5px transparent solid;
        user-select: none;

        &:hover{
            border-bottom: 5px ${Color} solid;
        }

        &:visited {
            color: ${Color};
            user-select: none;
        
`
export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;
    position: absolute;
    color: ${Color};
    position: relative;
    user-select: none;

    & .hamburger {
        font-size: 40px;
        cursor: pointer;
    }

    & .cross {
        font-size: 26px;
        cursor: pointer;
    }
`
