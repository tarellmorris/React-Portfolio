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
                <SelectionView>
                    {options.map( (item, index) => 
                        <ItemCard key={index}>
                            <Img url={item.imgUrl}>
                                <div id="dropdown">
                                    <button onClick={() => addToCart(item)}>
                                        Add to cart
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
                <Cart cart={cart} setCart={setCart}></Cart>
            </div>

            <FixedImgBanner bgImg={bgImg} height="250px"></FixedImgBanner>
        </ShoppingCartContainer>
    )
}
