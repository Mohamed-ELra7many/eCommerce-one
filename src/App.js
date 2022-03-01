import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import Home from './components/Home/Home'
import { Route, Switch } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import Details from './components/Details/Details'
import { Provider } from 'react-redux'
import store from './Redux/Store'

const App = () => {
  return (
    <div className="container">
      <Provider store={store}>     {/*This is so that the whole site is a redux listener */}
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />    {/*This is to download the home page */}
          </Route>
          <Route path="/cart" exact>
            <Cart />    {/*This is to download the purchase page */}
          </Route>
          <Route path="/details/:id">
            <Details />  {/*This is the download details page */}
          </Route>
        </Switch>
      </Provider>
    </div>
  )
}

export default App
