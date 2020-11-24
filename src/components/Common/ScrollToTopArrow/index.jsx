import React from 'react'
import { ArrowContainer } from './scrollToTopArrowElements'
import { FaArrowCircleUp } from 'react-icons/fa'
import {animateScroll as Scroll} from 'react-scroll'

const ScrollToTopArrow = (props) => {

    const toTop = () => {
        Scroll.scrollToTop({
            smooth: "easeInOutQuint",
            duration: 1000
        })
    }

    return (
        <ArrowContainer 
        onClick={toTop}
        className={(props.isScrolledArrow) ? 'visible' : ''}
        >
            <FaArrowCircleUp></FaArrowCircleUp>
        </ArrowContainer>
    )
}

export default ScrollToTopArrow
