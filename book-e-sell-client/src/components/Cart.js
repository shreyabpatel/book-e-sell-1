import React from 'react';
import './Cart.css';
import dummyimg from './images/dummy-img.png';

const Cart = () => {
    return ( 
        <div className='cart'>
            <h1 className='headername'>Cart page</h1><hr/>
            <div className='cartcontainer'>
                <h3 className='headtitle'>My Shopping Bag (8 items)</h3>
                <h5 className='totalprice'>Total Price: 3000</h5>
            </div>
            <div className='Cart-Items'>
                <div className='image-box'>
                    <img src={dummyimg}  />
                </div>
                <div className='about'>
                    <h1 className='title'>Book Name</h1>
                    <h3 className='subtitle'>Author</h3>
                    <div className='counter'>
                        <button type="submit" className='counterbtn'>-</button>
                        <div className='count'>1</div>
                        <button type="submit" className='counterbtn'>+</button>
                    </div>
                </div>
                <div className='prices'>
                    <h1 className='amount'>500</h1>
                    <div className='off'>1000</div>
                    <div className='save'>50% off</div>
                    <a className='remove'>Remove</a>
                </div>
            </div>
            <div className='Cart-Items'>
                <div className='image-box'>
                    <img src={dummyimg}  />
                </div>
                <div className='about'>
                    <h1 className='title'>Book Name</h1>
                    <h3 className='subtitle'>Author</h3>
                    <div className='counter'>
                        <button type="submit" className='counterbtn'>-</button>
                        <div className='count'>1</div>
                        <button type="submit" className='counterbtn'>+</button>
                    </div>
                </div>
                <div className='prices'>
                    <h1 className='amount'>500</h1>
                    <div className='off'>1000</div>
                    <div className='save'>50% off</div>
                    <a className='remove'>Remove</a>
                </div>
            </div>
            <div className='Cart-Items'>
                <div className='image-box'>
                    <img src={dummyimg}  />
                </div>
                <div className='about'>
                    <h1 className='title'>Book Name</h1>
                    <h3 className='subtitle'>Author</h3>
                    <div className='counter'>
                        <button type="submit" className='counterbtn'>-</button>
                        <div className='count'>1</div>
                        <button type="submit" className='counterbtn'>+</button>
                    </div>
                </div>
                <div className='prices'>
                    <h1 className='amount'>500</h1>
                    <div className='off'>1000</div>
                    <div className='save'>50% off</div>
                    <a className='remove'>Remove</a>
                </div>
            </div>
            {/* <div className='Cart-Items'>
                <div className='image-box'>
                    <img src={dummyimg}  />
                </div>
                <div className='about'>
                    <h1 className='title'>Apple Juice</h1>
                    <h3 className='subtitle'>250ml</h3>
                    <div className='counter'>
                        <button type="submit" className='counterbtn'>-</button>
                        <div className='count'>2</div>
                        <button type="submit" className='counterbtn'>+</button>
                    </div>
                </div>
                <div className='prices'>
                    <h1 className='amount'>500</h1>
                    <div className='off'>1000</div>
                    <div className='save'>50% off</div>
                    <div className='remove'>Remove</div>
                </div>
            </div> */}
            <div>
            <button type="submit" className='placebtn'>Place Order</button>
            </div>
        </div>
    );
}

export default Cart