import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination, Scrollbar } from "swiper/modules";
import { Autoplay,Mousewheel  } from "swiper/modules";

import sliderprofile from "../Assets/slider-profile.webp";
import tone from "../Assets/tone-icon.webp";
import slidermainimage from "../Assets/slider-image-reel.webp";

import chat from "../Assets/chat.webp";
import heart from "../Assets/heart.webp";
import share from "../Assets/share.webp";

import "../style/reel.css";
import HeaderMain from "./HeaderMain";
import Footer from "./Footer";

const Reels = () => {
  return (
    <>

    <HeaderMain/>
      <div className="reels-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="reel-vertical-swiper">
                <Swiper
                  direction={"vertical"}
                  slidesPerView={1}
                  spaceBetween={10}
                //   autoplay={{
                //     delay: 3000, // 3 seconds per slide
                //     disableOnInteraction: false, // keep autoplay after user swipes
                //   }}
                   modules={[Autoplay, Mousewheel]}  // Add Mousewheel module
  mousewheel={{ forceToAxis: true, releaseOnEdges: false }} // important
                  className="mySwiper"
                  breakpoints={{
                    768: {
                      slidesPerView: 1,
                    //   allowTouchMove: true,
                    },
                    0: {
                      slidesPerView: 1,
                    //   allowTouchMove: true,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="vertical-slider-content">
                      <div className="slider-profile-data">
                        <div className="slider-profile-img">
                          <img src={sliderprofile} alt="sliderprofileimgfrom" />
                        </div>

                        <div className="profile-data">
                          <div className="profile-data-left">
                            <div className="profile-name">
                              haras191 <span>haras191</span>
                            </div>

                            <div className="track-name">
                              <img src={tone} alt="" /> original sound -
                              khalid.awan777
                            </div>
                          </div>

                          <div className="profile-data-right">
                            <button>Follow</button>
                          </div>
                        </div>
                      </div>

                      <div className="slider-image-viewer">
                        <div className="slider-main-image">
                          <img
                            src={slidermainimage}
                            alt="slidermainimagefrom"
                          />

                          <div className="chat-data">
                            <div className="chat-left">
                              <div className="image-title">@Jack_Dorsee_28</div>

                              <div className="image-hash-tag">
                                #foryou #Edits #trending#UFC #explorepage
                                #Boxing #trending #Fight #explore
                              </div>

                              <div className="image-track">
                                original sound - aliimamrafi0 -
                              </div>
                            </div>

                            <div className="image-upper-right">
                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={chat} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">12k</div>
                              </div>

                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={heart} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">12k</div>
                              </div>

                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={share} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">128</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="vertical-slider-content">
                      <div className="slider-profile-data">
                        <div className="slider-profile-img">
                          <img src={sliderprofile} alt="sliderprofileimgfrom" />
                        </div>

                        <div className="profile-data">
                          <div className="profile-data-left">
                            <div className="profile-name">
                              haras191 <span>haras191</span>
                            </div>

                            <div className="track-name">
                              <img src={tone} alt="" /> original sound -
                              khalid.awan777
                            </div>
                          </div>

                          <div className="profile-data-right">
                            <button>Follow</button>
                          </div>
                        </div>
                      </div>

                      <div className="slider-image-viewer">
                        <div className="slider-main-image">
                          <img
                            src={slidermainimage}
                            alt="slidermainimagefrom"
                          />

                          <div className="chat-data">
                            <div className="chat-left">
                              <div className="image-title">@Jack_Dorsee_28</div>

                              <div className="image-hash-tag">
                                #foryou #Edits #trending#UFC #explorepage
                                #Boxing #trending #Fight #explore
                              </div>

                              <div className="image-track">
                                original sound - aliimamrafi0 -
                              </div>
                            </div>

                            <div className="image-upper-right">
                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={chat} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">12k</div>
                              </div>

                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={heart} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">12k</div>
                              </div>

                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={share} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">128</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="vertical-slider-content">
                      <div className="slider-profile-data">
                        <div className="slider-profile-img">
                          <img src={sliderprofile} alt="sliderprofileimgfrom" />
                        </div>

                        <div className="profile-data">
                          <div className="profile-data-left">
                            <div className="profile-name">
                              haras191 <span>haras191</span>
                            </div>

                            <div className="track-name">
                              <img src={tone} alt="" /> original sound -
                              khalid.awan777
                            </div>
                          </div>

                          <div className="profile-data-right">
                            <button>Follow</button>
                          </div>
                        </div>
                      </div>

                      <div className="slider-image-viewer">
                        <div className="slider-main-image">
                          <img
                            src={slidermainimage}
                            alt="slidermainimagefrom"
                          />

                          <div className="chat-data">
                            <div className="chat-left">
                              <div className="image-title">@Jack_Dorsee_28</div>

                              <div className="image-hash-tag">
                                #foryou #Edits #trending#UFC #explorepage
                                #Boxing #trending #Fight #explore
                              </div>

                              <div className="image-track">
                                original sound - aliimamrafi0 -
                              </div>
                            </div>

                            <div className="image-upper-right">
                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={chat} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">12k</div>
                              </div>

                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={heart} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">12k</div>
                              </div>

                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={share} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">128</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="vertical-slider-content">
                      <div className="slider-profile-data">
                        <div className="slider-profile-img">
                          <img src={sliderprofile} alt="sliderprofileimgfrom" />
                        </div>

                        <div className="profile-data">
                          <div className="profile-data-left">
                            <div className="profile-name">
                              haras191 <span>haras191</span>
                            </div>

                            <div className="track-name">
                              <img src={tone} alt="" /> original sound -
                              khalid.awan777
                            </div>
                          </div>

                          <div className="profile-data-right">
                            <button>Follow</button>
                          </div>
                        </div>
                      </div>

                      <div className="slider-image-viewer">
                        <div className="slider-main-image">
                          <img
                            src={slidermainimage}
                            alt="slidermainimagefrom"
                          />

                          <div className="chat-data">
                            <div className="chat-left">
                              <div className="image-title">@Jack_Dorsee_28</div>

                              <div className="image-hash-tag">
                                #foryou #Edits #trending#UFC #explorepage
                                #Boxing #trending #Fight #explore
                              </div>

                              <div className="image-track">
                                original sound - aliimamrafi0 -
                              </div>
                            </div>

                            <div className="image-upper-right">
                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={chat} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">12k</div>
                              </div>

                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={heart} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">12k</div>
                              </div>

                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={share} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">128</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="vertical-slider-content">
                      <div className="slider-profile-data">
                        <div className="slider-profile-img">
                          <img src={sliderprofile} alt="sliderprofileimgfrom" />
                        </div>

                        <div className="profile-data">
                          <div className="profile-data-left">
                            <div className="profile-name">
                              haras191 <span>haras191</span>
                            </div>

                            <div className="track-name">
                              <img src={tone} alt="" /> original sound -
                              khalid.awan777
                            </div>
                          </div>

                          <div className="profile-data-right">
                            <button>Follow</button>
                          </div>
                        </div>
                      </div>

                      <div className="slider-image-viewer">
                        <div className="slider-main-image">
                          <img
                            src={slidermainimage}
                            alt="slidermainimagefrom"
                          />

                          <div className="chat-data">
                            <div className="chat-left">
                              <div className="image-title">@Jack_Dorsee_28</div>

                              <div className="image-hash-tag">
                                #foryou #Edits #trending#UFC #explorepage
                                #Boxing #trending #Fight #explore
                              </div>

                              <div className="image-track">
                                original sound - aliimamrafi0 -
                              </div>
                            </div>

                            <div className="image-upper-right">
                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={chat} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">12k</div>
                              </div>

                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={heart} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">12k</div>
                              </div>

                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={share} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">128</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="vertical-slider-content">
                      <div className="slider-profile-data">
                        <div className="slider-profile-img">
                          <img src={sliderprofile} alt="sliderprofileimgfrom" />
                        </div>

                        <div className="profile-data">
                          <div className="profile-data-left">
                            <div className="profile-name">
                              haras191 <span>haras191</span>
                            </div>

                            <div className="track-name">
                              <img src={tone} alt="" /> original sound -
                              khalid.awan777
                            </div>
                          </div>

                          <div className="profile-data-right">
                            <button>Follow</button>
                          </div>
                        </div>
                      </div>

                      <div className="slider-image-viewer">
                        <div className="slider-main-image">
                          <img
                            src={slidermainimage}
                            alt="slidermainimagefrom"
                          />

                          <div className="chat-data">
                            <div className="chat-left">
                              <div className="image-title">@Jack_Dorsee_28</div>

                              <div className="image-hash-tag">
                                #foryou #Edits #trending#UFC #explorepage
                                #Boxing #trending #Fight #explore
                              </div>

                              <div className="image-track">
                                original sound - aliimamrafi0 -
                              </div>
                            </div>

                            <div className="image-upper-right">
                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={chat} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">12k</div>
                              </div>

                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={heart} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">12k</div>
                              </div>

                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={share} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">128</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="vertical-slider-content">
                      <div className="slider-profile-data">
                        <div className="slider-profile-img">
                          <img src={sliderprofile} alt="sliderprofileimgfrom" />
                        </div>

                        <div className="profile-data">
                          <div className="profile-data-left">
                            <div className="profile-name">
                              haras191 <span>haras191</span>
                            </div>

                            <div className="track-name">
                              <img src={tone} alt="" /> original sound -
                              khalid.awan777
                            </div>
                          </div>

                          <div className="profile-data-right">
                            <button>Follow</button>
                          </div>
                        </div>
                      </div>

                      <div className="slider-image-viewer">
                        <div className="slider-main-image">
                          <img
                            src={slidermainimage}
                            alt="slidermainimagefrom"
                          />

                          <div className="chat-data">
                            <div className="chat-left">
                              <div className="image-title">@Jack_Dorsee_28</div>

                              <div className="image-hash-tag">
                                #foryou #Edits #trending#UFC #explorepage
                                #Boxing #trending #Fight #explore
                              </div>

                              <div className="image-track">
                                original sound - aliimamrafi0 -
                              </div>
                            </div>

                            <div className="image-upper-right">
                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={chat} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">12k</div>
                              </div>

                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={heart} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">12k</div>
                              </div>

                              <div className="chat-innerdata">
                                <div className="chat-image">
                                  <img src={share} alt="chatimgfrom" />
                                </div>
                                <div className="chat-viewer">128</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Reels;
