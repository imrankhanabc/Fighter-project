import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../style/product.css'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper'; // ✅ Import type

import productsliderone from '../Assets/product-sider-image.webp'

import productslidertwo from '../Assets/product-slider-two.webp'
import Footer from './Footer';
import HeaderMain from './HeaderMain';

import modalbag from '../Assets/modal-bag.webp'

import modalphone from '../Assets/modal-call.webp'
import modallocation from '../Assets/modal-location.webp'

import mone from '../Assets/m-p-one.webp'


const Productpage: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null); // ✅ typed correctly

  return (
    <>

{/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

<div className="modal fade productmodal modal-sm" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Store Information</h5>
        <button type="button" className="product-cross" data-bs-dismiss="modal" aria-label="Close">X</button>
      </div>
      <div className="modal-body">
        <div className='modal-inner'>
          <div className='modal-icon'>
            <img src={modalbag} alt=''/>
          </div>

          <div className='modal-text'>
              <div className='modal-name'>
              Store name:
              </div>

              <div className='modal-brand'>
            Alpha Strike

                </div>
          </div>
          </div>


           <div className='modal-inner'>
          <div className='modal-icon'>
            <img src={modalphone} alt=''/>
          </div>

          <div className='modal-text'>
              <div className='modal-name'>
              Contact Number:
              </div>

              <div className='modal-brand'>
            021-1234567


                </div>
          </div>
          </div>


          <div className='modal-inner'>
          <div className='modal-icon'>
            <img src={modallocation} alt=''/>
          </div>

          <div className='modal-text'>
              <div className='modal-name'>
              Address:
              </div>

              <div className='modal-brand'>
           Lorem ipsum dolor sit amet.



                </div>
          </div>
          </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    <HeaderMain/>
    <div className="product-page main-padding">
            <div className='product-detail-page'>
         <div className='container'>
                <div className='row'>
                <div className='col-md-6 col-12'>
                <div className='product-left'>

                       <Swiper
        spaceBetween={10}
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide><img src={productsliderone} /></SwiperSlide>
        <SwiperSlide><img src={productslidertwo} /></SwiperSlide>

        
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper} // ✅ now valid
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide><img src={productsliderone} /></SwiperSlide>
        <SwiperSlide><img src={productslidertwo} /></SwiperSlide>

        
      </Swiper>
                    </div>
                    
               
                </div>
                <div className='col-md-6 col-12'>
                    <div className='product-right'>

                        <div className='product-title-right'>
                            <div className='title-detail'>
                                     <div className='p-title'>
                            Exclusive Gym Bag
                            </div>
                            <div className='p-sku'>
                                Boxing Arena
                                </div>
                            </div>

                            <div className='rating'>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <span>(5)</span>
                            </div>
                           

                        </div>

                        <div className='product-description'>
                            <h6>About Product</h6>

                            <div className='pr-description-text'>
                                Carry your gear with confidence in this durable, spacious gym bag. Featuring multiple compartments for organized storage, a breathable shoe pocket, and water-resistant fabric, it’s perfect for workouts, travel, or daily use. Sturdy straps and a sleek design make it as stylish as it is functional.
                            </div>
                            </div>

                            <div className='product-sizing'>

                                <div className='size'>
                                    <h6>Available Size</h6> 

                                    <div className='size-left'> 
                                        
                                        <div className='size-option'>

                                        <div className='s-box'>
                                            S
                                            </div>
                                            <div className='s-box'>
                                            M
                                            </div>
                                            <div className='s-box'>
                                            L
                                            </div>
                                            <div className='s-box'>
                                            XL
                                            </div>
                                        </div>

                                   
                                        </div>  
                                </div>


                                 <div className='size'>
                                    <h6>Available Size</h6> 

                                    <div className='size-left'> 
                                        
                                        <div className='size-option'>

                                        <div className='same-bg red'>
                                            
                                            </div>
                                            <div className='same-bg yellow'>
                                        
                                            </div>
                                            <div className='same-bg dark'>
                                        
                                            </div>
                                           
                                        </div>

                                   
                                        </div>  
                                </div>
                                </div>  


                               <button className='product-btn' data-bs-toggle="modal" data-bs-target="#exampleModal">Contact Seller</button>
                        </div>
                </div>
                {/* </div> */}


                <div className='col-md-12'>
                         <div className='main-heading main-padding'>
            <div className='heading'>
            Related Products
            </div>

            <div className='text'>
         Shop your favourite <span>boxing products</span> and enjoy your game 
            </div>
        </div>
                </div>

                <div className='col-md-3 col-6'>
                                    <div className='marketplace-product'>
                                        <div className='product-image'>
                                            <img src={mone} alt='mone' />
                                        </div>
                
                                        <div className='produt-detail'>
                
                                            <div className='product-title-icon'>
                                                <div className='product-title'>
                                                    UFC Bag pack
                                                    </div>
                
                                                    <div className='icon'>
                                                        <i className="ri-heart-line"></i>
                                                    </div>
                                            </div>
                
                                            <div className='product-desc'>
                                                    UFC Ultimate Fighting  Official Collection Backpack
                                            </div>
                
                                            <div className='product-price'>
                                                <div className='price-text'>
                                                    Price
                                                </div>
                                                <div className='m-price'>
                                                    $100
                                                </div>  
                
                                        </div>
                
                                        <div className='p-button'>
                                                <button>BUY NOW</button>
                                        </div>
                
                                        </div>
                
                            </div>
                            </div>

                             <div className='col-md-3 col-6'>
                                    <div className='marketplace-product'>
                                        <div className='product-image'>
                                            <img src={mone} alt='mone' />
                                        </div>
                
                                        <div className='produt-detail'>
                
                                            <div className='product-title-icon'>
                                                <div className='product-title'>
                                                    UFC Bag pack
                                                    </div>
                
                                                    <div className='icon'>
                                                        <i className="ri-heart-line"></i>
                                                    </div>
                                            </div>
                
                                            <div className='product-desc'>
                                                    UFC Ultimate Fighting  Official Collection Backpack
                                            </div>
                
                                            <div className='product-price'>
                                                <div className='price-text'>
                                                    Price
                                                </div>
                                                <div className='m-price'>
                                                    $100
                                                </div>  
                
                                        </div>
                
                                        <div className='p-button'>
                                                <button>BUY NOW</button>
                                        </div>
                
                                        </div>
                
                            </div>
                            </div>

                             <div className='col-md-3 col-6'>
                                    <div className='marketplace-product'>
                                        <div className='product-image'>
                                            <img src={mone} alt='mone' />
                                        </div>
                
                                        <div className='produt-detail'>
                
                                            <div className='product-title-icon'>
                                                <div className='product-title'>
                                                    UFC Bag pack
                                                    </div>
                
                                                    <div className='icon'>
                                                        <i className="ri-heart-line"></i>
                                                    </div>
                                            </div>
                
                                            <div className='product-desc'>
                                                    UFC Ultimate Fighting  Official Collection Backpack
                                            </div>
                
                                            <div className='product-price'>
                                                <div className='price-text'>
                                                    Price
                                                </div>
                                                <div className='m-price'>
                                                    $100
                                                </div>  
                
                                        </div>
                
                                        <div className='p-button'>
                                                <button>BUY NOW</button>
                                        </div>
                
                                        </div>
                
                            </div>
                            </div>

                             <div className='col-md-3 col-6'>
                                    <div className='marketplace-product'>
                                        <div className='product-image'>
                                            <img src={mone} alt='mone' />
                                        </div>
                
                                        <div className='produt-detail'>
                
                                            <div className='product-title-icon'>
                                                <div className='product-title'>
                                                    UFC Bag pack
                                                    </div>
                
                                                    <div className='icon'>
                                                        <i className="ri-heart-line"></i>
                                                    </div>
                                            </div>
                
                                            <div className='product-desc'>
                                                    UFC Ultimate Fighting  Official Collection Backpack
                                            </div>
                
                                            <div className='product-price'>
                                                <div className='price-text'>
                                                    Price
                                                </div>
                                                <div className='m-price'>
                                                    $100
                                                </div>  
                
                                        </div>
                
                                        <div className='p-button'>
                                                <button>BUY NOW</button>
                                        </div>
                
                                        </div>
                
                            </div>
                            </div>
                </div>

        </div>
            </div>
       
    
    </div>

    <Footer/>
    </>
  );
};

export default Productpage;
