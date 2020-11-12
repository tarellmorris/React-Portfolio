import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import './styles/app.sass';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Infographic from './components/Projects/ProjectSites/Infographic'
import FooterContainer from  './components/Footer';
import Dropdown from './components/Dropdown';
import BobsBurgers from './components/Projects/ProjectSites/BobsBurgers';
import ScrollToTop from './components/Common/ScrollToTop';
import RockPaperScissors from './components/Projects/ProjectSites/RockPaperScissors';
import ProjectsContainer from './components/Projects';
import FixedImgBanner from './components/Common/FixedImgBanner'
import AboutContainer from './components/About'
import ContactContainer from './components/Contact'

import bgImg from './assets/backgrounds/web-dev-bg3.png';
import { WeatherApp } from './components/Projects/ProjectSites/WeatherApp';
import { InfiniteScrollUnsplash } from './components/Projects/ProjectSites/InfiniteScrollUnsplash';


class App extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this)
        this.state = {
            isOpen: false,
        };
    };

    handleClick() {
        this.setState(
            { isOpen: !this.state.isOpen }
        )
    }
    
    render() {
        return (
                <div className="siteWrapper">
                    <Router>
                        <ScrollToTop></ScrollToTop>
                        <Navbar onClick={this.handleClick} />
                        <Dropdown 
                        isOpen={this.state.isOpen}
                        onClick={this.handleClick}
                        />
                            <Switch>
                                <Route exact path="/">
                                    <Homepage></Homepage>  
                                </Route>
                                <Route path="/about">
                                    <FixedImgBanner bgImg={bgImg} height="80px"/>
                                    <AboutContainer></AboutContainer>
                                    <FixedImgBanner bgImg={bgImg} height="250px"/>
                                </Route>
                                <Route path="/projects">
                                    <FixedImgBanner bgImg={bgImg} height="80px"/>
                                    <ProjectsContainer></ProjectsContainer>
                                    <FixedImgBanner bgImg={bgImg} height="250px"/>
                                </Route>
                                <Route path="/contact">
                                    <FixedImgBanner bgImg={bgImg} height="80px"/>
                                    <ContactContainer></ContactContainer>
                                    <FixedImgBanner bgImg={bgImg} height="250px"/>
                                </Route>
                                <Route path="/weatherapp">
                                    <WeatherApp></WeatherApp>
                                </Route>
                                <Route path="/bobsburgers">
                                    <BobsBurgers></BobsBurgers>
                                </Route>
                                <Route path="/infographic">
                                    <Infographic></Infographic>
                                </Route>
                                <Route path="/rockpaperscissors">
                                    <RockPaperScissors></RockPaperScissors>
                                </Route>
                                <Route path="/infinitescroll">
                                    <InfiniteScrollUnsplash></InfiniteScrollUnsplash>
                                </Route>
                        </Switch>
                        <FooterContainer /> 
                    </Router>
                </div>
          );
    };
};
 
export default App;