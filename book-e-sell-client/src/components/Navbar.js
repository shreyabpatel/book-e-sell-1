import React from 'react'
import image1 from './images/site-logo.svg'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ShoppingCartOutlined } from '@material-ui/icons'
import { LocalLibraryOutlined } from '@material-ui/icons'
import cart from './images/cart.svg'
import search from './images/search.svg'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar=()=> {
    return (
        // <div className="Main-content" >
        <div className='Header'>
        
          <div className='logo' title='Tatvasoft'> <LocalLibraryOutlined style={{ fontSize: 45 }} className='liblogo'/>
          <h2 className='logoname'>E-Library</h2> 
          </div>
          <div className="nav-wrapper">
                <div className="top-right-bar">
                  <ul className="top-nav-bar">
                  <Link to='/'><li className='logintitle'>Login </li></Link>
                    <li>|</li>
                    <Link to='/register'><li className='registertitle'>Register </li></Link>
                  </ul>
                  <ul className="cart-country-wrap">
                  <li className="cart-link">
                      {/* <img src={cart} alt="cart" /> */}
                      <ShoppingCartOutlined style={{ fontSize: 35 }} className='cartlogo'/> 
                    </li>
                  </ul>
                </div>
              </div>
        </div>
        
      // </div>
      
    )
}
export default Navbar