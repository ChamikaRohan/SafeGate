import React, { useState } from 'react'
import './SigninPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash  } from '@fortawesome/free-solid-svg-icons';


export default function SigninPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
    <div className="mainContainer">
        <div className="subContainer">
            <label className='topic'>Hello Again!</label>
            <label className='subtopic'>Explore More by <br />connecting with us...</label>
            <form className='form'>
                <input placeholder="Email" type="email" />
                <div class="passwordContainer">
                    <input type={showPassword? "": "password"} class="passwordInput" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button type="button" className="viewPasswordBtn" onClick={togglePasswordVisibility}>{showPassword? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}</button>
                </div>
                <button className='btn'>Register</button>
            </form>
            <div className='bottomContainer'>
                <label className='bottomFText' >Not a Member?</label>
                <label className='bottomSText' >Register now</label>
            </div>
        </div>
    </div>
  )
}
