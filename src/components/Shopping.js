import React, { useEffect, useState } from "react";
import { removeFromCart, adjustQty } from "../redux/actions/shoppingActions";
import { useDispatch, useSelector } from "react-redux";
import NumberInput from 'semantic-ui-react-numberinput';
import { Link } from "react-router-dom";


const Shopping = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.allProducts.cart);
  const [totalPrice, setTotalPrice]= useState(0);
  const [totalItems, setTotalItems]= useState(0);
  const [input, setInput] = useState({id: null , qty: null});
  const handleChangeValue = (value, id) => {
    setInput({ id: id, qty: value });
    dispatch(adjustQty(id, value))
  }
  
  const handleRemove = (id) => {
    dispatch(removeFromCart(id))
  } 

  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach(item => {
        items += Number(item.qty);
        price += Number(item.qty)*Number(item.price);
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])
  return (
    <div className="ui grid container">
      <div className="ui ten wide column divided items">
        { 
            cart.map((prod) => {
                const { id, price, title, category, image, description, qty } = prod;
                return (
                    <div className="item" key={id}>
                        <div className="image">
                            <img src={image} />
                        </div>
                        <div className="content" style={{display: "flex", flexDirection: "column"}}>
                            <Link to={`/product/${id}`}><h3 className="header">{title}</h3></Link>
                            <div className="ui meta ">
                                <div class="four column row">
                                    <div class="left floated column">
                                        <div class="ui left floated column teal tag label large"> $ {price}</div>
                                    </div>
                                    <div class="right floated column">
                                        <NumberInput size={'small'} buttonPlacement="leftAndRight" value={input.id == id ? input.qty : qty} onChange={(value) => handleChangeValue(value, id)} />
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <p>
                                {description}
                                </p>
                                <button onClick={() => handleRemove(id)}class="ui icon button red right floated">
                                    <i class="trash alternate icon"></i>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                )
            })
        }
        
      </div>
      <div className="ui six wide column">
        <div className="item">
          <div className="ui card ">
            <div className="content">
              <div className="header">Cart Summary</div>
            </div>
            <div className="content row">
              <h4 className="ui sub header">Total {`( ${totalItems} Items) `}</h4>
              <div className="ui small feed">
                <div className="event">
                  <div className="content">
                    <div className="summary">
                      <p>$ {totalPrice}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="extra content">
              <button className="ui button">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
