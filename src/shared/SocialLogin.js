import React from "react";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const [signInWithFacebook, gUser, gLoading, gError] = useSignInWithFacebook(auth);
  return (
    <div className="flex gap-4">
      <button onClick={()=> signInWithFacebook()} className="px-12 py-1 rounded-lg btn-outline btn-ghost">F</button>
      <button onClick={()=> signInWithGoogle()} className="px-12 py-1 rounded-lg btn-outline btn-ghost">G</button>
      <button onClick={()=> signInWithGithub()} className="px-12 py-1 rounded-lg btn-outline btn-ghost">Git</button>
    </div>
  );
};

export default SocialLogin;
