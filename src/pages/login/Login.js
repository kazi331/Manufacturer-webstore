import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>Please, login to your account </h2>
             <div className="flex flex-col w-full max-w-lg mx-auto border-opacity-50 mt-24">
                <div className="grid p-12 card shadow-lg place-items-center border-t-2 border-t-primary">
                    {/* react hook form  */}
                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2 w-full">
                        <input   {...register("email", {required: true})} autoComplete="Off"  placeholder="User email" defaultValue="bangladesh@gmail.com" className="input input-bordered w-full max-w-md"  />
                        {errors.email && <span className='text-red-400 text-sm'>Email is Required *</span>}
                        <input  {...register("password", { required: true })} placeholder="Passoword" type="password" defaultValue="bangladesh" className="input input-bordered w-full max-w-md" />
                        {errors.password && <span className='text-red-400 text-sm'>Password is Required *</span>}
                        <input type="submit" value="Login" className='btn w-full'/>
                    </form>
                </div>
                <div className="divider">Or, continue with</div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                    <div className='flex gap-4'>
                        <button className="btn btn-outline btn-ghost">F</button>
                        <button className="btn btn-outline btn-ghost">G</button>
                        <button className="btn btn-outline btn-ghost">Git</button>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Login;