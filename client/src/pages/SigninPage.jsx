import React, { useState } from 'react'
import './SigninPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash  } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SigninPage() {
    const apiURL = import.meta.env.VITE_API_BASE_URL;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [signinmsg,setSigninmsg] = useState();
    const [signinerror,setSigninerror] = useState();

    const notifySuccess = () => toast.success("👋 Welcome back!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "light"});
    
    const notifyError = (error) => toast.error(`${error}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "light"});
  
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const goToSignup = ()=>{
        navigate("/signup");
    };

    const handleLogin = async(e) =>{
        e.preventDefault();
        try{
            const response = await fetch(`${apiURL}/user/signin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify({email, password})
            })
            const data = await response.json();

            if (response.status == 200)
            {
                setSigninmsg(data.message);
                notifySuccess();
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            }
            else{
                setSigninerror(data.error);
                notifyError(data.error);
            }
        }
       catch(error)
       {
         setSigninerror('There was a problem with the fetch operation:', error);
         notifyError("There was a problem with the fetch operation");
        }
    }

    return (
    <div className="mainContainer">
        <div className="subContainer">
            <label className='topic'>Hello Again!</label>
            <label className='subtopic'>Explore More by <br />connecting with us...</label>
            <form className='form'>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" type="email" />
                <div class="passwordContainer">
                    <input type={showPassword? "text": "password"} className="passwordInput" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button type="button" className="viewPasswordBtn" onClick={togglePasswordVisibility}>{showPassword? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}</button>
                </div>
                <button className='btn' onClick={handleLogin}>Let's Go</button>
            </form>
            <div className='bottomContainer'>
                <label className='bottomFText' >Not a Member?</label>
                <label className='bottomSText' onClick={goToSignup} >Register now</label>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}
