import React from 'react'

import HeaderMain from "./HeaderMain";
import "../style/home.css";

import viewstoreprofile from '../Assets/viewstore-profile.webp'
import viewstoreimage from '../Assets/viewstoreimage.webp'

import Footer from "./Footer";

const Viewstore = () => {
 return (
    <>
      <HeaderMain />
      <div className="fightersliderpage viewstore-profile">
        <div className="container">
          <div className="col-md-12">
            <div className="fightersliderpage-inner">
              <div className="fighterslider-profile">
                <div className="fighterslider-img">
                  <img src={viewstoreprofile} alt="fighterprofileimgfrom" />
                </div>

                <div className="fighterslider-profile-detail">
                  <div className="fighterslider-profile-detail-left">
                    <div className="fighterslider-profile-detail-right">
                      <div className="f-s-name">Alpha Strike</div>

                      <a href="#" className="edit">
                        Add Product
                      </a>
                    </div>
                    <div className="f-s-title">Boxing Store</div>

                    <div className="f-s-desc">
                     We deliver premium quality boxing accessories
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
              <img src={viewstoreimage} alt="sliderinnerone" />
              <img src={viewstoreimage} alt="sliderinnerone" />
              <img src={viewstoreimage} alt="sliderinnerone" />
              <img src={viewstoreimage} alt="sliderinnerone" />
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Viewstore