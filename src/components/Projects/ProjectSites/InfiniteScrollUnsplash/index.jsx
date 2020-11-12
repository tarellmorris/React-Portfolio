/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import FixedImgBanner from '../../../Common/FixedImgBanner'
import {
    InfiniteScrollContainer,
    Header,
    ScrollContainer,
    UnsplashImage,
    LoadAnimation,
    UnsplashDetails,
    ImageContainer
} from './infiniteScrollElements'
import InfiniteScroll from 'react-infinite-scroll-component'

import bgImg from '../../../../assets/backgrounds/web-dev-bg2.png'

export const InfiniteScrollUnsplash = () => {
    const [images, setImages] = useState([])

    useEffect( () => {
        fetchData()
    }, [])

    const fetchData = () => {
        const base = "https://api.unsplash.com/"
        const access = "RyBU0xIJpi4TZmYGP-TM7uDgELSGyX38bvdu7TCH7FA"

        Axios.get(`${base}photos/random?client_id=${access}&count=10`)
        .then(result => 
            setImages([...images, ...result.data])
        )
    }

    return (
        <InfiniteScrollContainer>
            <FixedImgBanner bgImg={bgImg} height="80px"/>
            <Header>
                <h1>Infinite Scroll Demo</h1>
            </Header>
            <ScrollContainer>
                <p>
                    The Unsplash API restricts requests per hour for demo use. 
                    If images do not load, 
                    the maximum hourly requests limit has been reached.
                </p>
                <InfiniteScroll className="scroll"
                dataLength={images.length}
                next={fetchData}
                hasMore={true}
                loader={
                <LoadAnimation className="lds-facebook">
                    <div></div><div></div><div></div>
                </LoadAnimation>
                }
                endMessage={<p>End of images</p>}
                >
                    {images.map((image, key) => (
                        <ImageContainer key={key}>
                            <UnsplashImage 
                            src={image.urls.small}
                            ></UnsplashImage>
                            <UnsplashDetails>
                                <p>{image.alt_description}</p>
                                <p>
                                    <span>
                                        Photo by 
                                        <a 
                                        href={`${image.links.html}?utm_source=infinite_scroll_demo&utm_medium=referral`}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                            {image.user.name}
                                        </a> 
                                        on  
                                        <a 
                                        href={`https://unsplash.com/?utm_source=infinite_scroll_demo&utm_medium=referral`}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                            Unsplash
                                        </a>
                                    </span>
                                </p>
                            </UnsplashDetails>
                        </ImageContainer>
                    ))}
                </InfiniteScroll>
            </ScrollContainer>
            <FixedImgBanner bgImg={bgImg} height="250px"/>
        </InfiniteScrollContainer>
    )
}
