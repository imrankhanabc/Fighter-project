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

const Productpage: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null); // ✅ typed correctly

  return (
    <div className="product-page main-padding">
            <div className='product-detail-page'>
         <div className='container'>
                <div className='row'>
                <div className='col-md-6'>
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
                <div className='col-md-6'>
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
                        </div>
                </div>
                </div>
        </div>
            </div>
       
    
    </div>
  );
};

export default Productpage;
