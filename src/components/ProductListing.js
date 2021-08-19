import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/actions/productActions'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Header from '../components/Header'
import { useLocation } from "react-router-dom";

const ProductListing = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const fetchProducts = async () => {
            let urlEndpoint = location.pathname;
            if (urlEndpoint.includes("-")){
                urlEndpoint = urlEndpoint.replace(/-/g, "'s%20")
            }
            let url = urlEndpoint === "/" ?  
                "https://fakestoreapi.com/products" : 
                `https://fakestoreapi.com/products/category/${urlEndpoint.substring(1, urlEndpoint.length)}`;
        
        const response = await axios.get(url).catch(err => {
            console.log(err)
        });

        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts();
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
