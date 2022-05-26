import React, { useEffect } from "react";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import gicon from '../images/icons/google-fill.svg';
import fbicon from '../images/icons/facebook-circle-fill.svg';
import giticon from '../images/icons/github-fill.svg';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useToken from "../hooks/useToken";


const SocialLogin = () => {
    const [google, user, error] = useSignInWithGoogle(auth);
    const [github, gitUser, gitError] = useSignInWithGithub(auth);
    const [fb, fUser, fError] = useSignInWithFacebook(auth);
    const [token] = useToken(user|| gitUser|| fUser)
    const navigate = useNavigate(); 
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";
 if(error|| gitError || fError) {
  toast.error(error?.message|| gitError?.message || fError?.message);
 }
   useEffect(()=>{
    if(token || gitUser){
      navigate(from, { replace: true });
  } 
   }, [token, gitUser, from , navigate]);
  return (
    <div className="flex gap-4 justify-around">
      <button onClick={()=> google()} className="px-8 py-2 rounded-full hover:bg-white border-2 border-white"><img src={gicon} alt="" /></button>
      <button onClick={()=> github()} className="px-8 py-2 rounded-full hover:bg-white border-2 border-white"><img src={giticon} alt="" /></button>
      <button disabled onClick={()=> fb()} className="px-8 py-2 rounded-full hover:bg-white border-2 border-white"><img src={fbicon} alt="" /></button>
    </div>
  );
};

export default SocialLogin;
