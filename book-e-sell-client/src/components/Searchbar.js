import React from 'react'
import search from './images/search.svg'
import './Searchbar.css'

export default function Searchbar() {
    return (
        <div>
          <div className='search'>
          <div className='header-search'>
            {/* <div className='header-search-area'> */}
              <input className='placeholder' type="text" placeholder='Search...'/>
              <button type='submit' className='btn1'><img src={search}/>Search</button>
              <button type='submit' className='btn2'>Cancel</button>
            {/* </div> */}
          </div>
        </div>
      </div>
    )
}
