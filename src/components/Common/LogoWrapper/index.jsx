import React from 'react';
import {LogoContainer} from './logoWrapperElements';
import {Logo} from './logoWrapperElements';


const LogoWrapper = props => {

    return (
        <LogoContainer>
            {props.logos.map( (logo, index) =>
                <Logo
                src={logo}
                key={index}
                />
            )}
        </LogoContainer>
    )
}

export default LogoWrapper
