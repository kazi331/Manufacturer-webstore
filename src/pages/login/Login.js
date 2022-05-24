import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from '../../shared/SocialLogin';

const Login = () => {
    const [
        emailLogin,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

  const onSubmit = data => {
      console.log(data);
      emailLogin(data.email, data.password)
    };

    if(error) toast.error(error.message);
    if(user){
        navigate(from, { replace: true });
    }
    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>Please, login to your account </h2>
             <div className="flex flex-col w-full max-w-lg mx-auto border-opacity-50 mt-24">
                <div className="grid p-12 card shadow-lg  place-items-center border-t-2 border-t-primary">
                    {/* react hook form  */}
                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2 w-full">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                            <span className="label-text-alt text-red-400 text-sm"> {errors.email && "Email is Required *" }</span>
                        </label>
                        <input   {...register("email", {required: true})} autoComplete="Off"  placeholder="User email" defaultValue="bangladesh@gmail.com" className="input input-bordered w-full max-w-md"  />
                        
                        <label className="label">
                            <span className="label-text">Your Password</span>
                            <span className="label-text-alt text-red-400 text-sm"> {errors.password && "Password is Required *" }</span>
                        </label>
                        <input  {...register("password", { required: true })} placeholder="Passoword" type="password" defaultValue="bangladesh" className="input input-bordered w-full max-w-md" />
                        <label className="label mt-4 mb-8">
                            <span className="label-text">Don't have an account? <Link  className='link link-primary'to="/register">Register</Link></span>
                            <span className="label-text">Forgot Password? <Link className='link link-primary' to="/reset">Reset</Link></span>
                        </label>
                        <input type="submit" value="Login" className='btn btn-primary w-full'/>
                    </form>
                </div>
                <div className="divider">Or, continue with</div>
                <div className="grid h-20 card bg-gray-200 rounded-box place-items-center">
                    <SocialLogin/>
                </div>
             </div>
        </div>
    );
};

export default Login;