import React from 'react'
import {
    CartView,
    CartCard,
    CartImg
} from './shoppingCartElements'
import {FiX} from 'react-icons/fi'

export const Cart = (props) => {
    const removeFromCart = (idToRemove) => {
        let newCart = props.cart.filter( item => item.key !== idToRemove )
        props.setCart(newCart)
    }

    const currentTotal = props.cart.reduce( (total, item) => {
        return item.cost + total
    }, 0 )

    return (
        <CartView id="cart">
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
                                    <select >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <FiX onClick={() => removeFromCart(item.key)}></FiX>
                            </CartCard>
                        )}
                    </div>
                    <p>Total Cost: ${currentTotal}</p>
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

