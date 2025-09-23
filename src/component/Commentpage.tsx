import React from 'react'

import '../style/home.css'



import forumprofile from "../Assets/forum-profile.webp";

import fchat from "../Assets/f-chat.webp";
import fheart from "../Assets/f-heart.webp";
import fshare from "../Assets/f-octagon.webp";

import mainprofileone from "../Assets/main-profile-one.webp";
import mainprofiletwo from "../Assets/main-profile-two.webp";
import commentpic from "../Assets/comment-pic.webp";
import great from'../Assets/great.webp';

import commentsectionomage from "../Assets/comment-sec-pic.webp";
import mainimagecomment from '../Assets/main-comment-image.webp';

import commitimg from '../Assets/commit-modal-img.webp'
import HeaderMain from './HeaderMain';
import Footer from './Footer';

const Commentpage = () => {
  return (

<>


 {/* model */}
    <div>
      <div
        className="modal fade search-modal comment-modal"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
               {/* <span><i className="ri-arrow-left-line"></i></span> Filter */}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">

                  <div className='comment-modal-inner'>
                     <div className='modal-img'>
                      <img src={commitimg} alt='commitimgfrom' />
                      </div>  

                      <h5>Why are you reporting this post?</h5>



                       <div className='radio-content'>
                            <div className='radio-inner'>
                            <input type="radio" id="html" name="fav_language" value="HTML"/>
                            <label htmlFor="html">I just don’t like it</label>

                            </div>

                            <div className='radio-inner'>
                            <input type="radio" id="html" name="fav_language" value="HTML"/>

                      <label htmlFor="html">Harassment or Bullying</label>

                            </div>

                            <div className='radio-inner'>
                            <input type="radio" id="html" name="fav_language" value="HTML"/>

                      <label htmlFor="html">Violence or Dangerous Organisatior</label>

                            </div>

                            <div className='radio-inner'>
                            <input type="radio" id="html" name="fav_language" value="HTML"/>

                      <label htmlFor="html">Hate Speech or Symbols</label>

                            </div>

                            <div className='radio-inner'>
                            <input type="radio" id="html" name="fav_language" value="HTML"/>

                      <label htmlFor="html">Its a spam</label>

                            </div>

                            <div className='radio-inner'>
                            <input type="radio" id="html" name="fav_language" value="HTML"/>

                      <label htmlFor="html">Misinformation</label>

                            </div>

                            <div className='radio-inner'>
                            <input type="radio" id="html" name="fav_language" value="HTML"/>

                      <label htmlFor="html">False Information</label>

                            </div>

                            <div className='radio-inner'>
                            <input type="radio" id="html" name="fav_language" value="HTML"/>

                      <label htmlFor="html">Intellectual Property</label>

                            </div>
                        </div>
                    </div>
                   

                      

                        <div className="footer-modal">
              <a className='filter'>
              Cancel

              </a>
              <a className='filter apply'>
              Report
              </a>
            </div>

              
              </div>
           
          </div>
        </div>
      </div>
    </div>

{/* modal end */}

<HeaderMain/>

    <div className='forum-page comment-page'>
            <div className='container'>
                <div className='row'>
                <div className="col-md-12">
              <div className="forum-tabs">
                <button className="active">All</button>
                <button>Traning</button>

                <button>Events</button>

                <button>Fight Talk</button>

                <button>Callout</button>

                <button>Friends Birthday</button>
              </div>
            </div>


            <div className="col-md-12">
              {/* <div className="forum-data">
                <div className="forum-profile-sec-data">
                  <div className="f-profile-pic">
                    <img src={forumprofile} alt="forumprofileimgfrom" />
                  </div>

                  <div className="main-profile-sec-images">
                    <div className="main-profile-sec-images-inner">
                      <img
                        src={mainprofileone}
                        alt="mainprofileimgfrom"
                        className="main-one-profile"
                      />
                      <img
                        src={mainprofiletwo}
                        alt="mainprofileimgfrom"
                        className="main-two-profile"
                      />
                    </div>
                  </div>
                </div>

                <div className="f-profile-data">
                  <div className="f-profile-name">
                    User_abc <span>. 7h</span>
                  </div>

                  <div className="f-user-data">
                    Charlo Vs CrawFord Who’s gonna win this big match which is
                    happening on July 28. Its going to be an epic match betwee
                    these 2 legend boxers.
                  </div>

                  <div className="f-profile-hashtag">
                    #Training #Events #Fight #Callouts
                  </div>

                  <div className="user-like-content">
                    <div className="f-chat">
                      <img src={fheart} alt="fchatimgfrom" />
                    </div>

                    <div className="f-chat">
                      <img src={fchat} alt="fchatimgfrom" />
                    </div>

                    <div className="f-chat">
                      <img src={fshare} alt="fchatimgfrom" />
                    </div>
                  </div>

                  <div className="reply-content">
                    <div className="reply-text">
                    6 replies
                    </div>

                    <div className="reply-dot">

                    </div>

                    <div className="reply-text">
                    30 likes
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="forum-data">
                <div className="forum-profile-sec-data second-border">
                  <div className="f-profile-pic">
                    <img src={forumprofile} alt="forumprofileimgfrom" />
                  </div>

                  <div className="main-profile-sec-images">
                    <div className="main-profile-sec-images-inner">
                      <img
                        src={mainprofileone}
                        alt="mainprofileimgfrom"
                        className="main-one-profile"
                      />
                      <img
                        src={mainprofiletwo}
                        alt="mainprofileimgfrom"
                        className="main-two-profile"
                      />
                    </div>
                  </div>
                </div>

                <div className="f-profile-data">
                  <div className="f-profile-name">
                    User_abc <span>. 7h</span>
                  </div>

                  <div className="f-user-data">
                    Charlo Vs CrawFord Who’s gonna win this big match which is
                    happening on July 28. Its going to be an epic match betwee
                    these 2 legend boxers.
                  </div>

                  <div className="f-profile-hashtag">
                    #Training #Events #Fight #Callouts
                  </div>

                  <div className="comment-pic">
                    <img src={commentpic} alt="commentpicfrom" />
                  </div>

                  <div className="user-like-content">
                    <div className="f-chat">
                      <img src={fheart} alt="fchatimgfrom" />
                    </div>

                    <div className="f-chat">
                      <img src={fchat} alt="fchatimgfrom" />
                    </div>

                    <div className="f-chat">
                      <img src={fshare} alt="fchatimgfrom"
                      data-bs-toggle="modal"
    data-bs-target="#exampleModal"
      style={{cursor: 'pointer'}}
                      />
                    </div>
                  </div>

                  <div className="reply-content">
                    <div className="reply-text">
                    6 replies
                    </div>

                    <div className="reply-dot">

                    </div>

                    <div className="reply-text">
                    30 likes
                    </div>
                  </div>
                </div>
              </div>


            </div>
                </div>
            </div>


      <div className="border-divider"></div>

                <div className='comment-section'>
                    <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                                <div className='comment-section-inner'>
                                    <div className='comment-sec-left'>
                                        <div className='c-s-im'>
                                        <img src={commentsectionomage} alt="commentsectionomagefrom" />
                                        </div>

                                        <div className='input'>
                                        <input type="text" placeholder='Type Here' />
                                        </div>
                                    </div>

                                    <div className='post-btn'>
                                        Post
                                    </div>
                                </div>


                                <div className='comment-section-inner comment-data'>
                                    <div className='comment-sec-left'>
                                        <div className='c-s-im'>
                                        <img src={mainimagecomment} alt="commentsectionomagefrom" />
                                        </div>

                                        <div className='input'> 
                                        Angela Arden <span> . 7</span>
                                        <p>Concordo...</p>
                                        </div>
                                    </div>

                                    {/* <div className='post-btn'>
                                        Post
                                    </div> */}
                                </div>

                                <div className='comment-section-inner comment-data'>
                                    <div className='comment-sec-left'>
                                        <div className='c-s-im'>
                                        <img src={mainimagecomment} alt="commentsectionomagefrom" />
                                        </div>

                                        <div className='input'> 
                                        Angela Arden <span> . 7</span>
                                        <p>Concordo...</p>
                                        </div>
                                    </div>

                                    {/* <div className='post-btn'>
                                        Post
                                    </div> */}
                                </div>

                                <div className='comment-section-inner comment-data'>
                                    <div className='comment-sec-left'>
                                        <div className='c-s-im'>
                                        <img src={mainimagecomment} alt="commentsectionomagefrom" />
                                        </div>

                                        <div className='input'> 
                                        Angela Arden <span> . 7</span>
                                        <p>Concordo...</p>
                                        </div>
                                    </div>

                                    {/* <div className='post-btn'>
                                        Post
                                    </div> */}
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

export default Commentpage