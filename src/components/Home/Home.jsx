/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Header from '../Header/Header'
import { useSelector } from "react-redux"
import "./Home.css"
import { NavLink } from 'react-router-dom'

const Home = () => {

    const { products } = useSelector(state => state.ProductsReducer)   //This is to extract items from redux
    return (
        <>
            <Header />
            <div className="Allitem">
                {products.map((item) => (
                    <div className="products" key={item.id}>
                        <div className="product">
                            <div className="Info-img">
                                <NavLink to={`/details/${item.id}`}>
                                    <img src={`../images/${item.image}`} alt={item.name} />
                                </NavLink>
                            </div>
                            <div className="Info-name">{item.name} </div>
                            <div className="text">
                                <div className="price">
                                    $ {item.price}
                                </div>
                                <div className="dis-price">
                                    $ {item.discountPrice}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home