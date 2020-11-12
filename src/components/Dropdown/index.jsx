import React from 'react';
import {
    DropdownMenu
} from './dropdownElements';
import {Brand} from '../Navbar/navbarElements';
import {NavLinkCondition} from '../Navbar/navLinkCondition'
import {Link as LinkR} from 'react-router-dom';
import {ImCross} from 'react-icons/im';

const Dropdown = props => {
    return (
        <DropdownMenu 
        display={(props.isOpen) ? 'flex' : 'none'}
        >

            <Brand className="brand">
                <LinkR to="/">
                    Tarell Morris
                </LinkR>
            </Brand>

            <ImCross 
            className="cross"
            onClick={props.onClick}
            />

            <NavLinkCondition onClick={props.onClick} isScrolled={true}></NavLinkCondition>

        </DropdownMenu>
    )
}

export default Dropdown
