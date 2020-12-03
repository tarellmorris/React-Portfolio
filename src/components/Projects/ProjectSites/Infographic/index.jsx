import React, {useState} from 'react'
import FixedImgBanner from '../../../Common/FixedImgBanner'
import {
    InfographicContainer,
    InfoHeader,
    ProContainer,
    Profiles,
    Profile,
    PictureWrapper,
    Gradient,
    ProPicture,
    BlockContainer,
    ProBlock,
    LogoBanner,
    GradientBorder
} from './infographicElements'
import bgImg from '../../../../assets/backgrounds/web-dev-bg2.webp'
import lubbertImg from '../../../../assets/projects/infographic/pro-pictures/dr-bart.webp'
import pykeImg from '../../../../assets/projects/infographic/pro-pictures/amy-pyke.webp'
import lenningImg from '../../../../assets/projects/infographic/pro-pictures/natali-lenning.webp'
import natasaImg from '../../../../assets/projects/infographic/pro-pictures/natasa-dugandzic.webp'
import blockLubbert from '../../../../assets/projects/infographic/blocks/dr-bart-block.webp'
import blockPyke from '../../../../assets/projects/infographic/blocks/amy-pike-block.webp'
import blockLenning from '../../../../assets/projects/infographic/blocks/natalie-lenning-block.webp'
import blockDugan from '../../../../assets/projects/infographic/blocks/natasa-dugandzic-block.webp'

