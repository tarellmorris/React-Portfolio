import React from 'react';
import { useIntersection } from 'react-use'
import {
    CardContainer,
    CardHead,
    CardTitle,
    CardImgWrapper,
    Frontside,
    Backside
} from './projectCardElements';

const ProjectCard = props => {
    const ref = React.useRef(null)
    const inter = useIntersection(ref, {rootMargin: '10px', threshold: .2})

    return (
        <CardContainer 
        ref={ref}
        className={(inter&&inter.intersectionRatio < .2) ? 'hidden bottom' : 'visible'}
        >
            <CardHead>
                <CardTitle>{props.cardTitle}</CardTitle>    
            </CardHead>  
            <CardImgWrapper>
                <Frontside 
                thumb={props.thumb}
                className={(inter&&inter.intersectionRatio < .2) ? 'hidden bottom' : 'visible'}
                ></Frontside>
                <Backside>{props.cardDesc}</Backside>
            </CardImgWrapper>        
        </CardContainer>
    )
}

export default ProjectCard
