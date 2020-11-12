import React from 'react';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {
    FooterContainer,
    FootNavWrapper,
    FootLink,
    FootSocialLink,
    SocialWrapper,
    CopyInfo
} from './footerElements';

const Footer = () => {
    const links = [
        {
            page: "Home",
            to: "/",
            key: 1
        },
        {
            page: "About",
            to: "/about",
            key: 2
        },
        {
            page: "Projects",
            to: "/projects",
            key: 3
        },
        {
            page: "Contact",
            to: "/contact",
            key: 4
        },
    ]

    return (
        <FooterContainer>
            <FootNavWrapper>
                {links.map( links =>
                    <FootLink
                    key={links.key}
                    to={links.to}
                    smooth="easeInOutQuint"
                    duration={1000}
                    >
                        {links.page}
                    </FootLink>
                )}
            </FootNavWrapper>
            <SocialWrapper>
                <FootSocialLink>
                    <a 
                    href="https://www.linkedin.com/in/tarellmorris/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                        LinkedIn
                    </a> 
                </FootSocialLink>
                <FootSocialLink>
                    <a 
                    href="https://github.com/tarellmorris"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                        <FaGithub />
                        GitHub
                    </a> 
                </FootSocialLink>
            </SocialWrapper>
            <CopyInfo>
                © 2020 | Tarell Morris. All Rights Reserved.
            </CopyInfo>
        </FooterContainer>
    )
}

export default Footer
