/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import "./navbar.css"
const Navbar = () => {
    const { totalQuantity } = useSelector(state => state.CartReducer)   //This is to extract items from redux
    return (
        <>
            <nav>
                <div className="nav-container">
                    <div className="nav-left">
                        <NavLink to="/">        {/*This is to go to the home page */}
                            <img src="/images/logo.webp" />
                        </NavLink>
                    </div>
                    <div className="nav-right">
                        <NavLink to="/cart">         {/*This is to go to the purchase page */}
                            <i className="fa fa-shopping-cart">({totalQuantity})</i>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar