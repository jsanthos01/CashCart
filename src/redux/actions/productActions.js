import { ActionTypes } from '../constants/actionTypes';
import axios from 'axios'
import api from "../../apis/Api"
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = (product) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}

export const fetchProducts = (url) => async (dispatch, getState) => {
        const response = await api.get(url);
        dispatch({
            type: ActionTypes.FETCH_PRODUCTS,
            payload: response.data
        })
}
export const fetchProduct = (id) => async (dispatch, getState) => {
        console.log(id)
        const response = await api.get(`/products/${id}`);
        dispatch({
            type: ActionTypes.SELECTED_PRODUCT,
            payload: response.data
        })
}