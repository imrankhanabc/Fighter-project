import React from 'react'
import headerlogo from '../Assets/header-logo.webp'
import '../style/login.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='logo'>
                            <img src={headerlogo} alt='logo' />
                    </div>
                </div>
                <div className='col-md-4'>
                <div className='menu'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Forums</a></li> 
                        <li><a href='#'>Reels</a></li>   
                        <li><a href='#'>Marketplace</a></li>   

                        </ul>
                </div>
                </div>

                <div className='col-md-4'>
                    <div className='login-btn'>
                        <a href='#'>Login</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header