import React, { Component } from 'react'
import {Link as LinkR} from 'react-router-dom'

import {
    Nav, 
    NavContainer, 
    BrandWrapper, 
    Brand, 
    NavLinkWrapper, 
    MobileMenu,
} from './navbarElements'
import {NavLinkCondition} from './navLinkCondition'

import {FiMenu} from 'react-icons/fi'
import ScrollToTopArrow from '../Common/ScrollToTopArrow'

class Navbar extends Component {
    state = {
        isScrolled: false,
        isScrolledArrow: false
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 10
            const isTopArrow = window.scrollY < 500

            if (!isTop) {
                this.setState({ isScrolled: true })
            } else {
                this.setState({ isScrolled: false})
            }

            if (!isTopArrow) {
                this.setState({ isScrolledArrow: true})
            } else {
                this.setState({ isScrolledArrow: false})
            }
        })
    };

    componentWillUnmount() {
        window.removeEventListener('scroll');
    };

    render() {
        const boxShadow = "0px 4px 8px 1px #000000a6"
        const textShadowDarkFont = "1px 1px 1px #ffffff"
        const darkFont = "#2e2e3b"

        return (
            <Nav 
            bgcolor={this.state.isScrolled ? "white" : "transparent"}
            boxshadow={this.state.isScrolled ? boxShadow : "none"}
            className={(this.props.isOpen) ? 'hide' : 'show'}
            >
                <NavContainer>
                    <BrandWrapper>
                        
                            <Brand 
                            fontcolor={this.state.isScrolled ? darkFont : "white"}
                            textshadow={this.state.isScrolled ? textShadowDarkFont : 'none'}
                            >
                                <LinkR to="/">
                                    Tarell Morris
                                </LinkR>
                            </Brand>
                    </BrandWrapper>
                    <NavLinkWrapper>
                        <NavLinkCondition isScrolled={this.state.isScrolled}/>
                    </NavLinkWrapper>
                    <MobileMenu
                    fontcolor={this.state.isScrolled ? darkFont : "white"}
                    >
                        <FiMenu 
                        className="hamburger"
                        onClick={this.props.onClick} 
                        />
                    </MobileMenu>
                </NavContainer>
                <ScrollToTopArrow isScrolledArrow={this.state.isScrolledArrow} />
            </Nav>
        )
    }
}

export default Navbar;
