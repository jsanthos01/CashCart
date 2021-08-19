import React , { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
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
    <div className="ui fixed menu">
      <div className="ui container center">
        <div class="item">
            <Link to={"/"}>
                <h2>FakeShop</h2>
            </Link>
        </div>
        <div class="right item">
            <Link to={"/cart"}>
                <button class="ui basic button">
                    <i className="shop icon"></i>
                    {cartCount}
                </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
