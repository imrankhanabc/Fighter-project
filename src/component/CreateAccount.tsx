import React from 'react'
import '../style/login.css'
import logo from '../Assets/logo.webp'
import createright from '../Assets/create-image.png'
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";


const CreateAccount = () => {
 const [showPassword, setShowPassword] = React.useState(false);
    return (

        <div className='create-page'>
            <div className='create-left'>
                <div className='logo-content'>
                    <div className='logo'>
                        <img src={logo} alt='logo' />

                    </div>

                    <div className='c-title'>
                        Create your Account
                    </div>
                    <div className='c-text'>
                        Create an account to continue
                    </div>
                </div>

                <div className='create-form'>
                    <div className='input-box'>
                        <label>Enter First Name </label><span className='label-clr'>*</span><br></br>
                        <input placeholder='abc' type='text' />
                    </div>
                    <div className='input-box'>
                        <label>Enter Last Name </label><span className='label-clr'>*</span><br></br>
                        <input placeholder='abc' type='text' />
                    </div>
                    <div className='input-box'>
                        <label>Enter Email </label><span className='label-clr'>*</span><br></br>
                        <input placeholder='abc@gmail.com' type='Email' />
                    </div>
                    <div className="input-box">
                        <label>Password</label><span className='label-clr'>*</span><br />
                        <div className="password-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="*****"
                            />
                            <span
                                className="toggle-icon"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                            </span>
                        </div>
                    </div>
                    <a href='#' className='btn-default'>Get Started</a>

                    <p className='login'>Already have an account? <a href='#'>Login</a></p>
                </div>

            </div>

            <div className='create-right'>
                <div className='image'>
                    <img src={createright} alt='' />
                </div>
            </div>

            
        </div>

    )
}

export default CreateAccount