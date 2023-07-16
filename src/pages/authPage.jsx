import React, { useEffect, useState } from "react";
import "./authpage.css";
import {AiFillApple} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import {auth,provider} from "../firebase"
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const AuthPage = () => {
  const navigate=useNavigate()
const [user,setuser]=useState(null)

const handleClick=()=>{
  signInWithPopup(auth, provider).then((res)=>{
    setuser(res.user)
    navigate("/dashboard")

    localStorage.setItem("openinUser",JSON.stringify(user))
  }).catch((err)=>{
    console.log("error", err);
  })




}


useEffect(()=>{
const isloggedin=JSON.parse(localStorage.getItem(
  'openinUser'
))


// isloggedin && alert("already logged in")
},[])

  return (
    <div className="main-container">
      <div className="left-container">
        <p>Board.</p>
      </div>

      <div className="right-container">
        <div className="text-box">
          <p className="first-text">Sign In</p>
          <p className="second-text">sign in to your account</p>
        </div>

        <div className="buttons-box">
       <button onClick={handleClick}>
        <FcGoogle/>
sign in with Google
       </button>

       <button>
        <AiFillApple/>
        sign in with Apple

       </button>
        </div>

        <div className="form-card">
    <form>
      <label for="username">Email address</label>
      <input type="text" id="username" placeholder="Enter your username"/>

      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password"/>

      <label style={{color:"blue"}} for="password">Forgot Password?</label>

      <button onClick={()=>alert("Sign in with Google")} type="submit">Sign In</button>
    </form>
  </div>


<div className="register-box" > <p style={{color:"gray"}}>don't have an account? <span style={{color:"blue"}}>Register here</span></p></div>

        
      </div>
    </div>
  );
};

export default AuthPage;
