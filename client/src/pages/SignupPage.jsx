import React, { useState } from 'react'
import './SignupPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash  } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'


export default function SignupPage() {
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
  
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const goToSignin = ()=>{
        navigate("/signin");
    };
    return (
    <div className="mainContainer">
        <div className="subContainer">
            <label className='topic'>Register</label>
            <form className='form'>
                <input placeholder="First name" />
                <input placeholder="Last name" />
                <input placeholder="Email" type="email" />
                <div class="passwordContainer">
                    <input type={showPassword? "": "password"} class="passwordInput" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button type="button" className="viewPasswordBtn" onClick={togglePasswordVisibility}>{showPassword? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}</button>
                </div>
                <button className='btn'>Register</button>
            </form>
            <div className='bottomContainer'>
                <label className='bottomFText' >Already Register?</label>
                <label onClick={goToSignin} className='bottomSText' >Login now</label>
            </div>
        </div>
    </div>
  )
}
