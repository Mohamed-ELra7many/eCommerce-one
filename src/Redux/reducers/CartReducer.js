/* eslint-disable no-lone-blocks */
const initState = {
    products: [],
    totalPrice: 0,
    totalQuantity: 0
}

const CartReducer = (state = initState, action) => {
    let findProduct;
    let index
    switch (action.type) {
        case "ADD_TO_CART": {/*This is to add an item to your shopping list */ }
            const { product, quantity } = action.payload;
            const find = state.products.find(item => item.id === product.id)
            if (find) {
                return state;
            } else {
                const allPrice = state.totalPrice + product.discountPrice * quantity;
                const allQuantity = state.totalQuantity + quantity;
                product.quantity = quantity
                return {
                    ...state, products: [...state.products, product], totalPrice: allPrice, totalQuantity: allQuantity
                }
            }
        case "INC": {/*This is to increase the number of purchases */ }
            findProduct = state.products.find(item => item.id === action.payload)
            index = state.products.findIndex(item => item.id === action.payload)
            findProduct.quantity += 1;
            state.products[index] = findProduct;
            return {
                ...state,
                totalPrice: state.totalPrice + findProduct.discountPrice,
                totalQuantity: state.totalQuantity + 1
            }
        case "DEC": {/*This is due to a lack of purchases */ }
            findProduct = state.products.find(item => item.id === action.payload)
            index = state.products.findIndex(item => item.id === action.payload)
            if (findProduct.quantity > 1) {
                findProduct.quantity -= 1
                state.products[index] = findProduct
                return {
                    ...state,
                    totalPrice: state.totalPrice - state.discountPrice,
                    totalQuantity: state.totalQuantity - 1
                }
            } else {
                return state;
            }
        case "REMOVE": {/*This is to clear the number of purchases */ }
            findProduct = state.products.find(item => item.id === action.payload)
            let delet = state.products.filter(item => item.id !== action.payload)
            return {
                ...state,
                products: delet,
                totalPrice: state.totalPrice - findProduct.discountPrice * findProduct.quantity,
                totalQuantity: state.totalQuantity - findProduct.quantity
            }
        default:
            return state;
    }

}
export default CartReducer