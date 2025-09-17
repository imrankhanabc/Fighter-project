import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import fliderone from '../Assets/f-slider-image.webp'
import fslidertwo from '../Assets/f-slider-image-two.webp'
import fsliderthree from '../Assets/f-slider-image-three.webp'
import fsliderfour from '../Assets/f-slider-image-four.webp'
import fsliderfive from '../Assets/f-slider-image-five.webp'

import heroright from '../Assets/heropanel-right.webp'

// forum section

import forumone from '../Assets/forum-image-one.webp'
import forumtwo from '../Assets/forum-image-two.webp'
import forumthree from '../Assets/forum-image-three.webp'

// feed slider
import feedone from '../Assets/feed-one.webp'
import feedtwo from '../Assets/feed-two.webp'
import feedthree from '../Assets/feed-three.webp'
import feedfour from '../Assets/feed-four.webp'
import feedfive from '../Assets/feed-five.webp'
import feedsix from '../Assets/feed-six.webp'
import marketone from '../Assets/market-one.webp'
import markettwo from '../Assets/market-two.webp'
import marketthree from '../Assets/market-three.webp'
import Footer from './Footer';

const Heropanel = () => {
    const fighters = [
        { img: fliderone, name: "Alex Boxer", username: "@User_abc" },
        { img: fslidertwo, name: "Alex Boxer", username: "@User_abc" },
        { img: fsliderthree, name: "Alex Boxer", username: "@User_abc" },
        { img: fsliderfour, name: "Khabib", username: "@User_abc" },
        { img: fsliderfive, name: "Alex Boxer", username: "@User_abc" },
        { img: fsliderthree, name: "Alex Boxer", username: "@User_abc" },
        { img: fliderone, name: "Alex Boxer", username: "@User_abc" },


      ];


      const feed = [
        { img: feedone, name: "MCity vs Liverpool", username: "10k views : 2 hours ago" },
        { img: feedtwo, name: "Squid Game 2", username: "4.5M views : 2 hours ago" },
        { img: feedthree, name: "Mustafa & Sharjeena", username: "10k views : 2 hours ago" },
        { img: feedfour, name: "MCity vs Liverpool", username: "10k views : 2 hours ago" },
        { img: feedfive, name: "MCity vs Liverpool", username: "10k views : 2 hours ago" },
        { img: feedsix, name: "MCity vs Liverpool", username: "10k views : 2 hours ago" },
        { img: feedone, name: "MCity vs Liverpool", username: "10k views : 2 hours ago" },
        { img: feedtwo, name: "Squid Game 2", username: "4.5M views : 2 hours ago" },
       




      ];


      const [open1, setOpen1] = React.useState(true);
      const [open2, setOpen2] = React.useState(false);
      const [open3, setOpen3] = React.useState(false);
      const [open4, setOpen4] = React.useState(false);

      
  return (
    <>

     <div className='hero-panel'>

      
                     <div className='hero-left'>
                             <div className='hero-text'>
                             Feature Fighter of the week
                             </div>

                             <div className='hero-title'>
                            <span>Dynamic power</span>, {""}dazzling footwork, Uncover highlights!
                             </div>

                             <div className='hero-desc'>
                             Every week, a new Star Fighter shines! Dynamic power, dazzling footwork. Discover their thrilling highlights, stats, and exclusive interviews now!
                             </div>

                             <a href='#' className='main-btn'>Get Started</a>
                     </div>

                 <div className='hero-right'>
                  <img src={heroright} alt='heropanel' />
                                 </div>

        
 </div>




    <div className='fighter-slider main-padding'>
        <div className='container'>
            <div className='row'>
                    <div className='col-md-8 col-12'>
                        <div className='f-left'>
                        <div className='f-text'>
                        Fighter Profiles
                        </div>
                        <div className='f-title'>
                        Speed, strength, and heart
                        </div>
                        </div>
                       
                    </div>
                    <div className='col-md-4'>
                            <div className='f-right'>
                                <a href='#'>View More</a>
                            </div>
                    </div>

                    <div className='col-md-12'>
                        <div className='fighter-swiper'>
                        <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              pagination={{
                el: ".swiper-pagination-home", // default for desktop
                clickable: true,
              }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              spaceBetween={10}
              slidesPerView={5}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                  pagination: {
                    el: ".swiper-pagination-mobile", // progressbar on mobile
                    type: "progressbar",
                    clickable: true,
                  }
                },
                767: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                  pagination: {
                    el: ".swiper-pagination-home", // back to default
                    clickable: true,
                  }
                },
              }}
              className='fighter-swiper'
            >
              {fighters.map((fighter, index) => (
        <SwiperSlide key={index}>
          <div className="slider-content">
            <div className="slide-image">
              <img src={fighter.img} alt={fighter.name} />
            </div>
            <div className="swiper-text-content">
              <div className="name-slider">{fighter.name}</div>
              <div className="progile-name">{fighter.username}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
            

             
            </Swiper>

            <div className='m-btn'>
            <a href='#'>View More</a>
            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>

    {/* forum */}

    <div className='fighter-slider forum-section main-padding'>
        <div className='container'>
            <div className='row'>
                    <div className='col-md-8'>
                        <div className='f-left'>
                        <div className='f-text'>
                        Forum
                        </div>
                        <div className='f-title'>
                        Engage, Share, and Discuss
                        </div>
                        </div>
                       
                    </div>
                    <div className='col-md-4'>
                            <div className='f-right'>
                                <a href='#'>View More</a>
                            </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='forum-inner'>
                            <div className='forum-iamge'>
                                <img src={forumone} alt='forumone' />
                            </div>

                            <div className='forum-text-content'>
                                <div className='f-text'>
                                Forum
                                </div>

                                <div className='f-title'>
                                World Boxing Championship
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='forum-inner'>
                            <div className='forum-iamge'>
                                <img src={forumtwo} alt='forumone' />
                            </div>

                            <div className='forum-text-content'>
                                <div className='f-text'>
                                Highlighted - 2
                                </div>

                                <div className='f-title'>
                                Majestic Mountain Ranges
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='forum-inner'>
                            <div className='forum-iamge'>
                                <img src={forumthree} alt='forumone' />
                            </div>

                            <div className='forum-text-content'>
                                <div className='f-text'>
                                Highlighted - 3
                                </div>

                                <div className='f-title'>
                                High Altitude Havens
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className='m-btn'>
            <a href='#'>View More</a>
            </div>
            </div>
        </div>
    </div>

    {/* faqs-section */}

    <div className=' fighter-slider faqs-section main-padding'>
                    <div className='container'>
                        <div className='row'>
                        <div className='col-md-6'>
                                <div className='faqs-left'>
                                <div className='forum-text-content'>
                                <div className='f-text'>
                                FAQ’s
                                </div>

                                <div className='f-title'>
                                Find Your Answers Here
                                </div>


                            </div>

                            <div className='faqs-bottom'>
                            <div className='write'>
                            write to us at
                                </div>

                                <div className='faq-email'>
                                help@toolkit.info
                                </div>

                                <div className='faqs-button'>
                                  


                                <a href=''>
                                <i className="ri-phone-line"></i>
                                    Contact Us</a>
                                </div>
                            </div>

                            
                                </div>
                        </div>

                        <div className='col-md-6'>

                            <div className='faq-right'>
                            <div className="faqs-content">
                            <div className="faq-left">
                                <div className="faq-top">
                                    <div className="faqs-tit">What is NextFighter?</div>
                                </div>
                                <div
                                    className="faqs-toggle"
                                    onClick={() => setOpen1(!open1)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {open1 ? "-" : "+"}
                                </div>
                            </div>
                            {open1 && (
                                <div className="faqs-des">
                                    Booking a tour with TripNavigator is simple. Visit our website and browse through our selection of tours. Once you find a tour that interests you, click on it to view the details and availability. From there, you can follow the prompts to secure your booking and make the necessary payment.
                                </div>
                            )}
                        </div>



                        <div className="faqs-content">
                            <div className="faq-left">
                                <div className="faq-top">
                                    <div className="faqs-tit">What is the purpose of NextFighter ?</div>
                                </div>
                                <div
                                    className="faqs-toggle"
                                    onClick={() => setOpen2(!open2)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {open2 ? "-" : "+"}
                                </div>
                            </div>
                            {open2 && (
                                <div className="faqs-des">
                                   Booking a tour with TripNavigator is simple. Visit our website and browse through our selection of tours. Once you find a tour that interests you, click on it to view the details and availability. From there, you can follow the prompts to secure your booking and make the necessary payment.
                                </div>
                            )}
                        </div>


                        <div className="faqs-content">
                            <div className="faq-left">
                                <div className="faq-top">
                                    <div className="faqs-tit">What do you sell ?</div>
                                </div>
                                <div
                                    className="faqs-toggle"
                                    onClick={() => setOpen3(!open3)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {open3 ? "-" : "+"}
                                </div>
                            </div>
                            {open3 && (
                                <div className="faqs-des">
                                  Booking a tour with TripNavigator is simple. Visit our website and browse through our selection of tours. Once you find a tour that interests you, click on it to view the details and availability. From there, you can follow the prompts to secure your booking and make the necessary payment.
                                </div>
                            )}
                        </div>
                        <div className="faqs-content">
                            <div className="faq-left">
                                <div className="faq-top">
                                    <div className="faqs-tit">Do you have app apart of website?</div>
                                </div>
                                <div
                                    className="faqs-toggle"
                                    onClick={() => setOpen4(!open4)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {open4 ? "-" : "+"}
                                </div>
                            </div>
                            {open4 && (
                                <div className="faqs-des">
                                   Booking a tour with TripNavigator is simple. Visit our website and browse through our selection of tours. Once you find a tour that interests you, click on it to view the details and availability. From there, you can follow the prompts to secure your booking and make the necessary payment.
                                </div>
                            )}
                        </div>
                            </div>
                        
                        </div>

                        
                    </div>
                    </div>
    </div>


    {/* feed-section */}

    <div className=' feed-section main-padding'>
                                    <div className='container'>
                                    <div className='row'>
                                    <div className='col-md-8'>
                                <div className='f-text'>
                                Feed
                                </div>

                                <div className='f-title'>
                                Catch the Action, Enjoy Reels!
                                </div>

                                <div className='feed-desc'>
                                Define ambitious service benchmarks that challenge your team to strive achievable, inspiring everyone to aim higher.
                                </div>


                                    </div>

                                    <div className='col-md-4'>
                            <div className='f-right'>
                                <a href='#'>View More</a>
                            </div>
                            </div>

                            <div className='col-md-12'>
                        <div className='fighter-swiper'>
                        <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              pagination={{
                el: ".swiper-pagination-home", // default for desktop
                clickable: true,
              }}
            //   autoplay={{
            //     delay: 1000,
            //     disableOnInteraction: false,
            //   }}
              spaceBetween={10}
              slidesPerView={6}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                  pagination: {
                    el: ".swiper-pagination-mobile", // progressbar on mobile
                    type: "progressbar",
                    clickable: true,
                  }
                },
                767: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                  pagination: {
                    el: ".swiper-pagination-home", // back to default
                    clickable: true,
                  }
                },
              }}
              className='fighter-swiper'
            >
              {feed.map((fighter, index) => (
        <SwiperSlide key={index}>
          <div className="slider-content">
            <div className="slide-image">
              <img src={fighter.img} alt={fighter.name} />
            </div>
            <div className="swiper-text-content">
              <div className="feed-title">{fighter.name}</div>
              <div className="feed-view">{fighter.username}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
            

             
            </Swiper>
                        </div>
                    </div>
                    </div>
                                    </div>
    </div>

    {/* marketplace */}

    <div className=' feed-section marketplace-section main-padding'>
                    <div className='container'>
                        <div className='row'>
                        <div className='col-md-8'>
                                <div className='f-text'>
                                MarketPlace
                                </div>

                                <div className='f-title'>
                                Explore new arrivals
                                </div>

                                <div className='feed-desc'>
                                Define ambitious service benchmarks that challenge your team to strive achievable, inspiring everyone to aim higher.
                                </div>


                                    </div>

                                    <div className='col-md-4'>
                            <div className='f-right'>
                                <a href='#'>View More</a>
                            </div>
                            </div>


                            <div className='col-md-3 col-6'>
                                    <div className='market-inner'>
                                        <img src={marketone} className='marlet-two' alt='marketone' />
                                    </div>

                                    <div className='m-deatil'>
                                    <div className='shoes-t'>
                                    Casual Shoe
                                    </div>

                                    <div className='shoes-p'>
                                    $225
                                    </div>
                                    </div>
                            </div>

                            <div className='col-md-3 col-6'>
                            <div className='market-inner'>

                                <img src={markettwo} className='marlet-two' alt='markettwo' />
                            </div>

                            <div className='m-deatil'>
                                    <div className='shoes-t'>
                                    Casual Shoe
                                    </div>

                                    <div className='shoes-p'>
                                    $225
                                    </div>
                                    </div>
                            </div>

                            <div className='col-md-6 col-12'>
                            <div className='market-inner'>

                                <div>
                                <img  src={marketthree} className='market-t-img' alt='marketthree' />
                            </div>

                            
                            </div>

                            <div className='m-deatil'>
                                    <div className='shoes-t'>
                                    Casual Shoe
                                    </div>

                                    <div className='shoes-p'>
                                    $225
                                    </div>
                                    </div>
                            </div>
                        </div>


                            <div className='row mobile-market'>
                            <div className='col-md-6 col-12 order-3 order-md-1  '>
                            <div className='market-inner'>

                                <div>
                                <img  src={marketthree} className='market-t-img' alt='marketthree' />
                            </div>

                            
                            </div>

                            <div className='m-deatil'>
                                    <div className='shoes-t'>
                                    Casual Shoe
                                    </div>

                                    <div className='shoes-p'>
                                    $225
                                    </div>
                                    </div>
                            </div>

                            <div className='col-md-3 col-6 order-1 order-md-2  '>
                            <div className='market-inner'>

                                <img src={markettwo} className='marlet-two' alt='markettwo' />
                            </div>

                            <div className='m-deatil'>
                                    <div className='shoes-t'>
                                    Casual Shoe
                                    </div>

                                    <div className='shoes-p'>
                                    $225
                                    </div>
                                    </div>
                            </div>

                            <div className='col-md-3 col-6 order-1 order-md-3  '>
                                    <div className='market-inner'>
                                        <img src={marketone} className='marlet-two' alt='marketone' />
                                    </div>

                                    <div className='m-deatil'>
                                    <div className='shoes-t'>
                                    Casual Shoe
                                    </div>

                                    <div className='shoes-p'>
                                    $225
                                    </div>
                                    </div>
                            </div>

                            
                            </div>

                            <div className='btn-market'>
                            <a href='#'>View More</a>
                            </div>
                    </div>
    </div>
    


    <Footer/>

   

    





    </>
  )
}

export default Heropanel