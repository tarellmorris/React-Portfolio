import React from 'react'
import {FaShoppingBag} from 'react-icons/fa'
import {NavContainer} from './shoppingCartElements'

const Nav = (props) => {
    const openCart = () => {
        let cart = document.querySelector('#cart')
        cart.classList.toggle('visible')
    }

    return (
        <NavContainer>
            <h1>Clothes Co.</h1>
            <div id="cartIconWrap">
                <FaShoppingBag onClick={openCart} />
                {(props.cart.length > 0) && <p>{props.cart.length}</p> }
            </div>
            <p onClick={openCart} >View cart</p>
        </NavContainer>
    )
}

export default Nav