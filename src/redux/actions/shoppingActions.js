import { ActionTypes } from '../constants/actionTypes'

export const addToCart = (productId) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {
            id: productId
        }
    }
}

export const removeFromCart = (productId) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: {
            id: productId
        }
    }
}

export const adjustQty = (productId, newValue) => {
    return {
        type: ActionTypes.ADJUST_QTY,
        payload: {
            id: productId,
            qty: newValue
        }
    }
}

export const loadCurrentItem = (productInfo) => {
    return {
        type: ActionTypes.LOAD_CURRENT_ITEM,
        payload: productInfo
    }
}