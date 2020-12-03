import React from 'react'
import {
    DropdownMenu
} from './dropdownElements'
import {NavLinkCondition} from '../navLinkCondition'

const Dropdown = props => {

    return (
        <DropdownMenu 
        className={`
            ${(props.isOpen) ? 'show' : 'hide'}
            ${(props.isScrolled) ? 'scrolled' : ''}
        `}
        >
            <NavLinkCondition onClick={props.onClick} isScrolled={props.isScrolled}></NavLinkCondition>
        </DropdownMenu>
    )
}

export default Dropdown
