import React from 'react'

import {
    ToggleContainer
} from './themeToggleElements'

import {FiSun, FiMoon} from 'react-icons/fi'

const ThemeToggle = props => {

    const handleClick = () => {
        props.setDarkMode(!props.darkMode)
    }
    
    return (
        <ToggleContainer>
            <div className="oval" onClick={handleClick}>
                <FiSun className="sun"/>
                <FiMoon className="moon" />
                <div className={`circle ${(!props.darkMode) ? 'light' : 'dark'}`} />
            </div>
        </ToggleContainer>
    )
}

export default ThemeToggle
