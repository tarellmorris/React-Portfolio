import React, {useRef} from 'react'
import { useClickAway } from 'react-use'
import {
    CartView,
    CartCard,
    CartImg
} from './shoppingCartElements'
import {FiX} from 'react-icons/fi'

export const Cart = (props) => {
    const ref = useRef(null)

    useClickAway(ref, () => {
        let cart = document.querySelector('#cart')
        cart.classList.remove('visible');
      });

    const removeFromCart = (idToRemove) => {
        let newCart = props.cart.filter( item => item.key !== idToRemove )
        props.setCart(newCart)
    }

    const currentTotal = props.cart.reduce( (total, item) => {
        return item.cost + total
    }, 0 )

    return (
        <CartView id="cart" ref={ref}>
            {(props.cart.length > 0) ? 
                <>
                    <h2>Shopping Cart ({props.cart.length})</h2>
                    <div id="cartContainer">
                        {props.cart.map( (item) => 
                            <CartCard key={item.key}>
                                <CartImg url={item.imgUrl}></CartImg>
                                <div id="details">
                                    <p>{item.item}</p>
                                    <p>Price: ${item.cost}</p>
                                    <p>Quantity: {item.amount}</p>
                                </div>
                                <FiX onClick={() => removeFromCart(item.key)}></FiX>
                            </CartCard>
                        )}
                    </div>
                    <p>Total Cost: ${currentTotal.toFixed(2)}</p>
                </>
            : 
                <>
                    <h2>Your cart</h2>
                    <h3>is currently empty</h3>
                </>
            }
        </CartView>
    )
}

export default Cart

