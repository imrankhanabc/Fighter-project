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

            <div className='input-box options-box'>
                <div className='drop-dwon-option'>
                       <label>Height</label>
      <div className="input-wrapper">
        {/* <label htmlFor="cars">Choose a car:</label> */}
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
        {/* <label htmlFor="cars">Choose a car:</label> */}
  <select name="cars" id="cars" className="custom-select">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
      </div>
                </div>
              
            </div>
     
      </div>
    </div>
  ) 
}

export default CreateProfile