import React from 'react';
import './Footer.css'
import image1 from './images/site-logo.svg'
 import { LocalLibraryOutlined } from '@material-ui/icons'

const Footer = () => {
    return (
        <div className='Footer'>
            <LocalLibraryOutlined style={{ fontSize: 45 }} className='liblogo'/>
            <h2 className='logoname'>E-Library</h2>
            {/* <img src={image1}/> */}
            <p>	&copy; 2022 E-Library.com. All rights reserved. </p>
        </div>
    );
}

export default Footer