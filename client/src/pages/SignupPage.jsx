import React, { useState } from 'react'
import './SignupPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash  } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignupPage() {
    const apiURL = import.meta.env.VITE_API_BASE_URL;
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [signupmsg,setSignupmsg] = useState();
    const [signuperror,setSignuperror] = useState();

    const notifySuccess = () => toast.success("🎉 You've successfully registered!", {
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
    

    const goToSignin = ()=>{
        navigate("/signin");
    };

    const handleRegister = async(e) =>{
        e.preventDefault();
        try{
            const response = await fetch(`${apiURL}/user/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify({"firstName": fname, "lastName": lname, email, password})
            })
            const data = await response.json();
            if (response.status == 200)
            {
                setSignupmsg(data.message);
                notifySuccess();
                setTimeout(() => {
                    navigate("/signin");
                }, 2000);
            }
            else{
                setSignuperror(data.error);
                notifyError(data.error);
            }
        }
       catch(error)
       {
         setSignuperror('There was a problem with the fetch operation:', error);
         notifyError("There was a problem with the fetch operation");
        }
    }

    return (
    <div className="mainContainer">
        <div className="subContainer">
            <label className='topic'>Register</label>
            <form className='form'>
                <input placeholder="First name" value={fname} onChange={(e)=>setFname(e.target.value)} />
                <input placeholder="Last name" value={lname} onChange={(e)=>setLname(e.target.value)} />
                <input placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <div class="passwordContainer">
                    <input type={showPassword? "": "password"} className="passwordInput" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button type="button" className="viewPasswordBtn" onClick={togglePasswordVisibility}>{showPassword? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}</button>
                </div>
                <button className='btn' onClick={handleRegister}>Register</button>
            </form>
            <div className='bottomContainer'>
                <label className='bottomFText' >Already Register?</label>
                <label onClick={goToSignin} className='bottomSText' >Login now</label>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}
