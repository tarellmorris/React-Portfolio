import styled from 'styled-components'

export const ShoppingCartContainer = styled.div`
    & #appWrapper {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-template-rows: auto 3fr;
    }
`
export const NavContainer = styled.div`
    grid-column: 1/3;
    grid-row: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 25px;
    border-bottom: 4px solid black;

    & h1 {
        font-size: 3rem;
        letter-spacing: 4px;
        margin-right: 10%;
    }

    & #cartIconWrap {
        position: relative;

        & svg {
            font-size: 2rem;
        }
        
        & p {
            position: absolute;
            top: -20px;
            left: 30px;
            font-size: .9rem;
            padding: 2px 4px;
            background: #ac0101;
            color: white;
            border-radius: 50px;
        }
    }
`
export const SelectionView = styled.div`
    grid-column: 1;
    grid-row: 2;
    grid-gap: 5px;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 25px;
`
export const CartView = styled.div`
    grid-column: 2;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-left: 2px solid black;
    padding: 25px;

    & h2 {
        font-size: 1.2rem;
        font-weight: bold;
    }

    & #cartContainer {
        display: grid;
        grid-template-columns: minmax(300px, 1fr);
        grid-row-gap: 5px;
        width: 100%;
        margin: 25px 0;
    }
`
export const CartCard = styled.div`
    display: flex;
    position: relative;

    & #details {
        height: 100%;
        & p {
            font-size: .7rem;
        }
        & select {
            font-size: .7rem
        }
    }
    & svg {
        position: absolute;
        top: 0px;
        right: 10px;
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
    }

    & #dropdown {
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(0,0,0,.5);
        transform: scale(2);
        opacity: 0;
        height: 100%;
        transition: transform .3s, opacity .2s;

        & button {
            background: #ac0101;
            padding: 10px;
            outline: none;
            border: none;
            cursor: pointer;
            color: white;

            &:hover {
                background: #9d0808;
            }
        }
    }
`
export const ItemCard = styled.div`

    & #description {
        position: relative;
        padding: 5px 0;

        & p {
            font-size: .7rem;
        }

        & svg {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 1.2rem;
            cursor: pointer;

            &:hover {
                color: #ac0101;
            }
        }
    }
`
