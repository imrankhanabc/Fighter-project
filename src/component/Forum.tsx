import React from "react";
import forumprofile from "../Assets/forum-profile.webp";

import fchat from "../Assets/f-chat.webp";
import fheart from "../Assets/f-heart.webp";
import fshare from "../Assets/f-octagon.webp";

import mainprofileone from "../Assets/main-profile-one.webp";
import mainprofiletwo from "../Assets/main-profile-two.webp";
import commentpic from "../Assets/comment-pic.webp";
import great from'../Assets/great.webp';

const Forum = () => {
  return (
    <div className="forum-page">
      <div className="form-content">
        <div className="container">
          <div className="row">
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
              <div className="forum-data">
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
              </div>

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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-divider"></div>


        <div className="container">
            <div className="row">
                    <div className="col-md-12">
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
                    <img src={great} alt="commentpicfrom" />
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
              </div>
                    </div>
            </div>
        </div>


      <div className="border-divider"></div>


      <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="forum-data">
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
              </div>

              <div className="forum-data">
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
              </div>
                </div>
            </div>
      </div>


    </div>
  );
};

export default Forum;
