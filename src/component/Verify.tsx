import React from 'react'
import logo from '../Assets/logo.webp'
import createright from '../Assets/create-image.png'

const Verify = () => {
  return (
     <div className='create-page f-password verify-page'>
            <div className='create-left'>
                <div className='logo-content'>
                    <div className='logo'>
                        <img src={logo} alt='logo' />

                    </div>

                    <div className='c-title'>
                       Verification Code
                    </div>
                    <div className='c-text'>
                       Please enter verification code 
                    </div>
                </div>

                <div className='create-form'>
                            <p className='v-text'>Enter Verification Code</p>
                    <div className='verify-boxes'>
                        <input type='text'/>
                        <input type='text'/>
                        <input type='text'/>
                        <input type='text'/>
                    </div>
                   
                    <a href='#'  className="btn-default">Verify</a>

                </div>

            </div>

            <div className='create-right'>
                <div className='image'>
                    <img src={createright} alt='' />
                </div>
            </div>

            
        </div>
  )
}

export default Verify