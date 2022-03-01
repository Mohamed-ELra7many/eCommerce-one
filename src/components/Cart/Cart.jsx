import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Cart.css"

const Cart = () => {
  const { products } = useSelector(state => state.CartReducer)   //This is to extract items from redux
  const dispatch = useDispatch()
  return (
    <div className="All-Carts">
      <h3>Your Cart</h3>
      {products.length > 0 ? <>
        <div className="carts">
          <div className="Cart-Details">
            <div className="cart-heading">
              <div className="details">Picture</div>
              <div className="details">Name</div>
              <div className="details">Price</div>
              <div className="details">Inc/Dec</div>
              <div className="details">Total Price</div>
              <div className="details">Remove</div>
            </div>
            {products.map((item) => (
              <div className="single-cart" key={item.id}>
                <div className="details">
                  <div className="cart-Img">
                    <img src={`/images/${item.image}`} alt={item.name} />
                  </div>
                </div>
                <div className="details">
                  <div className="cart-name">
                    {item.name}
                  </div>
                </div>
                <div className="details">
                  <div className="cart-discount">
                    $ {item.discountPrice}
                  </div>
                </div>
                <div className="details">
                  <div className="cart-Dec-Inc">
                    <div className="details-info">
                      {/* This is for when you press it, the quantity is increased*/}
                      <span className="Dec" onClick={() => dispatch({ type: "DEC", payload: item.id })}><i className="fa fa-minus"></i></span>
                      <span className="quantity">{item.quantity}</span>
                      {/*This is for when you press it, the quantity is reduced */}
                      <span className="Inc" onClick={() => dispatch({ type: "INC", payload: item.id })}><i className="fa fa-plus"></i></span>
                    </div>
                  </div>
                </div>
                <div className="details">
                  <div className="cart-total">
                    $ {item.discountPrice * item.quantity}
                  </div>
                </div>
                <div className="details">
                  {/*This is for when you click on it, the whole element is erased */}
                  <div className="cart-remove" onClick={() => dispatch({ type: "REMOVE", payload: item.id })}>
                    <i className="fa fa-times remove"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </> : <h2 className="empty">Your Carts Emptys</h2>}    {/*This appears if you do not choose one of the purchases */}
    </div>
  )
}

export default Cart