import React from 'react';
import {
    CardContainer,
    CardHead,
    CardTitle,
    CardImgWrapper,
    Frontside,
    Backside
} from './projectCardElements';

const ProjectCard = props => {
    return (
        <CardContainer>
            <CardHead>
                <CardTitle>{props.cardTitle}</CardTitle>    
            </CardHead>  
            <CardImgWrapper>
                <Frontside thumb={props.thumb}></Frontside>
                <Backside>{props.cardDesc}</Backside>
            </CardImgWrapper>        
        </CardContainer>
    )
}

export default ProjectCard
