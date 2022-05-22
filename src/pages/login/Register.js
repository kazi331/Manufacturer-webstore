import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from '../../shared/SocialLogin';
import { useUpdateProfile } from 'react-firebase-hooks/auth';

const Register = () => {
    const [
        createEmailUser,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
const navigate = useNavigate();
  const onSubmit = async (data) => {
    if(data.password !== data.confirmPass) toast.warning('Passoword doesn\'t match ')
      else{
        await createEmailUser(data.email, data.password)
        await updateProfile({displayName: data.name})
        navigate('/')
      }
    };
    if(error) toast.error(error.message);
    if(updating) toast.info('Updating data')
    

    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>Please, login to your account </h2>
             <div className="flex flex-col w-full max-w-lg mx-auto border-opacity-50 mt-24">
                <div className="grid p-12 card shadow-lg  place-items-center border-t-2 border-t-primary">
                    {/* react hook form  */}
                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2 w-full">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                            <span className="label-text-alt text-red-400 text-sm"> {errors.email && "Name is Required *" }</span>
                        </label>
                        <input   {...register("name", {required: true})} type="text"  placeholder="Your Name"  className="input input-bordered w-full max-w-md"  />
                       
                        <label className="label">
                            <span className="label-text">Your Email</span>
                            <span className="label-text-alt text-red-400 text-sm"> {errors.email && "Email is Required *" }</span>
                        </label>
                        <input   {...register("email", {required: true})} type="email"  placeholder="Your email" className="input input-bordered w-full max-w-md"  />
                        
                        <label className="label">
                            <span className="label-text">Password</span>
                            <span className="label-text-alt text-red-400 text-sm"> {errors.password && "Password is Required *" }</span>
                        </label>
                        <input  {...register("password", { required: true })} placeholder="Passoword" type="password" autoComplete='Off' className="input input-bordered w-full max-w-md" />
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                            <span className="label-text-alt text-red-400 text-sm"> {errors.confirmPass && "Password is Required *" }</span>
                        </label>
                        <input  {...register("confirmPass", { required: true })} placeholder="Confirm Passoword" type="password"  className="input input-bordered w-full max-w-md" />
                        <label className="label mt-4 mb-8">
                            <span className="label-text">Already have an account? <Link  className='link link-primary'to="/login">Login</Link></span>
                            
                        </label>
                        <input type="submit" value="Register" className='btn btn-primary w-full'/>
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

export default Register;