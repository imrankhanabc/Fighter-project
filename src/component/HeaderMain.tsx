import React from 'react'
import headerlogo from '../Assets/header-logo.webp'
import headerlogin from '../Assets/header-login.png'
import '../style/home.css'

const HeaderMain = () => {
  return (
    <div className='header-main'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                            <div className='header-logo'>
                                <img src={headerlogo} alt='logo' />
                            </div>
                    </div>

                    <div className='col-md-5'>
                        <div className='header-menu'>
                            <ul>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>Forums</a></li>

                                <li><a href='#'>Reels</a></li>

                                <li><a href='#'>Marketplace</a></li>

                            </ul>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='header-login'>
                            <div className='header-search'>
                            <i className="ri-search-line"></i>
                            </div>

                            <div className='profile-login'>
                            <img src={headerlogin} alt='login' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default HeaderMain