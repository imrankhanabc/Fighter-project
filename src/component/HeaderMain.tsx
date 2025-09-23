import React from "react";
import headerlogo from "../Assets/header-logo.webp";
import headerlogin from "../Assets/header-login.png";
import profile from "../Assets/profile.webp";
import bag from "../Assets/bag.webp";
import logout from "../Assets/logout.webp";
import { NavLink } from "react-router-dom";
import menuicon from '../Assets/menu-icon.webp'

import "../style/home.css";
import '../style/login.css'

const HeaderMain = () => {

   const [menuOpen, setMenuOpen] = React.useState(false);
    const [showInput, setShowInput] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="header-main">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6">
            <div className="header-logo">
              <img src={headerlogo} alt="logo" />
            </div>
          </div>


           <div className="col-md-4 col-6 formobile">
            <div className="formobile-setting">
              <div className="humburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
              <img src={menuicon} alt=""/>
            </div>
            <div className="header-login">
             
              <div className="profile-login">
                {/* Login Image */}
                <img
                  src={headerlogin}
                  alt="login"
                  onClick={toggleDropdown}
                  style={{ cursor: "pointer" }}
                />

                {/* Dropdown Menu */}
                {open && (
                  <div className="login-drop">
                    <ul>
                      <li>
                        <a href="#">
                          <div className="login-inner">
                            <div className="drop-image">
                              <img src={profile} alt="" />
                            </div>
                            <div className="login-text">Profile</div>
                          </div>
                        </a>
                      </li>

                      <li>
                        <a href="storecreate">
                          <div className="login-inner">
                            <div className="drop-image">
                              <img src={bag} alt="" />
                            </div>
                            <div className="login-text">View Store</div>
                          </div>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <div className="login-inner">
                            <div className="drop-image">
                              <img src={logout} alt="" />
                            </div>
                            <div className="login-text l-text">Logout</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              {/*  */}
            </div>
              </div>
            
          </div>

          {/* <div className="col-md-5 col-12"> */}

            <div className={`col-md-5 col-12 header-menu ${menuOpen ? "show-menu" : ""}`}>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/forum"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Forums
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/reels"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Reels
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/marketplace"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Marketplace
                  </NavLink>
                </li>
              </ul>
            </div>

            
          {/* </div> */}

         

          <div className="col-md-4 fordesktop">

            <div className="humburger-icon">
              <img src={menuicon} alt=""/>
            </div>
            <div className="header-login">
              {/* <div className="header-search">
                <i className="ri-search-line"></i>
              </div> */}
              {/*  */}
              <div 
        className="header-search-icon" 
        onClick={() => setShowInput(!showInput)}
        style={{ cursor: 'pointer' }}
      >
           <div className="header-search"> 

        <i className="ri-search-line"></i>
        </div>
      </div>

      {/* Conditional Input */}
      {showInput && (
        <input 
          type="text" 
          placeholder="Search..." 
          className="header-search-input"
        />
      )}
              {/*  */}
             
              <div className="profile-login">
                {/* Login Image */}
                <img
                  src={headerlogin}
                  alt="login"
                  onClick={toggleDropdown}
                  style={{ cursor: "pointer" }}
                />

                {/* Dropdown Menu */}
                {open && (
                  <div className="login-drop">
                    <ul>
                      <li>
                        <a href="#">
                          <div className="login-inner">
                            <div className="drop-image">
                              <img src={profile} alt="" />
                            </div>
                            <div className="login-text">Profile</div>
                          </div>
                        </a>
                      </li>

                      <li>
                        <a href="storecreate">
                          <div className="login-inner">
                            <div className="drop-image">
                              <img src={bag} alt="" />
                            </div>
                            <div className="login-text">View Store</div>
                          </div>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <div className="login-inner">
                            <div className="drop-image">
                              <img src={logout} alt="" />
                            </div>
                            <div className="login-text l-text">Logout</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
