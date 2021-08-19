import React , { useState, useEffect } from "react";
import {
    Title, 
    Wrapper,
    Btn,
    MiniBox,
    HeroH1,
    HeroBtn,
    HeroP
} from './HeaderElements';
import clothing from "../images/clothing.jpg";
import hero from "../images/ecommerce.svg";

const Header = () => {

  return (
    <>
     <Wrapper>
       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{width: "50%"}}>
            <HeroH1>Simple Products Elevated</HeroH1>
            <HeroP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
               incididunt ut labore et dolore magna aliqua.  </HeroP>
            <HeroBtn>Learn More</HeroBtn>
          </div>
          <div style={{width: "50%", marginLeft: "105px"}}>
            <img style={{width: "80vh"}} src={hero} alt='logo' />
          </div>
       </div>
    </Wrapper>
    
    </>
  );
};

export default Header;