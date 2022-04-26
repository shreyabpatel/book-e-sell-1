import React from 'react';
import './Register.css'

const Register = () => {
    return (
      <div className="register-container">
        
        <h1 className='headername'>Create an Account</h1>
        <div className='Account'>
          <h2 className='titlename'>Personal Information</h2>
          <hr className='hrline'></hr>
          
          <div className='personalinformation'>
                <div className='infotext'>
                    <label className='inputlabels'>First Name *</label>
                    <input type='text' required/>
                </div>
                <div className='infotext'>
                  <label className='inputlabels'>Last Name *</label>
                    <input type='text' required/>
                </div>              
          </div>
          <div className='infotext1'>
            <label className='inputlabels'>Email Address *</label>
              <input type='text' required/>
          </div> 
          <h2 className='titlename'>Login Information</h2>
          <hr className='hrline'></hr>
          <div className='personalinformation'>
                <div className='infotext'>
                <label className='inputlabels'>Password *</label>
                    <input type='password' required/>
                </div>
                <div className='infotext'>
                <label className='inputlabels'>Confirm Password *</label>
                    <input type='password' required/>
                </div>              
          </div>
          <button type="submit" className='registerbtn1'>Register</button>

        </div>
      </div>
    );
  }
  
  export default Register