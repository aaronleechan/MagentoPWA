import React from 'react';
import { ShoppingCart } from 'react-feather';
import navCartClasses from './navCart.module.css';

const NavCart = () =>{

    return(
        <div className={navCartClasses.itemContainer}>
            <div className={navCartClasses.itemCount}>0</div>
            <div className={navCartClasses.cartContainer}>
                <ShoppingCart sie={25} />
                <a>Cart</a>
            </div>
        </div>
    )
}

export default NavCart;