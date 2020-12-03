import React from 'react'
import {useIntersection} from 'react-use'
import FixedImgBanner from '../Common/FixedImgBanner'
import SectionBanner from '../Common/SectionBanner'
import {
    AboutWrapper,
    TextWrapper,
    PBlock,
    ImgDiv,
    GridWrap
} from './aboutElements'

import {FaChrome, FaFirefoxBrowser} from 'react-icons/fa'
import {SiHtml5, SiCss3, SiJavascript} from 'react-icons/si'

import bgImg2 from '../../assets/backgrounds/web-dev-bg2.webp'
import aboutImg1 from '../../assets/tarell/tarell.webp'
import aboutImg2 from '../../assets/stock/books.webp'
import aboutImg3 from '../../assets/logos/react-logo.webp'

const AboutContainer = props => {
    const titles = [
        "Let me tell you a bit about myself",
        "There's always more to learn",
        "About this portfolio site"
    ]
    const textHolder1 = [
        `After working in roles centered around marketing and writing for 
        over three years, 
        I realized that working with and understanding computer technologies 
        really does give me joy. 
        So, I decided to redirect my focuses and learn programming.`,
    
        `I first started my re-education with the Python language. 
        Immediately, I fell in love with its readable syntax. 
        I continued to learn and tinker with the language for several months, 
        establishing a solid understanding of object-oriented programming and general best-practices. 
        I then discovered the modern world of web development. The combined ownership of artistic design and computer 
        intelligence seemed like a dream job to me.`,
    
        `Since then, I have spent countless hours working with HTML, CSS/SASS, JavaScript, 
        and learning web development frameworks and libraries like Angular and React. 
        I hope that I can someday soon put my technical know-how to good use.`
    ]
    const textHolder2 = [
        `Solidifying a working knowledge of all the different technologies 
        that come and go in this industry is a full-time job in itself. 
        But it's one that I happily take on. I love learning,
        and with computer technology the learning truly never stops.`,

        `Even after I grew comfortable with vanilla CSS and JS, 
        I then began integrating the use of preprocessors and frameworks like
         SASS, Bootstrap, and Angular into my catalog of tools. 
        While each technology brought its own benefits and challenges, 
        staying up-to-date with new technologies makes building complex websites 
        and apps so much simpler and far less tedious.`,

        `This portfolio site was built entirely using React, 
        which I just began working with after an extensive foray in Angular. 
        While I've enjoyed both, what's more important to me than picking just one to master 
        is being able to comfortably jump between languages and syntaxes as needed. `
    ]
    const textHolder3 = [
        `This website itself has been my most complex project yet. 
        I am currently working on more projects to include in it, but, in the meantime, 
        let me tell you a little about how it works.`,

        `As mentioned, this site is built using the React JS library. I really learned to appreciate how light-weight 
        and responsive React pages can be from this project. I used some other impressive libraries too. 
        The main page uses react-scroll for its smooth scrolling animation when navigating sections. 
        The contact section leverages emailjs for its functionality. If you send me a message, 
        I will indeed receive it!
        I also frequently used react-icons for easily importing SVGs and icons.`,

        `My favorite library from this project is by far styled-components. 
        This library allowed me to use standard CSS within a JSX file to style my components and elements. 
        This package made embracing reusable component structures less cumbersome, and I didn't need to 
        overcrowd my build with SASS stylesheets.`
    ]

    const ref1 = React.useRef(null)
    const ref2 = React.useRef(null)
    const ref3 = React.useRef(null)

    const intersection1 = useIntersection(ref1, {rootMargin: '10px', threshold: .2})
    const intersection2 = useIntersection(ref2, {rootMargin: '10px', threshold: .2})
    const intersection3 = useIntersection(ref3, {rootMargin: '10px', threshold: .2})

    return (
            <AboutWrapper id="About">

                <SectionBanner sectionTitle={titles[0]}>
                    <GridWrap template="2fr 1fr">
                        <TextWrapper>
                            {textHolder1.map((details, index) => 
                                <PBlock key={index}>
                                    {details}
                                </PBlock>
                            )}
                        </TextWrapper>
                        <ImgDiv 
                        imgUrl={aboutImg1}
                        bgPos={"top"}
                        ref={ref1}
                        className={(intersection1&&intersection1.intersectionRatio < .2) ? 
                            'hidden right bottom' : 'visible'}
                        />
                    </GridWrap>
                </SectionBanner>

                <FixedImgBanner bgImg={bgImg2} height="250px">
                    <SiHtml5></SiHtml5>
                    <SiCss3></SiCss3>
                    <SiJavascript></SiJavascript>
                </FixedImgBanner>

                <SectionBanner sectionTitle={titles[1]}>
                    <GridWrap template="1fr 2fr">
                        <ImgDiv 
                        imgUrl={aboutImg2}
                        opac=".9"
                        bgPos="center"
                        ref={ref2}
                        className={(intersection2&&intersection2.intersectionRatio < .2) ? 
                            'hidden left bottom' : 'visible'}
                        />
                        <TextWrapper>
                            {textHolder2.map((details, index) => 
                                <PBlock key={index}>
                                    {details}
                                </PBlock>
                            )}
                        </TextWrapper>
                    </GridWrap>
                </SectionBanner>

                <FixedImgBanner bgImg={bgImg2} height="250px">
                    <FaChrome></FaChrome>
                    <FaFirefoxBrowser></FaFirefoxBrowser>
                </FixedImgBanner>

                <SectionBanner sectionTitle={titles[2]}>
                    <GridWrap template="2fr 1fr">
                        <TextWrapper>
                            {textHolder3.map((details, index) => 
                                <PBlock key={index}>
                                    {details}
                                </PBlock>
                            )}
                        </TextWrapper>
                        <ImgDiv 
                        imgUrl={aboutImg3}
                        bgPos={"top"}
                        ref={ref3}
                        className={(intersection3&&intersection3.intersectionRatio < .2) ? 
                            'hidden right bottom' : 'visible'}
                        />
                    </GridWrap>
                </SectionBanner>

            </AboutWrapper>
    )
}

export default AboutContainer
