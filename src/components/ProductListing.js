import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/actions/productActions'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const ProductListing = () => {
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch(err => {
            console.log(err)
        });

        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing
