import React from "react";
import HeaderMain from "./HeaderMain";
import "../style/home.css";

import fighterprofileimg from "../Assets/profileimage.webp";
import sliderinnerone from "../Assets/slider-inner-one.webp";
import sliderinnertwo from "../Assets/slider-inner-two.webp";
import sliderinnerthree from "../Assets/slider-inner-three.webp";
import sliderinnerfour from "../Assets/slider-inner-four.webp";
import sliderinnerfive from "../Assets/slider-inner-five.webp";
import Footer from "./Footer";

const FighterSliderpage = () => {
  return (
    <>
      <HeaderMain />
      <div className="fightersliderpage">
        <div className="container">
          <div className="col-md-12">
            <div className="fightersliderpage-inner">
              <div className="fighterslider-profile">
                <div className="fighterslider-img">
                  <img src={fighterprofileimg} alt="fighterprofileimgfrom" />
                </div>

                <div className="fighterslider-profile-detail">
                  <div className="fighterslider-profile-detail-left">
                    <div className="fighterslider-profile-detail-right">
                      <div className="f-s-name">Jack Dorsee</div>

                      <a href="#" className="edit">
                        Edit Profile
                      </a>
                    </div>
                    <div className="f-s-title">UFC_Fighter</div>

                    <div className="f-s-desc">
                      No fear. No mercy. Just fists, fire, and the will to
                      dominate.
                    </div>

                    <a href="#" className="edit edit-mobile">
                      Edit Profile
                    </a>
                  </div>
                </div>
              </div>
              <div className="viewer-secction">
                <div className="viewer-detail">
                  <div className="likes">100</div>
                  <div className="likes-text">Likes</div>
                </div>

                <div className="viewer-detail">
                  <div className="likes">2.4M</div>
                  <div className="likes-text">Followers</div>
                </div>

                <div className="viewer-detail">
                  <div className="likes">100</div>
                  <div className="likes-text">Following</div>
                </div>
              </div>
            </div>

            <hr></hr>

            <div className="fightersliderpage-inner slider-iiner-images">
              <img src={sliderinnerone} alt="sliderinnerone" />
              <img src={sliderinnertwo} alt="sliderinnerone" />
              <img src={sliderinnerthree} alt="sliderinnerone" />
              <img src={sliderinnerfour} alt="sliderinnerone" />
              <img src={sliderinnerfive} alt="sliderinnerone" />
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default FighterSliderpage;
