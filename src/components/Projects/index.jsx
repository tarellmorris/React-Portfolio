import React from 'react'
import SectionBanner from '../Common/SectionBanner'
import ProjectCard from './ProjectCard'
import {ProjectsWrapper} from './projectsContainerElements'
import {Link as LinkR} from 'react-router-dom'

import bobImg from '../../assets/thumbnails/bobs-port.jpg'
import infoImg from "../../assets/thumbnails/panel-stock.jpg"
import rpsImg from "../../assets/thumbnails/rps-port.jpg"
import questImg from "../../assets/thumbnails/question.jpg"
import weatherImg from "../../assets/thumbnails/weather-stock.jpg"
import unsplashImg from "../../assets/thumbnails/unsplash.jpg"


const ProjectsContainer = () => {
    const data = [
        {
            title: "Infinite scroll demo", 
            thumbnail: unsplashImg,
            desc: "An infinite scroll app that uses the Unsplash API",
            path: '/infinitescroll'
            
        },
        {
            title: "Weather app", 
            thumbnail: weatherImg,
            desc: "A weather app made using the OpenWeatherMap API",
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
        },
        {
            title: "Coming soon", 
            thumbnail: questImg,
            desc: "Under development...",
            path: ''
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
