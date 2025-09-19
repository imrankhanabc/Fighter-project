import React from 'react'

import Footer from './Footer'
import HeaderMain from './HeaderMain'
import { FaEdit } from "react-icons/fa"; // edit icon

import plusicon from '../Assets/plus-icon.webp'

const Addproduct = () => {
  return (
     <>
    <HeaderMain/>
    <div className='create-profile-page storepage addproduct'>
            <div className='create-profile-heading'>
                <div className='profile-title'>
             Add Product
                </div>
                <div className='profile-text'>
                 List your <span>product</span> here 
                </div>
    
    
                </div>
    
              <div className="form-group">
                <div className='input-box'>
                     <label>Enter Product Name</label>
          <div className="input-wrapper">
            <input type="text" placeholder="Product Name" />
            <FaEdit className="edit-icon" />
          </div>
                </div>


                 <div className='input-box'>
                     <label>Enter Product Description</label>
          <div className="input-wrapper">
            <input type="text" placeholder="Product Description" />
            <FaEdit className="edit-icon" />
          </div>
                </div>
    
                


                 <div className='input-box'>
                     <label>Upload Logo</label>
          <div className="input-wrapper upload">
                <a href='#'><img src={plusicon} alt=''/><span>Upload Logo</span></a>

          </div>

          <div className='dummy-images'>
          </div>
                </div>

                 <div className='input-box'>
                     <label>Enter Price</label>
          <div className="input-wrapper">
            <input type="text" placeholder="Product Price" />
            <FaEdit className="edit-icon" />
          </div>
                </div>


                 <div className='input-box'>
                     <label>Enter Category</label>
          <div className="input-wrapper">
            <input type="text" placeholder="Product Category" />
            <FaEdit className="edit-icon" />
          </div>
                </div>
    
                
              <div>
    
              </div>
          
              
    
                <a href='#' className='btn-default'> Add Product</a>
          </div>
    
    
          
          
        </div>
        <Footer/>
        </>
  )
}

export default Addproduct