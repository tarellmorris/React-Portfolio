import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'


export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 10;
    height: 80px;
    width: 100%;
    padding: 0px 25px;
    z-index: 10;
    background: ${props => props.bgcolor};
    font-size: 1rem;
    box-shadow: ${props => props.boxshadow};
    transition: .25s ease;

    &.show {
        opacity: 1;
        visibility: visible;
    }

    &.hide {
        top: -80px;
        opacity: 0;
        visibility: hidden;
    }
`
export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    max-width: 1100px;
    z-index: 1;
`
export const BrandWrapper = styled.div`
    display: flex;
    align-items: center;
`
export const Brand = styled.div`
    & a {
        font-size: 1.6rem;
        color: ${props => props.fontcolor};
        font-weight: 400;
        text-shadow: ${props => props.textshadow};
        user-select: none;

        &:hover {
            cursor: pointer;
            color: #3ee1a5;
            text-shadow: ${props => props.textshadow};
        }
    }

`
export const Subhead = styled.h2`
    color: white;
    font-size: 18px;
    font-weight: 300;
    margin-left: 1px;
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
        color: ${props => props.fontcolor};
        font-weight: 400;
        border-bottom: 5px transparent solid;
        user-select: none;

        &:hover{
            border-bottom: 5px ${props => props.fontcolor} solid;
        }
`
export const NavLinkR = styled(LinkR)`
        padding: 23.5px 0;
        margin: 0 15px;
        font-size: 1.1rem;
        cursor: pointer;
        color: ${props => props.fontcolor};
        font-weight: 400;
        border-bottom: 5px transparent solid;
        user-select: none;

        &:hover{
            border-bottom: 5px ${props => props.fontcolor} solid;
        }

        &:visited {
            color: ${props => props.fontcolor};
            user-select: none;
`
export const MobileMenu = styled.div`
    display: none;
    position: relative;
    user-select: none;

    & .hamburger {
        font-size: 40px;
    }

    @media screen and (max-width: 960px) {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: ${props => props.fontcolor};
    }
`
