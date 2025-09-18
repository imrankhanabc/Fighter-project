import React from 'react'

import '../style/home.css'
import popularone from '../Assets/f-slider-image-two.webp'
import populartwo from '../Assets/f-slider-image.webp'
import popularthree from '../Assets/f-slider-image-three.webp'
import Footer from './Footer'
import HeaderMain from './HeaderMain'



const Searchpages = () => {
  return (

    <>
    {/* model */}
    <div>
      <div
        className="modal fade search-modal"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
               <span><i className="ri-arrow-left-line"></i></span> Filter
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                
                <div className="progress">
                    
                <div
                  className="progress-bar custom-progress"
                  role="progressbar"
                  style={{ width: "60%", backgroundColor: "#D08002" }} // <-- set progress dynamically
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {/* 60% */}
                </div>
                <span className="progress-label">Age (18)</span>
                <span className="progress-dot"></span>

                <div className='number-bar'>
                    <div className='number'>
                        0
                    </div>
                    <div className='number'>
                        30
                    </div>
                    
                </div>
              </div>
                    <div className='city-option'>
                        <div className='city-text'>
                        City (2)
                        </div>

                        <div className='cities'>
                        <button className='active'>Chicago</button>
                        <button>New York</button>

                        <button>Alaska</button>

                        <button>Ohio</button>

                        <button>Washington DC</button>

                        
                        </div>
                        </div>

                        <div className=' radio-option city-text'>
                        Fighter Handed
                        </div>

                        <div className='radio-content'>
                            <div className='radio-inner'>
  <label htmlFor="html">Left</label>

                            <input type="radio" id="html" name="fav_language" value="HTML"/>
                            </div>

                            <div className='radio-inner'>
  <label htmlFor="html">Right</label>

                            <input type="radio" id="html" name="fav_language" value="HTML"/>
                            </div>
                        </div>

                        <div className='city-option'>
                        <div className='city-text'>
                        Fighter Discipline (1)
                        </div>

                        <div className='cities'>
                        <button className='active'>Boxing</button>
                        <button>Ju-jitsu</button>

                        <button>karate</button>

                        <button>UFC</button>

                        <button>Muay-thai</button>
                        <button>Muay-thai</button>


                        
                        </div>
                        </div>

              
              </div>
            <div className="footer-modal">
              <a className='filter'>
              Reset

              </a>
              <a className='filter apply'>
              Apply Filter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <HeaderMain/>
    <div className='search-page'>

        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <div className='main-heading'>
            <div className='heading'>
            Search
            </div>

            <div className='text'>
            Search for your <span>favourite profiles</span> and start following
            </div>
        </div>
                </div>

                <div className='col-md-12'>
                <div className='input-search'>
            <div className='input'>
                <input type='text' placeholder='Search Profiles' />
                <i className="ri-search-2-line"></i>
            </div>

            <div className='filter'>
            <i className="ri-filter-line"  data-bs-toggle="modal" 
  data-bs-target="#exampleModal"
  style={{ cursor: "pointer" }}></i>
            </div>
        </div>
                </div>

                <div className='col-md-12'>

                    <div className='main-search-contetn'>
                    <div className='searchpage-content'>
                        <div className='search-title'>
                        Popular Searches
                        </div>

                        <div className='search-button'>
                            See All
                        </div>
                    </div>
                    </div>
                    </div>  

                    <div className='col-md-2 col-6'>
                    <div className=' fighter-slider searchpage-content-inner'>
                       

                        <div className="slider-content">
            <div className="slide-image">
              <img src={popularone}/>
            </div>
            <div className="swiper-text-content">
              <div className="name-slider">Alex Boxer</div>
              <div className="progile-name">@User_abc</div>
            </div>
          </div>
                    </div>
                    </div>

                    <div className='col-md-2 col-6'>
                    <div className=' fighter-slider searchpage-content-inner'>
                        

                        <div className="slider-content">
            <div className="slide-image">
              <img src={populartwo}/>
            </div>
            <div className="swiper-text-content">
              <div className="name-slider">Alex Boxer</div>
              <div className="progile-name">@User_abc</div>
            </div>
          </div>
                    </div>
                    </div>

                    <div className='col-md-2 col-6'>
                    <div className=' fighter-slider searchpage-content-inner'>
                        

                        <div className="slider-content">
            <div className="slide-image">
              <img src={popularthree}/>
            </div>
            <div className="swiper-text-content">
              <div className="name-slider">Alex Boxer</div>
              <div className="progile-name">@User_abc</div>
            </div>
          </div>
                    </div>
                    </div>


                    <div className='col-md-12'>

                    <div className='main-search-contetn'>
                    <div className='searchpage-content'>
                        <div className='search-title'>
                        Recent Searches
                        </div>

                        <div className='search-button'>
                            See All
                        </div>
                    </div>
                    </div>
                    </div>  

                    <div className='col-md-2 col-6'>
                    <div className=' fighter-slider searchpage-content-inner'>
                       

                        <div className="slider-content">
            <div className="slide-image">
              <img src={popularone}/>
            </div>
            <div className="swiper-text-content">
              <div className="name-slider">Alex Boxer</div>
              <div className="progile-name">@User_abc</div>
            </div>
          </div>
                    </div>
                    </div>

                    <div className='col-md-2 col-6'>
                    <div className=' fighter-slider searchpage-content-inner'>
                        

                        <div className="slider-content">
            <div className="slide-image">
              <img src={populartwo}/>
            </div>
            <div className="swiper-text-content">
              <div className="name-slider">Alex Boxer</div>
              <div className="progile-name">@User_abc</div>
            </div>
          </div>
                    </div>
                    </div>

                    <div className='col-md-2 col-6'>
                    <div className=' fighter-slider searchpage-content-inner'>
                        

                        <div className="slider-content">
            <div className="slide-image">
              <img src={popularthree}/>
            </div>
            <div className="swiper-text-content">
              <div className="name-slider">Alex Boxer</div>
              <div className="progile-name">@User_abc</div>
            </div>
          </div>
                    </div>
                    </div>
                   

            </div>
        </div>
       

      
    </div>

    <Footer/>
    </>
  )
}

export default Searchpages