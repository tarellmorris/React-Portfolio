import React from 'react';
import {ImgContainer} from './fixedImgBannerElements';


const FixedImgBanner = props => {
    return (
        <ImgContainer 
        bgImg={props.bgImg}
        height={props.height}
        >
            {props.children}
        </ImgContainer>
    )
}

export default FixedImgBanner
