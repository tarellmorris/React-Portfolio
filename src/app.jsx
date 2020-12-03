import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import './styles/app.sass'

import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import FooterContainer from  './components/Footer'
import ScrollToTop from './components/Common/ScrollToTop'
import ProjectsContainer from './components/Projects'
import FixedImgBanner from './components/Common/FixedImgBanner'
import AboutContainer from './components/About'
import ContactContainer from './components/Contact'

import bgImg from './assets/backgrounds/web-dev-bg3.webp'

import RockPaperScissors from './components/Projects/ProjectSites/RockPaperScissors'
import Infographic from './components/Projects/ProjectSites/Infographic'
import BobsBurgers from './components/Projects/ProjectSites/BobsBurgers'
import {WeatherApp} from './components/Projects/ProjectSites/WeatherApp'
import {InfiniteScrollUnsplash} from './components/Projects/ProjectSites/InfiniteScrollUnsplash'
import {ShoppingCart} from './components/Projects/ProjectSites/ShoppingCart'

const App = () => {
    const [darkMode, setDarkMode] = useState(true)

    const getTheme = () => {
        if (darkMode) {
            return {mode: 'dark'}
        } else {
            return {mode: 'light'}
        }
    }

    return (
        <div className="siteWrapper">
            <ThemeProvider theme={getTheme}>
                <Router>
                    <ScrollToTop/>
                    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                        <Switch>
                            <Route exact path="/">
                                <Homepage />  
                            </Route>
                            <Route path="/about">
                                <FixedImgBanner bgImg={bgImg} height="170px"/>
                                <AboutContainer />
                                <FixedImgBanner bgImg={bgImg} height="250px"/>
                            </Route>
                            <Route path="/projects">
                                <FixedImgBanner bgImg={bgImg} height="170px"/>
                                <ProjectsContainer/>
                                <FixedImgBanner bgImg={bgImg} height="250px"/>
                            </Route>
                            <Route path="/contact">
                                <FixedImgBanner bgImg={bgImg} height="170px"/>
                                <ContactContainer/>
                                <FixedImgBanner bgImg={bgImg} height="250px"/>
                            </Route>
                            <Route path="/weatherapp">
                                <WeatherApp/>
                            </Route>
                            <Route path="/bobsburgers">
                                <BobsBurgers/>
                            </Route>
                            <Route path="/infographic">
                                <Infographic/>
                            </Route>
                            <Route path="/rockpaperscissors">
                                <RockPaperScissors/>
                            </Route>
                            <Route path="/infinitescroll">
                                <InfiniteScrollUnsplash/>
                            </Route>
                            <Route path="/shoppingcart">
                                <ShoppingCart/>
                            </Route>
                    </Switch>
                    <FooterContainer /> 
                </Router>
            </ThemeProvider>
        </div>
    )
}
 
export default App