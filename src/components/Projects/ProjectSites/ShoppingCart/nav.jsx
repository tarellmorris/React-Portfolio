import React, {useRef} from 'react'
import { useClickAway } from 'react-use'
import {FaShoppingBag} from 'react-icons/fa'
import {NavContainer} from './shoppingCartElements'

const Nav = (props) => {
    const openCart = () => {
        let cart = document.querySelector('#cart')
        cart.classList.toggle('visible')
    }

    const ref = useRef()

    useClickAway(ref, () => {
        let cart = document.querySelector('#cart')
        cart.classList.remove('visible')
      })

    return (
        <NavContainer ref={ref}>
            <h1>Clothes Co.</h1>
            <div id="cartIconWrap">
                <FaShoppingBag onClick={openCart} />

                {(props.cart.length > 0) && <label>{props.cart.length}</label> }

                <p onClick={openCart} >View cart</p>
            </div>
            {props.children}
        </NavContainer>
    )
}

export default Nav