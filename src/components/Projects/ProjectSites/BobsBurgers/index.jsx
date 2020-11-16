import React, {useState} from 'react'
import {Route} from 'react-router-dom'
import {
  BobsContainer,
  Header,
  BobsLogo,
  Divider,
  ContentDiv,
  HeadText,
  Text,
  PortraitContainer,
  SlideShowContainer,
  ProfilesWrap,
  Portrait,
  Footer
} from './bobsBurgersElements'
import SimpleImageSlider from "react-simple-image-slider"
import FixedImgBanner from '../../../Common/FixedImgBanner'

import bbLogo from '../../../../assets/projects/bobs/logos/bblogo.webp'
import kitchen from '../../../../assets/projects/bobs/backgrounds/kitchen.webp'
import bench from '../../../../assets/projects/bobs/backgrounds/bob-bench.webp'
import board from '../../../../assets/projects/bobs/backgrounds/bobs-board.webp'
import slide1 from '../../../../assets/projects/bobs/backgrounds/bobs1.webp'
import slide2 from '../../../../assets/projects/bobs/backgrounds/bobs4.webp'
import slide3 from '../../../../assets/projects/bobs/backgrounds/bobs3.webp'
import slide4 from '../../../../assets/projects/bobs/backgrounds/bobs.webp'
import bob from '../../../../assets/projects/bobs/portraits/bob.webp'
import linda from '../../../../assets/projects/bobs/portraits/linda.webp'
import gene from '../../../../assets/projects/bobs/portraits/gene.webp'
import louise from '../../../../assets/projects/bobs/portraits/louise.webp'
import tina from '../../../../assets/projects/bobs/portraits/tina.webp'
import bgImg from '../../../../assets/backgrounds/web-dev-bg2.webp'

const BobsBurgers = props => {
  const images = [
    {url: slide1},
    {url: slide2},
    {url: slide3},
    {url: slide4}
  ];
  const headText1 = "You're gonna like these burgers";
  const pText1 = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Non maxime odit excepturi esse illum asperiores corrupti, 
    odio quis quia similique iure dolor. 
    Obcaecati, repudiandae repellat dolorem eum vero soluta sapiente vel voluptas qui dolore. 
    Laboriosam et non sit, placeat ipsa ullam quae repellendus laborum animi!`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Dicta quas in consequuntur quos vel eligendi officiis enim dolorem unde deleniti aliquam fuga soluta, 
    deserunt ipsum tempora eaque dolorum inventore est quod! Molestiae officiis porro error!`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Non maxime odit excepturi esse illum asperiores corrupti, 
    odio quis quia similique iure dolor.`
  ]
  const headText2 = "a family-owned restaurant";
  const profiles = [
    {
      name: "Bob Belcher",
      url: bob,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas in consequuntur quos vel eligendi officiis enim dolorem unde deleniti aliquam fuga soluta. Sed laboriosam vel voluptatibus nam officiis maiores!"
    },
    {
      name: "Linda Belcher",
      url: linda,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas in consequuntur quos vel eligendi officiis enim dolorem unde deleniti aliquam fuga soluta. Sed laboriosam vel voluptatibus nam officiis maiores!"
    },
    {
      name: "Tina Belcher",
      url: tina,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas in consequuntur quos vel eligendi officiis enim dolorem unde deleniti aliquam fuga soluta. Sed laboriosam vel voluptatibus nam officiis maiores!"
    },
    {
      name: "Gene Belcher",
      url: gene,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas in consequuntur quos vel eligendi officiis enim dolorem unde deleniti aliquam fuga soluta. Sed laboriosam vel voluptatibus nam officiis maiores!"
    },
    {
      name: "Louise Belcher",
      url: louise,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas in consequuntur quos vel eligendi officiis enim dolorem unde deleniti aliquam fuga soluta. Sed laboriosam vel voluptatibus nam officiis maiores!"
    }
  ]
  const headText3 = "Bring The Kids And Come On Down";

  var [isClicked, setClick] = useState(false);


  const maximize = id => {
    setClick(isClicked = !isClicked)

    if (isClicked) {
      let portrait = document.getElementById(id);
      portrait.classList.toggle('maximized');
    } else {
      let portrait = document.getElementById(id);
      portrait.classList.toggle('maximized');
    }
  };

  return (
    <Route path="/bobsburgers">
      <BobsContainer>
        <FixedImgBanner bgImg={bgImg} height="80px"/>
        <Header>
          <BobsLogo src={bbLogo}></BobsLogo>
        </Header>
        <Divider />
        <SlideShowContainer>
          <SimpleImageSlider
          width="100%"
          height="650px"
          images={images}
          navStyle={2}
          ></SimpleImageSlider>
        </SlideShowContainer>
        <Divider />
        <ContentDiv bg={kitchen} bgColor="#9ac8e8e8">
          <HeadText fontSize="2.5rem">{headText1}</HeadText>
          {pText1.map( (text, key) =>
            <Text
            key={key}
            >{text}</Text>
          )}
        </ContentDiv>
        <Divider />
        <PortraitContainer bg={board}>
            <HeadText fontSize="2.5rem">{headText2}</HeadText>
            <ProfilesWrap>
              {profiles.map( (pro, key) => 
                <div 
                className="wrap" 
                key={key}
                id={pro.url}
                >
                  <HeadText fontSize="1.3rem">{pro.name}</HeadText>
                  <Portrait 
                  src={pro.url} 
                  onClick={() => maximize(pro.url)}
                  />
                  <p>{pro.desc}</p>
                </div>
              )}
            </ProfilesWrap>
        </PortraitContainer>
        <Divider />
        <ContentDiv bg={bench} bgColor="#f37cb0e8">
          <HeadText fontSize="2.5rem">{headText3}</HeadText>
          {pText1.map( (text, key) =>
            <Text
            key={key}
            >{text}</Text>
          )}
        </ContentDiv>
        <Divider />
        <Footer>
          <Text>© 2019 | Tarell Morris. All Rights Reserved.</Text>
        </Footer>
        <FixedImgBanner bgImg={bgImg} height="250px"/>
      </BobsContainer>
    </Route>
  )
};

export default BobsBurgers;




