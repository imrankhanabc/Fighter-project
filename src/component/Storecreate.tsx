import React from 'react'
import Footer from './Footer'
import HeaderMain from './HeaderMain'
import { FaEdit } from "react-icons/fa"; // edit icon

import plusicon from '../Assets/plus-icon.webp'


const Storecreate = () => {
  return (

    <>
    <HeaderMain/>
    <div className='create-profile-page storepage'>
            <div className='create-profile-heading'>
                <div className='profile-title'>
             Create Store
                </div>
                <div className='profile-text'>
                   Create your <span>Store</span> and start selling your products.
                </div>
    
    
                </div>
    
              <div className="form-group">
                <div className='input-box'>
                     <label>Enter Store Name</label>
          <div className="input-wrapper">
            <input type="text" placeholder="User_abc" />
            <FaEdit className="edit-icon" />
          </div>
                </div>
    
                 <div className='input-box'>
                     <label>Enter Store Information</label>
          <div className="input-wrapper">
            <input type="date" placeholder="28/05/2000" />
          </div>
                </div>


                 <div className='input-box'>
                     <label>Upload Logo</label>
          <div className="input-wrapper upload">
                <a href='#'><img src={plusicon} alt=''/><span>Upload Logo</span></a>

          </div>
                </div>

                 <div className='input-box'>
                     <label>Enter Location</label>
          <div className="input-wrapper">
            <input type="text" placeholder="Store Location" />
            <FaEdit className="edit-icon" />
          </div>
                </div>


                 <div className='input-box'>
                     <label>Store Contact</label>
          <div className="input-wrapper">
            <input type="text" placeholder="Store Contact" />
            <FaEdit className="edit-icon" />
          </div>
                </div>
    
                
              <div>
    
              </div>
          
              
    
                <a href='#' className='btn-default'> Create Store</a>
          </div>
    
    
          
          
        </div>
        <Footer/>
        </>
  )
}

export default Storecreate