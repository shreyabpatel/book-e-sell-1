import React from 'react';
import './Addproduct.css';

const Addproduct = () => {
    return (
        <div className='Editproduct'>
            <h1 className='headername'>Add Product</h1>
            <hr/>
            <div className='editinformation'>
                <div className='edit'>
                    <label className='inputlabels'>First Name *</label>
                    <input type='text' required/>
                </div>
                <div className='edit'>
                <label className='inputlabels'>Last Name *</label>
                    <input type='text' required/>
                </div>              
            </div> 
            <div className='editinformation'>
                <div className='edit'>
                <label className='inputlabels'>Select the catagory*</label>
                    <select>
                        <optgroup label="Books">
                        <option value="self help">Self Help</option>
                        <option value="business">Business</option>
                        </optgroup>
                    </select>
                </div>
                <div className='edit'>
                <label className='inputlabels'>Description *</label>
                    <input type='text' required/>
                </div>              
            </div> 
            <div className='editinformation'>
                <div className='edit'>
                    <input type="file" className='editfile'  />
                </div> 
            </div> 
            <div className='editinformation'>
                <div className='editbttn'>
                    <button type="submit" className='savebtn'>Save</button>
                    <button type="submit" className='cancelbtn'>Cancel</button>
                </div> 
            </div>            
        </div>
    );
}

export default Addproduct