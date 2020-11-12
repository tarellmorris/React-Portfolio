import React from 'react'
import {NavLink, NavLinkR} from './navbarElements'
import {useLocation} from 'react-router-dom'

export const NavLinkCondition = (props) => {
    const textShadowLightFont = "1px 1px 1px #2e2e3b"
    const textShadowDarkFont = "1px 1px 1px #ffffff"
    const darkFont = "#2e2e3b"
    const location = useLocation()
    const links = [
        {
            page: "Home"
        },
        {
            page: "About"
        },
        {
            page: "Projects"
        },
        {
            page: "Contact"
        },
    ]
    const returnToProjects = [
        {
            page: "Return to projects",
            to: "/projects"
        }
    ]
    const returnHome = [
        {
            page: "Return home",
            to: "/"
        }
    ]

    if (location.pathname === '/') {
        return (
            <>
                {links.map( (links, key) =>
                    <NavLink 
                    key={key}
                    to={links.page}
                    onClick={props.onClick}
                    smooth="easeInOutQuint"
                    duration={1000}
                    offset={-80}
                    fontcolor={props.isScrolled ? darkFont : "white"}
                    textshadow={props.isScrolled ? textShadowDarkFont : textShadowLightFont}
                    >
                            {links.page}
                    </NavLink>
                )}
            </>
        )
    } else if (location.pathname === '/projects' || location.pathname === '/about' || location.pathname === '/contact') {
        return (
            <>
                {returnHome.map( (links, key) => 
                    <NavLinkR
                    key={key}
                    to={links.to}
                    onClick={props.onClick}
                    fontcolor={props.isScrolled ? darkFont : "white"}
                    textshadow={props.isScrolled ? textShadowDarkFont : textShadowLightFont}
                    >
                        {links.page}
                    </NavLinkR>
                )}
            </>
        )
    } else {
        return (
            <>
                {returnToProjects.map( (links, key) => 
                    <NavLinkR
                    key={key}
                    to={links.to}
                    onClick={props.onClick}
                    fontcolor={props.isScrolled ? darkFont : "white"}
                    textshadow={props.isScrolled ? textShadowDarkFont : textShadowLightFont}
                    >
                        {links.page}
                    </NavLinkR>
                )}
            </>
        )
    }
}
