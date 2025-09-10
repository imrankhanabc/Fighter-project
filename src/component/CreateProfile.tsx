import React from 'react'
import profileimage from '../Assets/profileimage.webp'
import { FaEdit } from "react-icons/fa"; // edit icon

const CreateProfile = () => {
  return (
    <div className='create-profile-page'>
        <div className='create-profile-heading'>
            <div className='profile-title'>
            Create Profile
            </div>
            <div className='profile-text'>
                Create your <span> profile</span> and showcase your skills
            </div>

            <div className='profile-image'>
                        <img src={profileimage} alt='profileimage' />
            </div>

            <p className='changeprofile'>Change Profile Picture</p>

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


     
      </div>
    </div>
  ) 
}

export default CreateProfile