import { combineReducers } from "redux"
import ProductsReducer from "./ProductsReducer"
import CartReducer from "./CartReducer"
const reducer = combineReducers({
    ProductsReducer,
    CartReducer
})

export default reducer