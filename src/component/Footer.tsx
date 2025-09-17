import React from 'react'

import footerbg from '../Assets/footer-sec-bg.webp'

const Footer = () => {
  return (
    <>
    <div className='main-footer'>

                 
   
    <div className='footer'>

       
    

        <div className='footer-inner'>

             <div className='footer-up-bg'>
                <img src={footerbg} alt='footerbg' />
        </div>
        <div className='col-md-12'>
            <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                        <div className='footer-title'>
                        Contact  Us
                        </div>
                </div>

                <div className='col-md-6 col-12'>
                    <div className='footer-input'>
                    <input type='text' placeholder='Your Email Address' />
                    <i className="ri-arrow-right-line"></i>
                    </div>

                    <div className='location'>

                        <div className='location-inner'>
                        <i className="ri-map-pin-line"></i>
                        <div className='location-text'>
                        1632 Marietta StreetSan Jose, CA 95131
                        </div>
                        </div>


                        <div className='location-inner'>
                        <i className="ri-phone-line"></i>
                        <div className='location-text number'>
                        +92-349-1234567
                        </div>
                        </div>

                    </div>
                </div>
                <div className='col-md-6 col-12'>
                    <div className='socail-link'>
                        <div className='socail-link-content'>
                                <a href='#'>Linkedin</a>
                                <a href='#'>Linkedin</a>

                        </div>

                        <div className='socail-link-content'>
                                <a href='#'>Instagram</a>
                                <a href='#'>Twitter</a>

                        </div>
                    </div>
                </div>
                

                <div className='col-md-12 col-12'>

                    <div className='footer-down-content'>
                        <div className='col-md-6 col-12'>
                        <div className='footer-down'>
                        <span>C</span> <p>RaaquaTech - 2023 All right reserved.</p>
                    </div>
                        </div>

                        <div className='col-md-6'>
                        <div className='footer-down-links'>
                        <i className="ri-facebook-fill"></i>
                        <i className="ri-instagram-line"></i>
                        <i className="ri-twitter-x-line"></i>
                        <i className="ri-linkedin-fill"></i>

                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
            </div>
        </div>


      
            
       
    </div>

    </div>
    </>
  )
}

export default Footer