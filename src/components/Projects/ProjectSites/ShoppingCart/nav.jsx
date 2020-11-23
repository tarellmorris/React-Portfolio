import React from 'react'
import {FaShoppingBag} from 'react-icons/fa'
import {NavContainer} from './shoppingCartElements'

const Nav = (props) => {
    return (
        <NavContainer>
            <h1>Clothes Co.</h1>

            <div id="cartIconWrap">
                <FaShoppingBag />
                {(props.cart.length > 0) && <p>{props.cart.length}</p> }
            </div>
        </NavContainer>
    )
}

export default Nav