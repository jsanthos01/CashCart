import { ActionTypes } from '../constants/actionTypes'

const initialState = {
    products: [],
    cart: [],
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_PRODUCTS :
            return { ...state, products: payload};
        case ActionTypes.ADD_TO_CART :
            const item = state.products.find(prod => prod.id === Number(payload.id));
            const isInCart = state.cart.find(item => item.id === Number(payload.id) ? true : false);
            return {
                ...state,
                cart: isInCart
                  ? state.cart.map((prod) =>
                      prod.id === Number(payload.id)
                        ? { ...prod, qty: prod.qty + 1 }
                        : prod
                    )
                  : [...state.cart, { ...item, qty: 1 }],
              };
        case ActionTypes.REMOVE_FROM_CART :
            return { 
                ...state, 
                cart: state.cart.filter(prod => prod.id !== Number(payload.id))
            };        
        case ActionTypes.ADJUST_QTY :
            return {
                ...state, 
                cart: state.cart.map((prod) => prod.id === Number(payload.id) ? {...prod, qty: payload.qty } : prod)
            };
        case ActionTypes.LOAD_CURRENT_ITEM :
            return {
                ...state, 
                currentItem: Number(payload.id)
            };
        default: 
            return state;
    }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_PRODUCT :
            return { ...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT :
            return {};
        default: 
            return state;
    }
}
