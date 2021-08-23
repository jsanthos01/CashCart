import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { selectedProduct, fetchProduct , removeSelectedProduct } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/shoppingActions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [purchased, setPurchased] = useState(false);
  const product = useSelector((state) => state.product);
  const { id, price, title, category, image, description } = product;

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
        dispatch(removeSelectedProduct())
    }
  }, [productId]);

  const handleAddItem = () => {
    setPurchased(true)
    dispatch(addToCart(productId))
  }

  return (
    <div className="ui grid container">
      {
        Object.keys(product).length === 0 ? (
            <div>...Loading</div>
        ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui medium fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical button" tabIndex="0">
                  { purchased ? <div className="visible content">Item Purchased</div> :
                    <div onClick={handleAddItem} className="visible content">Add to Cart</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
    </div>
  );
};

export default ProductDetails;
