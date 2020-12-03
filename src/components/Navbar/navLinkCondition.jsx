import React from 'react'
import {NavLink, NavLinkR} from './navbarElements'
import {useLocation} from 'react-router-dom'

export const NavLinkCondition = (props) => {

    const location = useLocation()
    const links = [
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
                    className={(props.isScrolled) ? 'scrolled' : ''}
                    smooth="easeInOutQuint"
                    duration={1000}
                    offset={-80}
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
                    className={(props.isScrolled) ? 'scrolled' : ''}
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
                    className={(props.isScrolled) ? 'scrolled' : ''}
                    >
                        {links.page}
                    </NavLinkR>
                )}
            </>
        )
    }
}
