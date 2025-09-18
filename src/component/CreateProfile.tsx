import React from 'react'
import imgselect from '../Assets/image-select.webp'
import profileimage from '../Assets/profileimage.webp'
import { FaEdit } from "react-icons/fa"; // edit icon
import { useRef } from "react";
import '../style/login.css'
import Footer from './Footer';
import Header from './Header';


const CreateProfile = () => {
  // one state for each image
  const [profilePreview, setProfilePreview] = React.useState<string>(profileimage);
  const [selectPreview, setSelectPreview] = React.useState<string>(imgselect);

  // separate refs
  const profileInputRef = useRef<HTMLInputElement | null>(null);
  const selectInputRef = useRef<HTMLInputElement | null>(null);

  // open file pickers
  const handleProfileClick = () => profileInputRef.current?.click();
  const handleSelectClick = () => selectInputRef.current?.click();

  // handle file change separately
  const handleProfileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePreview(imageUrl); // update only profile image
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectPreview(imageUrl); // update only select image
    }
  };
  return (
    <>

    <Header/>
    <div className='create-profile-page'>
        <div className='create-profile-heading'>
            <div className='profile-title'>
            Create Profile
            </div>
            <div className='profile-text'>
                Create your <span> profile</span> and showcase your skills
            </div>

            <div className='profile-image' >
                        <img src={profilePreview} alt='profileimage' />
            </div>
            <p className='changeprofile'  onClick={handleProfileClick}>Change Profile Picture</p>


             {/* Hidden file input */}
             <input
          type="file"
          accept="image/*"
          ref={profileInputRef}
          style={{ display: "none" }}
          onChange={handleProfileChange}
        />


            </div>

          <div className="form-group">
            <div className='input-box'>
                 <label>Name</label>
      <div className="input-wrapper">
        <input type="text" placeholder="User_abc" />
        <FaEdit className="edit-icon" />
      </div>
            </div>

             <div className='input-box'>
                 <label>DOB</label>
      <div className="input-wrapper">
        <input type="date" placeholder="28/05/2000" />
        {/* <FaEdit className="edit-icon" /> */}
      </div>
            </div>

            <div className='input-box'>
                 <label>Age</label>
      <div className="input-wrapper">
        <input type="text" placeholder="25 Years" />
        <FaEdit className="edit-icon" />
      </div>
            </div>

            <div className='input-box option-box'>
  <div className='drop-dwon-option'>
    <label>Height</label>
    <div className="input-wrapper">
      <select name="cars" id="cars" className="custom-select">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  </div>

  <div className='drop-dwon-option'>
    <label>Height</label>
    <div className="input-wrapper">
      <select name="cars" id="cars" className="custom-select">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  </div>
</div>
 <div className='input-box option-box'>
  <div className='drop-dwon-option'>
    <label>Handed</label>
    <div className="input-wrapper">
      <select name="cars" id="cars" className="custom-select">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  </div>

  <div className='drop-dwon-option'>
    <label>Discipline</label>
    <div className="input-wrapper">
      <select name="cars" id="cars" className="custom-select">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  </div>
</div>

<div className='experience-input'>
    <div className='input-box'>
                 <label>Experience</label>
      <div className="input-wrapper">
        <input type="text" placeholder="12" />
        <FaEdit className="edit-icon" />
      </div>
            </div>

            <div className='input-box'>
                 <label>Title/Tournaments</label>
      <div className="input-wrapper">
        <input type="text" placeholder="5" />
        <FaEdit className="edit-icon" />
      </div>
            </div>
    </div>

     <div className='input-box'>
                 <label>Bio</label>
      <div className="input-wrapper">
        <input type="text" placeholder="No fear. No mercy. Just fists, fire, and the will to dominate." />
        <FaEdit className="edit-icon" />
      </div>
            </div>


            <div className='input-box'>
                 <label>Fighter Type</label>
      <div className="input-wrapper">
        <input type="text" placeholder="Fighter Type" />
        <FaEdit className="edit-icon" />
      </div>
            </div>
          <div>

          </div>
      
          <div className='image-selct-text'>
            <label>Images</label>
      <div className='images-select' onClick={handleSelectClick}>
          <img src={selectPreview} alt='profileimage' />
        </div>
      </div>

      <div className='image-selct-text'>
            <label>Videos</label>
      <div className='images-select' onClick={handleSelectClick}>
          <img src={selectPreview} alt='profileimage' />
        </div>
      </div>


      <input
          type="file"
          accept="image/*"
          ref={selectInputRef}
          style={{ display: "none" }}
          onChange={handleSelectChange}
        />

<div className='input-box'>
                 <label>Video Link</label>
      <div className="input-wrapper">
        <input type="text" placeholder="https://youtu.be/5URwcJAHUS8?si=FbPb_rq8LWUYdlrK" />
        <FaEdit className="edit-icon" />
      </div>
            </div>

            <a href='#' className='btn-default'> Save</a>
      </div>


      
      
    </div>
      <Footer/>
</>
  ) 
}

export default CreateProfile