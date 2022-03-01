/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import "./details.css"

const Details = () => {
    const [quantity, setQuantity] = useState(1)
    const desAndinc = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const { id } = useParams()
    const dispatch = useDispatch()
    const { product } = useSelector(state => state.ProductsReducer)   //This is to extract items from redux

    useEffect(() => {
        dispatch({ type: "PRODUCT", id })
    }, [])
    return (
        <>
            <div className="AllDetails">
                <div className="detail">
                    <div className="Details-img">
                        <img src={`/images/${product.image}`} alt={product.name} />
                    </div>
                </div>
                <div className="detail">
                    <div className="details-name">{product.name}</div>
                    <div className="details-price">
                        <span className="price">$ {product.price}</span>
                        <span className="discount-price">$ {product.discountPrice}</span>
                    </div>
                    <div className="details-info">
                        {/* This is for when you press it, the quantity is increased*/}
                        <span className="Dec" onClick={desAndinc}><i className="fa fa-minus"></i></span>
                        <span className="quantity">{quantity}</span>
                        {/*This is for when you press it, the quantity is reduced */}
                        <span className="Inc" onClick={() => setQuantity(quantity + 1)}><i className="fa fa-plus"></i></span>
                        <button className="btn-cart" onClick={() => dispatch({ type: "ADD_TO_CART", payload: { product, quantity } })}>Add To Cart</button>
                    </div>
                    <div className="details-desc">
                        <h4>DETAILS</h4>
                        <p>Welcome, you are a wonderful person because you chose one of the best pieces we have.
                            You are a wonderful person because you have a wonderful taste in choosing clothes and shoes,
                            and this quality is not present in ordinary people and we promise you that you will like these 100% and you will come to us again and take your friends with you
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details