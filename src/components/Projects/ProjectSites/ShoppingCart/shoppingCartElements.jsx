import styled from 'styled-components'
import {Color, Accent} from '../../../../styles/theme'

export const ShoppingCartContainer = styled.div`
    & ::selection {
        background: ${Accent};
        color: ${Color};
    }
    
    & #appWrapper {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 3fr;
    }
`
// Navbar
export const NavContainer = styled.div`
    grid-column: 1/3;
    grid-row: 1/1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    padding: 25px;
    border-bottom: 4px solid black;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }

    & h1 {
        font-size: 3rem;
        letter-spacing: 6px;
        font-family: 'Georgia', serif;
    }

    & #cartIconWrap {
        position: relative;
        display: flex;

        @media screen and (max-width: 600px) {
            margin-top: 25px;
        }

        & svg {
            font-size: 2rem;
            cursor: pointer;
            transition: transform .25s ease;

            &:hover {
                transform: scale(1.1);
            }
            &:active {
                transform: scale(0.9);
            }
        }

        & p {
            margin-left: 10px;
            margin-top: 15px;
            font-weight: bold;
            cursor: pointer;
        }
        
        & label {
            position: absolute;
            top: -10px;
            left: 30px;
            font-size: .9rem;
            padding: 2px 8px;
            background: #ac0101;
            color: white;
            border-radius: 50px;
            margin: 0;
            cursor: auto;
        }
    }
`
// Clothing options
export const SelectionView = styled.div`
    position: relative;
    grid-column: 1;
    grid-row: 2;
    grid-gap: 5px;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 25px;
`
export const Img = styled.div`
    height: 500px;
    width: auto;
    overflow: hidden;
    background-image: url(${props => props.url});
    background-position: center;
    background-size: cover;

    &:hover #dropdown {
        opacity: 1;
        transform: scale(1);
        visibility: visible;
    }

    & #dropdown {
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(0,0,0,.5);
        transform: scale(2);
        opacity: 0;
        visibility: hidden;
        height: 100%;
        transition: transform .25s, opacity .25s;

        & button {
            background: gray;
            padding: 10px;
            outline: none;
            border: none;
            color: white;
            text-align: center;
            transition: transform .25s;

            &.add {
                background: #ac0101;
                cursor: pointer;

                &:hover {
                    transform: scale(1.1);;
                }
    
                &:active {
                    transform: scale(0.9);
                }
            }
        }
    }
`
export const ItemCard = styled.div`
    margin-bottom: 15px;

    & #description {
        position: relative;
        padding: 5px 0;

        & p {
            font-size: .8rem;
            letter-spacing: 2px;
        }

        & svg {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 1.3rem;
            cursor: pointer;

            &:hover {
                color: #ac0101;
            }
        }
    }
`
// Shopping cart
export const CartView = styled.div`
    position: absolute;
    top: 210px;
    left: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 25px;
    height: 0;
    width: 100%;
    background: white;
    visibility: hidden;
    opacity: 0;
    transition: height .1s ease, opacity .25s ease;
    box-shadow: 0px 20px 20px 0px rgba(0,0,0,0.75);

    @media screen and (max-width: 600px) {
        top: 275px;
    }

    @media screen and (max-width: 386px) {
        top: 350px;
    }

    &.visible {
        height: auto !important;
        visibility: visible !important;
        opacity: 1 !important;
    }

    & h2 {
        font-size: 1.2rem;
        font-weight: bold;
    }

    & #cartContainer {
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 600px));
        grid-gap: 5px;
        width: 100%;
        margin: 25px 0;
    }
`
export const CartCard = styled.div`
    display: flex;
    position: relative;
    background: #e7e6e430;;

    & #details {
        height: 100%;
        padding: 5px;
        text-align: left;

        & p {
            font-size: .7rem;
        }

        & select {
            font-size: .7rem
        }
    }
    & svg {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 1.2rem;
        cursor: pointer;

        &:hover {
            color: #ac0101;
        }
    }
`
export const CartImg = styled.div`
    height: 125px;
    width: 100px;
    background-image: url(${props => props.url});
    background-position: center;
    background-size: cover;
    margin-right: 5px;
`

