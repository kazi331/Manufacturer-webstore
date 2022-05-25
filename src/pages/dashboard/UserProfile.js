import React from "react";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const UserProfile = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const [verifyEmail, sending, error] = useSendEmailVerification(auth);
  if(sending) toast.info('check your email')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mt-20">
      <h2 className="text-2xl text-center font-bold mb-12 capitalize hidden lg:block">
        Hey {user?.displayName}, welcome to your profile
      </h2>
      <div className="card xl:card-side bg-base-100 px-4 md:px-8 lg:px-16 py-8 lg:py-12 mx-4 my-10 lg:mx-24 border-t-2 flex items-center justify-around shadow-xl">
        <figure className="w-full max-w-sm flex flex-col gap-2">
          <img
            src={
              user?.photoUrl || "https://api.lorem.space/image/face?hash=33791"
            }
            alt="Album"
            className="rounded-lg  aspect-square"
          />
        </figure>
        <div className="md:card-body mt-4 md:mt-0 w-full max-w-md">
          {/* current profile info  */}
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th colSpan="100%">Profile Information</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{user.displayName}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{user.email} <br/> {!user.emailVerified && <button onClick={()=> verifyEmail()} className="link link-primary">Verify Email</button> } </td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>{user.phoneNumber || 'Number Not Found'}</td>
                </tr>
                <tr>
                  <td>LinkedIn</td>
                  <td>LinkedIn link</td>
                </tr>
                <tr>
                  <td>Facebook</td>
                  <td>facebook link</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>Address</td>
                </tr>
                <tr>
                  <td>Education</td>
                  <td>Education</td>
                </tr>
                
              
              </tbody>
            </table>
              <p className="px-4"> Bio <hr/> Bio Information  </p>
          </div>
          <a href="#update" className="link link-primary p-4">
            Want to update profile?
          </a>
        </div>
      </div>
      <div
        id="update"
        className="card  bg-base-100 px-4 lg:px-16 py-16 lg:py-24 mx-4 my-10 lg:mx-24 border-t-2 shadow-xl"
      >
        <div className="md:card-body mt-4 md:mt-0 w-full max-w-lg mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 items-center justify-center w-full max-w-md mx-auto"
          >
            <h2 className="card-title text-2xl font-bold mb-4">
              Update Your Profile
            </h2>
            <input
              defaultValue={user.displayName}
              {...register("profileName")}
              type="text"
              placeholder="Profile Name"
              className="input input-bordered w-full"
            />
            <input
              {...register("address")}
              type="text"
              placeholder="Address"
              className="input input-bordered w-full"
            />
            <input
              {...register("education")}
              type="text"
              placeholder="Your Education"
              className="input input-bordered w-full"
            />
            <input
              {...register("facebook")}
              type="text"
              placeholder="Facebook Profile url"
              className="input input-bordered w-full"
            />
            <input
              {...register("linkedin")}
              type="text"
              placeholder="Linkedin Profile url"
              className="input input-bordered w-full"
            />
            <input
              {...register("linkedin")}
              type="text"
              placeholder="New profile image url"
              className="input input-bordered w-full"
            />
            <textarea
              {...register("bio")}
              className="textarea textarea-bordered w-full"
              placeholder="Bio"
            ></textarea>
            <button className="btn w-full">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
