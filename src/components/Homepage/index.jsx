import React, {useEffect} from 'react'
import FixedImgBanner from '../../components/Common/FixedImgBanner/'
import LogoWrapper from '../../components/Common/LogoWrapper/'
import ProjectsContainer from '../../components/Projects/'
import AboutContainer from '../../components/About/'
import ContactContainer from '../../components/Contact/'
import {
    HomepageContainer,
    HeroImg,
    TextContainer,
    WelcomeMessage,
    GoldBanner
} from './homepageElements'

import AngularLogo from '../../assets/logos/Angular.webp'
import BootstrapLogo from '../../assets/logos/bootstrap.webp'
import ChromeLogo from '../../assets/logos/chrome.webp'
import FirefoxLogo from '../../assets/logos/firefox.webp'
import PythonLogo from '../../assets/logos/python.webp'
import ReactLogo from '../../assets/logos/react-trans.webp'
import VSLogo from '../../assets/logos/vscode.webp'

import {HiArrowCircleDown} from 'react-icons/hi'

import heroImg from '../../assets/backgrounds/hero-img.webp'
import bgImg2 from '../../assets/backgrounds/web-dev-bg2.webp'
import bgImg3 from '../../assets/backgrounds/web-dev-bg3.webp'

const logos2 = [
    ChromeLogo,
    FirefoxLogo
]
const logos3 = [
    AngularLogo,
    PythonLogo,
    VSLogo
]
const logos4 = [
    ReactLogo,
    BootstrapLogo
]


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
                <HeroImg  bgImg={heroImg}>
                    <TextContainer>
                        <WelcomeMessage>
                            Hello, <br />
                            I'm a web developer
                        </WelcomeMessage>
                        <HiArrowCircleDown id="downArrow" />
                    </TextContainer>
                    <GoldBanner id="banner"/>
                </HeroImg>
                <AboutContainer/>
                <FixedImgBanner bgImg={bgImg2} height="250px">
                    <LogoWrapper logos={logos2}></LogoWrapper>
                </FixedImgBanner>
                <ProjectsContainer></ProjectsContainer>
                <FixedImgBanner bgImg={bgImg3} height="250px">
                    <LogoWrapper logos={logos3}></LogoWrapper>
                </FixedImgBanner>
                <ContactContainer />
                <FixedImgBanner bgImg={bgImg3} height="250px">
                    <LogoWrapper logos={logos4}></LogoWrapper>
                </FixedImgBanner>
            </HomepageContainer>
        </>
    )
}

export default Homepage
