import React from 'react'
import {
    DropdownMenu
} from './dropdownElements'
import {Brand} from '../Navbar/navbarElements'
import {NavLinkCondition} from '../Navbar/navLinkCondition'
import { useClickAway } from 'react-use'
import {Link as LinkR} from 'react-router-dom'
import {ImCross} from 'react-icons/im'

const Dropdown = props => {
    const ref = React.useRef()

    useClickAway(ref, () => {
        props.handle()
      })

    return (
        <DropdownMenu className={(props.isOpen) ? 'show' : 'hide'} ref={ref}>
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
