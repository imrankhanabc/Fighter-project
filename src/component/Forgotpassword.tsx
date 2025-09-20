import React from 'react'
import logo from '../Assets/logo.webp'
import createright from '../Assets/create-image.png'
import '../style/product.css'
import fmodalicon from '../Assets/forgot-modal-icon.webp'



const Forgotpassword = () => {
  return (
<>
    {/* // forgot-moadal */}

    <div className="modal fade productmodal modal-sm forgot-modal" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Store Information</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
      </div>
      <div className="modal-body">

        <div className='forgot-inner-content'>
                <div className='forgot-icon'>
                    <img src={fmodalicon} alt=''/>
                </div>

                <div className='f-title'>
                    Verification Code
                </div>

                <div className='f-text'>
                    We have sent a verification code to 
your email
                </div>

                  <a href='#'  className="btn-default">Okay</a>


        </div>
        
      </div>
      
    </div>
  </div>
</div>

     <div className='create-page f-password'>
            <div className='create-left'>
                <div className='logo-content'>
                    <div className='logo'>
                        <img src={logo} alt='logo' />

                    </div>

                    <div className='c-title'>
                       Forgot your Password
                    </div>
                    <div className='c-text'>
                        Reset your password easily
                    </div>
                </div>

                <div className='create-form'>
                  
                    <div className='input-box'>
                        <label>Enter Email </label><span className='label-clr'>*</span><br></br>
                        <input placeholder='abc@gmail.com' type='Email' />
                    </div>
                   
                    <a href='#'  className="btn-default" 
   data-bs-toggle="modal" 
   data-bs-target="#exampleModal">Password Reset</a>

                </div>

            </div>

            <div className='create-right'>
                <div className='image'>
                    <img src={createright} alt='' />
                </div>
            </div>

            
        </div>

        </>
  )
}

export default Forgotpassword