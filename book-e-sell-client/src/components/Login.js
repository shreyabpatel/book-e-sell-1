import React,{Component} from 'react';
import './Login.css'
const Login = ()=> {
  return (
  <div className="logincontainer">
      <div className="container">
        
        <div className='Account'>
        <h1 className='headername'>Login or Create an Account </h1>
            <div className='newcustomer'>
                <h2 className='titlename'>New Customer</h2>
                <hr></hr>
                <h4>Registration is free and easy.</h4>
                <ul>
                    <li>Faster checkout</li>
                    <li>Save multiple shipping addresses</li>
                    <li>View and track orders and more</li>
                </ul>
                <button type="submit" className='registerbtn'>Create an Account</button>
            </div>
            <div className='register'>
                <h2 className='titlename'>Registered Customer</h2>
                <hr></hr>
                <h4>If you have an account with us. Please Log in.</h4>
                <div className='textfields'>
                    <label className='inputlabels'>Email Address *</label>
                    <form><input type='email' size='30' required/></form>
                </div>
                <div className='textfields'>
                    <label className='inputlabels'>Password *</label>
                    <input type='password' minlength='8' required/>
                </div>
                <button type="submit" className='loginbtn'>Login</button>
            </div>
        </div>
      </div>
  </div>);
    
}
export default Login
