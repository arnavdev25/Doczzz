import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { userData } = useSelector((state) => state.auth);
  return (
    <div>
      <div>
        <div className=" pt-28 container h-screen max-w-full">
          <div className="m-auto w-96 max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-slate-200 shadow-xl">
            <div className="h-28 bg-white"></div>
            <div className=" flex -mt-20 justify-center">
              <img
                className="h-32 rounded-full"
                alt="a"
                src="https://media.istockphoto.com/vectors/male-profile-flat-blue-simple-icon-with-long-shadow-vector-id522855255?k=20&m=522855255&s=612x612&w=0&h=fLLvwEbgOmSzk1_jQ0MgDATEVcVOh_kqEe0rqi7aM5A="
              />
            </div>
            <div className="mt-3 mb-1 px-3 text-center text-[20px] font-semibold">
              {userData.name}
            </div>

            <div className="mb-5 px-3 text-center text-black">
              Email: {userData.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
