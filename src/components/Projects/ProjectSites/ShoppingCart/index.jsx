import React, { useState } from 'react'
import FixedImgBanner from '../../../Common/FixedImgBanner'
import {
    ShoppingCartContainer,
    SelectionView,
    ItemCard,
    Img,
} from './shoppingCartElements'
import bgImg from '../../../../assets/backgrounds/web-dev-bg2.webp'
import {FiShoppingCart} from 'react-icons/fi'
import Cart from './cart'
import Nav from './nav'

import options from './clothing.json'


export const ShoppingCart = () => {
    const [cart, setCart] = useState([])
    
    const addToCart = (itemToAdd) => {
        if (![...cart].includes(itemToAdd)) {
            setCart([...cart, itemToAdd])
        }
    }

    return (
        <ShoppingCartContainer>
            <FixedImgBanner bgImg={bgImg} height="80px"></FixedImgBanner>

            <div id="appWrapper">                       
                <Nav cart={cart}></Nav>
                <Cart cart={cart} setCart={setCart}></Cart>
                <SelectionView>
                    {options.map( (item, index) => 
                        <ItemCard key={index}>
                            <Img url={item.imgUrl}>
                                <div id="dropdown">
                                    <button 
                                    className={(!cart.includes(item)) ? 'add' : ''} 
                                    onClick={() => addToCart(item)}
                                    >
                                        {(!cart.includes(item)) ? 'Add to cart' : 'Item in cart'}
                                    </button>
                                </div>
                            </Img>
                            <div id="description">
                                <p>{item.item}</p>
                                <p>${item.cost}</p>
                                <FiShoppingCart onClick={() => addToCart(item)}/>
                            </div>
                        </ItemCard>
                    )}
                </SelectionView>
            </div>

            <FixedImgBanner bgImg={bgImg} height="250px"></FixedImgBanner>
        </ShoppingCartContainer>
    )
}
