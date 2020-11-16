import React, {useEffect} from 'react';
import FixedImgBanner from '../../components/Common/FixedImgBanner/'
import ProjectsContainer from '../../components/Projects/'
import AboutContainer from '../../components/About/'
import ContactContainer from '../../components/Contact/'
import {
    HomepageContainer,
    HeroImg,
    TextContainer,
    WelcomeMessage,
    Banner
} from './homepageElements'

import {
    SiVisualstudiocode, 
    SiPython, 
    SiAngular, 
    SiReact, 
    SiVueDotJs,
    SiSass,
    SiBootstrap,
    SiLaravel
} from 'react-icons/si'

import {HiArrowCircleDown} from 'react-icons/hi'

import bgImg1 from '../../assets/backgrounds/hero-img.webp'
import bgImg2 from '../../assets/backgrounds/web-dev-bg2.webp'
import bgImg3 from '../../assets/backgrounds/web-dev-bg3.webp'

const Homepage = () => {

    useEffect( () => {
        const checkpoint = 200
        const downArrowStyle = document.querySelector("#downArrow").style
        const bannerStyle = document.querySelector("#banner").style
        let opacity = .9
        let left = '0px'

        const handleScroll = () => {
            let currentScroll = window.pageYOffset
            let width = window.screen.width

            if (currentScroll <= checkpoint) {
                opacity = .9 - currentScroll / checkpoint
                left = `${currentScroll * (width / 150)}px`
            } else {
                opacity = 0
                left = `${width}px`
            }
        
            downArrowStyle.opacity = opacity
            bannerStyle.left = left
        }
    
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    return (
        <>
            <HomepageContainer id="Home">
                <HeroImg  bgImg={bgImg1}>
                    <TextContainer>
                        <WelcomeMessage>
                            Hello, <br />
                            I'm a web developer
                        </WelcomeMessage>
                        <HiArrowCircleDown id="downArrow" />
                    </TextContainer>
                    <Banner id="banner"/>
                </HeroImg>
                <AboutContainer/>
                <FixedImgBanner bgImg={bgImg2} height="250px">
                    <SiAngular></SiAngular>
                    <SiReact></SiReact>
                    <SiVueDotJs></SiVueDotJs>
                </FixedImgBanner>
                <ProjectsContainer></ProjectsContainer>
                <FixedImgBanner bgImg={bgImg3} height="250px">
                    <SiPython></SiPython>
                    <SiVisualstudiocode></SiVisualstudiocode>
                </FixedImgBanner>
                <ContactContainer />
                <FixedImgBanner bgImg={bgImg3} height="250px">
                    <SiSass></SiSass>
                    <SiBootstrap></SiBootstrap>
                    <SiLaravel></SiLaravel>
                </FixedImgBanner>
            </HomepageContainer>
        </>
    )
}

export default Homepage
