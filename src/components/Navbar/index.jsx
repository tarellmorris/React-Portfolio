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

class Navbar extends Component {
    state = {
        isScrolled: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 50

            if (!isTop) {
                this.setState({ isScrolled: true })
            } else {
                this.setState({ isScrolled: false})
            }
        })
    };

    // componentWillUnmount() {
    //     window.removeEventListener('scroll');
    // };

    render() {
        const boxShadow = "0px 2px 9px 1px #000000a6"
        const textShadowLightFont = "1px 1px 1px #2e2e3b"
        const textShadowDarkFont = "1px 1px 1px #ffffff"
        const darkFont = "#2e2e3b"

        return (
            <Nav 
            bgcolor={this.state.isScrolled ? "white" : "transparent"}
            boxshadow={this.state.isScrolled ? boxShadow : "none"}
            >
                <NavContainer>
                    <BrandWrapper>
                        
                            <Brand 
                            fontcolor={this.state.isScrolled ? darkFont : "white"}
                            textshadow={this.state.isScrolled ? textShadowDarkFont : textShadowLightFont}
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
                    textshadow={this.state.isScrolled ? textShadowDarkFont : textShadowLightFont}
                    >
                        <FiMenu 
                        className="hamburger"
                        onClick={this.props.onClick} 
                        />
                    </MobileMenu>
                </NavContainer>
            </Nav>
        )
    }
}

export default Navbar;