const Infographic = () => {
    const profiles = [
        {
            name: "Bart Lubberts",
            url: lubbertImg,
            block: blockLubbert,
            blockColor: "white"
        },
        {
            name: "Amy Pike",
            url: pykeImg,
            block: blockPyke,
            blockColor: "#404997"
        },
        {
            name: "Natali Lenning",
            url: lenningImg,
            block: blockLenning,
            blockColor: "white"
        },
        {
            name: "Natasa Dugandzic",
            url: natasaImg,
            block: blockDugan,
            blockColor: "#404997"
        }

    ]

    var [stateColor, setColor] = useState("white");
    var [stateBlock, setBlock] = useState(blockLubbert)

    const getBlock = (block, blockColor) => {
        setBlock(stateBlock = block)
        setColor(stateColor = blockColor)
    }

    return (
        <InfographicContainer>
            <FixedImgBanner bgImg={bgImg} height="170px"></FixedImgBanner>
            <InfoHeader>
                <h3>What You Missed</h3>
                <h1>Webinar Panel: Medical Devices</h1>
                <h2>Sales Strategies and Buyer Perspectives</h2>
            </InfoHeader>
            <ProContainer>
                <h2>Click on each presenter to cycle through their unique perspectives on medical device sales and purchasing</h2>
                <Profiles>
                    {profiles.map( (profile, index) => 
                        <Profile 
                        onClick={() => getBlock(profile.block, profile.blockColor)}
                        key={index}
                        >
                            <p>{profile.name}</p>
                            <PictureWrapper>
                                <Gradient></Gradient>
                                <ProPicture src={profile.url}></ProPicture>
                            </PictureWrapper>
                        </Profile>
                    )}
                </Profiles>
            </ProContainer>
            <BlockContainer blockColor={stateColor}>
                <ProBlock block={stateBlock}></ProBlock>
            </BlockContainer>
            <LogoBanner>
                <svg id="DHCFull" className="DHCFull" viewBox="0 0 1991.39 229.96" preserveAspectRatio="xMinYMin meet">
                    <title>Definitive Healthcare Logo</title>
                    <g id="Healthcare" className="healthcareGroup">
                        <path className="healthcare" d="M1187.66,80.69h71.1v23.41h-42.18v24.62h39.59v23.41h-39.59v28.06h44.07v23.41h-72.99V80.69z"></path>
                        <path className="healthcare" d="M1812.22,80.69h48.55c24.62,0,33.05,15.15,33.05,32.02c0,17.9-7.23,26.68-20.66,29.95v0.35
                            c18.42,2.58,19.45,14.12,19.8,30.64c0.52,24.27,1.38,26.68,5.51,28.4v1.55h-31.16c-2.24-4.13-3.1-11.02-3.1-24.96
                            c0-21.35-2.93-25.82-12.05-25.82h-11.02v50.78h-28.92V80.69z M1841.14,132.51h8.95c11.71,0,14.81-8.78,14.81-16.01
                            c0-9.29-3.44-15.49-14.98-15.49h-8.78V132.51z"></path>
                        <path className="healthcare" d="M1736.13,80.69h36.15l30.64,122.91h-29.95l-4.48-23.41h-29.44l-4.3,23.41h-29.95L1736.13,80.69z
                            M1753.69,103.07h-0.35l-10.16,54.74h21L1753.69,103.07z"></path>
                        <path className="healthcare" d="M1672.43,123.38c0-17.9-2.07-25.82-11.71-25.82c-11.53,0-12.57,11.02-12.57,43.21
                            c0,36.49,1.21,45.96,13.26,45.96c10.67,0,11.88-12.22,12.05-31.33h27.89v4.3c0,26.51-7.4,46.31-43.21,46.31
                            c-37.01,0-39.94-27.71-39.94-64.73c0-31.5,1.72-63,42.69-63c25.48,0,39.42,11.02,39.42,39.94v5.16H1672.43z"></path>
                        <path className="healthcare" d="M1522.15,80.69h28.92v45.96h23.07V80.69h28.92V203.6h-28.92v-52.5h-23.07v52.5h-28.92V80.69z"></path>
                        <path className="healthcare" d="M1457.42,104.1h-25.82V80.69h80.56v23.41h-25.82v99.5h-28.92V104.1z"></path>
                        <path className="healthcare" d="M1372.55,80.69h28.92v99.5h41.83v23.41h-70.75V80.69z"></path>
                        <path className="healthcare" d="M1296.46,80.69h36.15l30.64,122.91h-29.95l-4.48-23.41h-29.44l-4.3,23.41h-29.95L1296.46,80.69z
                            M1314.02,103.07h-0.35l-10.16,54.74h21L1314.02,103.07z"></path>
                        <path className="healthcare" d="M1911.04,80.69h71.1v23.41h-42.18v24.62h39.59v23.41h-39.59v28.06h44.07v23.41h-72.99V80.69z"></path>
                        <path className="healthcare" d="M1088.85,80.69h28.92v45.96h23.07V80.69h28.92V203.6h-28.92v-52.5h-23.07v52.5h-28.92V80.69z"></path>
                    </g>
                    <g id="outside_dots" className="outside_dotsGroup">
                        <path className="outside_dots" d="M28.16,27.92c0.51,9.38-4.64,15.25-11.49,13.1C9.82,38.87,4.14,29.14,3.98,19.29
                            C3.82,9.44,8.96,3.57,15.46,6.19C21.96,8.81,27.65,18.53,28.16,27.92z"></path>
                        <path className="outside_dots" d="M62.42,40.13c1,8.72-3.74,14.05-10.59,11.9c-6.85-2.15-12.93-11.34-13.59-20.52
                            c-0.65-9.19,4.09-14.51,10.59-11.9S61.41,31.42,62.42,40.13z"></path>
                        <path className="outside_dots" d="M96.68,52.36c1.5,8.05-2.85,12.84-9.7,10.7c-6.85-2.15-13.34-10.8-14.48-19.32c-1.15-8.52,3.19-13.31,9.7-10.7
                            S95.18,44.3,96.68,52.36z"></path>
                        <path className="outside_dots" d="M130.93,64.58c1.99,7.39-1.95,11.64-8.8,9.49c-6.85-2.15-13.74-10.26-15.38-18.12
                            c-1.64-7.86,2.3-12.11,8.8-9.49S128.94,57.19,130.93,64.58z"></path>
                        <path className="outside_dots" d="M165.19,76.8c2.48,6.73-1.06,10.44-7.91,8.29c-6.85-2.15-14.14-9.72-16.27-16.92
                            c-2.13-7.2,1.41-10.91,7.91-8.29C155.42,62.49,162.71,70.07,165.19,76.8z"></path>
                        <path className="outside_dots" d="M30.56,72.28c0.51,9.38-5,15.75-12.31,14.21C10.95,84.95,4.89,75.72,4.73,65.86s5.35-16.21,12.31-14.21
                            C24,53.66,30.05,62.89,30.56,72.28z"></path>
                        <path className="outside_dots" d="M176.93,108.61c2.48,6.73-1.43,10.93-8.73,9.4c-7.31-1.54-14.96-8.61-17.1-15.81c-2.13-7.2,1.78-11.4,8.74-9.4
                            C166.79,94.8,174.44,101.88,176.93,108.61z"></path>
                        <path className="outside_dots" d="M32.97,116.64c0.51,9.38-5.37,16.24-13.13,15.32c-7.76-0.93-14.18-9.66-14.34-19.51
                            c-0.16-9.85,5.72-16.71,13.13-15.32S32.46,107.25,32.97,116.64z"></path>
                        <path className="outside_dots" d="M188.67,140.41c2.48,6.73-1.8,11.43-9.56,10.51c-7.76-0.92-15.78-7.5-17.92-14.7
                            c-2.13-7.2,2.14-11.9,9.56-10.51C178.16,127.1,186.18,133.68,188.67,140.41z"></path>
                        <path className="outside_dots" d="M35.37,161c0.51,9.38-5.74,16.74-13.95,16.43c-8.22-0.31-15.01-8.55-15.17-18.41
                            c-0.16-9.85,6.09-17.2,13.95-16.42C28.07,143.38,34.86,151.61,35.37,161z"></path>
                        <path className="outside_dots" d="M200.41,172.22c2.48,6.73-2.17,11.92-10.38,11.61c-8.22-0.31-16.6-6.39-18.74-13.59
                            c-2.14-7.2,2.51-12.4,10.38-11.62C189.53,159.4,197.92,165.49,200.41,172.22z"></path>
                        <path className="outside_dots" d="M81.37,205.03c1,8.72-5.21,16.03-13.88,16.33s-16.23-6.9-16.88-16.09c-0.65-9.19,5.56-16.5,13.89-16.33
                            C72.81,189.1,80.37,196.31,81.37,205.03z"></path>
                        <path className="outside_dots" d="M124.96,204.69c1.49,8.06-4.32,14.83-12.99,15.13c-8.67,0.3-16.63-6.37-17.78-14.89
                            c-1.15-8.52,4.67-15.29,12.99-15.12C115.51,189.97,123.46,196.64,124.96,204.69z"></path>
                        <path className="outside_dots" d="M168.55,204.36c1.99,7.39-3.43,13.63-12.1,13.93c-8.67,0.3-17.03-5.83-18.67-13.69s3.78-14.1,12.1-13.93
                            C158.21,190.84,166.56,196.97,168.55,204.36z"></path>
                        <path className="outside_dots" d="M212.14,204.03c2.48,6.73-2.53,12.42-11.21,12.72c-8.67,0.3-17.43-5.29-19.56-12.48
                            c-2.13-7.2,2.88-12.89,11.2-12.72C200.9,191.71,209.66,197.3,212.14,204.03z"></path>
                    </g>
                    <g id="inside_dots" className="inside_dotsGroup">
                        <path className="inside_dots" d="M67.15,81.36c1,8.72-4.11,14.54-11.41,13.01c-7.31-1.54-13.76-10.23-14.42-19.42
                            c-0.65-9.19,4.46-15.01,11.41-13C59.7,63.95,66.15,72.64,67.15,81.36z"></path>
                        <path className="inside_dots" d="M103.75,90.44c1.5,8.06-3.21,13.34-10.52,11.8c-7.31-1.54-14.16-9.69-15.31-18.21
                            c-1.15-8.52,3.56-13.81,10.52-11.8C95.4,74.23,102.25,82.39,103.75,90.44z"></path>
                        <path className="inside_dots" d="M140.34,99.52c1.99,7.39-2.32,12.14-9.62,10.6c-7.31-1.54-14.56-9.15-16.2-17.01
                            c-1.64-7.86,2.67-12.61,9.63-10.6C131.1,84.52,138.35,92.13,140.34,99.52z"></path>
                        <path className="inside_dots" d="M110.82,128.53c1.5,8.05-3.58,13.83-11.34,12.91c-7.76-0.92-14.99-8.59-16.13-17.11
                            c-1.15-8.52,3.93-14.3,11.34-12.91C102.1,112.81,109.32,120.47,110.82,128.53z"></path>
                        <path className="inside_dots" d="M149.74,134.47c1.99,7.39-2.69,12.64-10.45,11.71c-7.76-0.93-15.38-8.05-17.03-15.91
                            c-1.64-7.86,3.04-13.1,10.45-11.71C140.13,119.96,147.75,127.08,149.74,134.47z"></path>
                        <path className="inside_dots" d="M76.63,163.8c1,8.72-4.84,15.53-13.06,15.22c-8.22-0.31-15.41-8.01-16.06-17.2s5.19-16,13.06-15.22
                            C68.44,147.38,75.63,155.08,76.63,163.8z"></path>
                        <path className="inside_dots" d="M159.15,169.41c1.99,7.39-3.06,13.13-11.27,12.82c-8.22-0.31-16.21-6.94-17.85-14.8
                            c-1.64-7.86,3.41-13.59,11.27-12.81C149.17,155.4,157.16,162.02,159.15,169.41z"></path>
                        <path className="inside_dots" d="M37.78,205.36c0.51,9.38-6.11,17.24-14.78,17.53c-8.67,0.3-15.83-7.45-15.99-17.3
                            c-0.16-9.85,6.46-17.7,14.78-17.53C30.11,188.23,37.27,195.97,37.78,205.36z"></path>
                    </g>
                    <g id="definitive" className="definitiveGroup">
                        <path className="definitive" d="M368.4,80.69h71.1v23.41h-42.18v24.62h39.59v23.41h-39.59v28.06h44.07v23.41H368.4V80.69z"></path>
                        <path className="definitive" d="M856.96,80.69h30.99l14.63,95.02h0.35l14.8-95.02h30.99L920.83,203.6h-36.84L856.96,80.69z"></path>
                        <path className="definitive" d="M537.79,80.69h28.92V203.6h-28.92V80.69z"></path>
                        <path className="definitive" d="M752.98,104.1h-25.82V80.69h80.56v23.41H781.9v99.5h-28.92V104.1z"></path>
                        <path className="definitive" d="M687.74,80.69h28.92V203.6h-28.92V80.69z"></path>
                        <path className="definitive" d="M585.14,80.69h33.22l23.76,79.87h0.35V80.69h26.85V203.6h-32.71l-25.3-84.69h-0.34v84.69h-25.82V80.69z"></path>
                        <path className="definitive" d="M818.23,80.69h28.92V203.6h-28.92V80.69z"></path>
                        <path className="definitive" d="M454.47,80.69h71.1v23.41h-42.17v24.62h39.59v23.41h-39.59v51.47h-28.92V80.69z"></path>
                        <path className="definitive" d="M958.01,80.69h71.1v23.41h-42.18v24.62h39.59v23.41h-39.59v28.06H1031v23.41h-72.99V80.69z"></path>
                        <path className="definitive" d="M269.58,80.69h42.86c28.58,0,40.8,14.81,40.8,57.5c0,44.58-5.68,65.41-43.72,65.41h-39.94V80.69z M298.5,182.26h7.75
                            c13.43,0,18.07-5.34,18.07-42.18c0-29.95-2.41-38.04-17.73-38.04h-8.09V182.26z"></path>
                    </g>
                </svg>
            </LogoBanner>
            <GradientBorder></GradientBorder>
            <FixedImgBanner bgImg={bgImg} height="250px"></FixedImgBanner>
        </InfographicContainer>
    )
}

export default Infographic
