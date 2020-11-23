import React from 'react'
import SectionBanner from '../Common/SectionBanner'
import ProjectCard from './ProjectCard'
import {ProjectsWrapper} from './projectsContainerElements'
import {Link as LinkR} from 'react-router-dom'

import bobImg from '../../assets/thumbnails/bobs-port.webp'
import infoImg from "../../assets/thumbnails/panel-stock.webp"
import rpsImg from "../../assets/thumbnails/rps-port.webp"
import weatherImg from "../../assets/thumbnails/weather-stock.webp"
import unsplashImg from "../../assets/thumbnails/unsplash.webp"
import shoppingImg from "../../assets/thumbnails/shopping.webp"


const ProjectsContainer = () => {
    const data = [
        {
            title: "Shopping cart demo", 
            thumbnail: shoppingImg,
            desc: "A demonstration of shopping cart functionality",
            path: '/shoppingcart'
            
        },
        {
            title: "Infinite scroll demo", 
            thumbnail: unsplashImg,
            desc: "An infinite scroll demo made using the Unsplash API",
            path: '/infinitescroll'
            
        },
        {
            title: "Weather API demo", 
            thumbnail: weatherImg,
            desc: "A weather demo made using the OpenWeatherMap API",
            path: "/weatherapp",
        },
        {
            title: "Bob's burgers homepage", 
            thumbnail: bobImg,
            desc: "A homepage mockup for the fictional Bob's Burgers restaurant",
            path: "/bobsburgers",
        },
        {
            title: "Interactive infographic", 
            thumbnail: infoImg,
            desc: "An interactive infographic made for Definitive Healthcare",
            path: "/infographic",
        },
        {
            title: "Rock paper scissors game", 
            thumbnail: rpsImg,
            desc: "An interactive rock paper scissors game powered by JavaScript",
            path: "/rockpaperscissors",
        }
    ];

    const projectsHeader = 'Take a look at my projects';

    return (  
        <div id="Projects" >      
            <SectionBanner
            sectionTitle={projectsHeader}
            >
                <ProjectsWrapper>
                    {(typeof data != "undefined") ? data.map( (project, key) =>
                        <LinkR to={project.path} key={key}>
                            <ProjectCard 
                            cardTitle={project.title}
                            thumb={project.thumbnail}
                            cardDesc={project.desc}
                            key={key}
                            />
                        </LinkR>
                    ) : <div></div>}
                </ProjectsWrapper>
            </SectionBanner>
        </div>
    )
}

export default ProjectsContainer
