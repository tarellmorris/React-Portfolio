import React, {useEffect, useState} from 'react'
import {Link as LinkR} from 'react-router-dom'
import {useClickAway} from 'react-use'

import {
    Nav, 
    NavContainer, 
    BrandWrapper, 
    Brand, 
    IconWrapper,
} from './navbarElements'

import {FiMenu} from 'react-icons/fi'
import {ImCross} from 'react-icons/im'
import ScrollToTopArrow from '../Common/ScrollToTopArrow'
import Dropdown from './Dropdown'
import ThemeToggle from './ThemeToggle'

const Navbar = props =>  {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isScrolledArrow, setIsScrolledArrow] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const ref = React.useRef()

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleClickAway = () => {
        setIsOpen(false)
    }

    useEffect( () => {
        const handleScroll = () => {
            const isTop = window.scrollY < 10
            const isTopArrow = window.scrollY < 500

            if (!isTop) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }

            if (!isTopArrow) {
                setIsScrolledArrow(true)
            } else {
                setIsScrolledArrow(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useClickAway(ref, () => {
        handleClickAway()
      })

    return (
        <>
            <Nav ref={ref}>
                <NavContainer>
                    <BrandWrapper>
                            <Brand>
                                <LinkR to="/">
                                    Tarell Morris
                                </LinkR>
                            </Brand>
                    </BrandWrapper>
                    <IconWrapper>
                        <ThemeToggle 
                        darkMode={props.darkMode} 
                        setDarkMode={props.setDarkMode}
                        />

                        { 
                            (!isOpen) 
                            ? <FiMenu className="hamburger" onClick={handleClick} /> 
                            : <ImCross className="cross" onClick={handleClick} />
                        }

                        <Dropdown 
                        isOpen={isOpen} 
                        onClick={handleClick} 
                        isScrolled={isScrolled} 
                        />
                    </IconWrapper>
                </NavContainer>
            </Nav>
            <ScrollToTopArrow isScrolledArrow={isScrolledArrow} />
        </>
    )
}

export default Navbar;
