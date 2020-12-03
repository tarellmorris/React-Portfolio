import React from 'react'
import {
    SectionContainer,
    TitleWrapper,
    SectionTitle
} from './sectionBannerElements'

const SectionBanner = props => {
    return (
        <SectionContainer>
            <TitleWrapper>
                <SectionTitle>
                    {props.sectionTitle}
                </SectionTitle>
            </TitleWrapper>
            {props.children}
        </SectionContainer>
    )
}

export default SectionBanner
