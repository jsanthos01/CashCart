import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import { setProducts, fetchProducts } from '../redux/actions/productActions'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Header from '../components/Header'
import { useLocation } from "react-router-dom";

const ProductListing = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        let urlEndpoint = location.pathname;
        if (urlEndpoint.includes("-")){
            urlEndpoint = urlEndpoint.replace(/-/g, "'s%20")
        }
        let url = urlEndpoint === "/" ?  
            "/products" : 
            `/products/category/${urlEndpoint.substring(1, urlEndpoint.length)}`;
        
        dispatch(fetchProducts(url));
    }, [location.pathname])
    return (
        <div>
            {location.pathname == '/' ? <Header /> : null }
            <div className="ui grid container">
                <ProductComponent />
            </div>

        </div>
    )
}

export default ProductListing
