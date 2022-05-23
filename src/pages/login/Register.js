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
      const [updateProfile, updateError] = useUpdateProfile(auth);
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
    if(error || updateError) toast.error(error.message || updateError.message); 
    let spinner = '';
    if(loading) {
        spinner = <div class="text-center">
        <svg role="status" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
    </div>
    }
    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>Please, login to your account </h2>
             <div className="flex flex-col w-full max-w-lg mx-auto border-opacity-50 mt-24">
                <div className="grid p-12 card shadow-lg  place-items-center border-t-2 border-t-primary">
                    {/* react hook form  */}
                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2 w-full">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                            <span className="label-text-alt text-red-400 text-sm"> {errors.name && "Name is Required *" }</span>
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
                        <button className='btn btn-primary w-full'> {spinner}Register</button>
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