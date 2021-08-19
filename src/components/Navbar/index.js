import React , { useState, useEffect } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogo
} from './NavbarElements';
import logo from "../images/logo.svg";
import { useSelector } from "react-redux";

const Navbar = () => {

    const cart = useSelector((state) => state.allProducts.cart);
    const [cartCount, setCartCount] = useState(0);
  
    useEffect(() =>{
      let count = 0;
      cart.forEach((item) => {
        count +=  Number(item.qty);
      })
      setCartCount(count)
    }, [cart, cartCount])

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} alt='logo' />
          <NavLogo to='/'>
              CashCart
          </NavLogo>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/jewelery' activeStyle>
            Jewelry
          </NavLink>
          <NavLink to='/men-clothing' activeStyle>
            Men's Clothing
          </NavLink>
          <NavLink to='/women-clothing' activeStyle>
            Women's Clothing 
          </NavLink>
          <NavLink to='/electronics' activeStyle>
            Electronics
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          <NavBtnLink to='/cart'>
                <i className="shop icon"></i>
                {cartCount}
        </NavBtnLink>
        </NavBtn>
        
      </Nav>
    </>
  );
};

export default Navbar;