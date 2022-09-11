import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/auth/action";
import svg1 from "./svg1.svg";
const Register = () => {
  const [FormData, setFormData] = useState({});
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const inputName = e.target.name;
    setFormData({
      ...FormData,
      [inputName]: e.target.value,
    });
  };
  const handleSign = (e) => {
    e.preventDefault();
    if (FormData) {
      dispatch(registerUser(FormData));
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen  m-auto bg-[#dedede] w-full">
        <form
          className="flex items-center justify-center w-full flex-1 px-20 text-center "
          onSubmit={handleSign}
        >
          <div className=" bg-[#9fcbc8] rounded-2xl shadow shadow-gray-500/40  grid align-center justify-center lg:grid-cols-2 md:grid-cols-1  md:w-2/3  sm:w-11/12 max-w-4xl ">
            <div className="py-0">
              <h2 className="text-3xl font-bold text-red-600 mb-2 mt-5">
                Sign Up
              </h2>
              <div className="border-2 w-10 h-0 border-blue-500 inline-block mb-2"></div>
              <div className="sm:w-auto md:w-3/9 p-2">
                <p className="my-3 font-semibold text-red-600"> OR </p>
                <div className="flex flex-col items-center md:w-auto">
                  <div className="bg-gray-100 w-72 p-2 flex items-center mb-3 rounded-md">
                    <input
                      type="name"
                      name="name"
                      required
                      placeholder="Name"
                      onChange={handleChange}
                      className="bg-gray-100 outline-none text-base min-w-fit pr-12  text-gray-700 font-semibold
                flex-1"
                    />
                  </div>
                  <div className="bg-gray-100 w-72 p-2 flex items-center mb-3 rounded-md">
                    <input
                      type="email"
                      required
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      className="bg-gray-100 outline-none text-base min-w-fit pr-12  text-gray-700 font-semibold
                 flex-1"
                    />
                  </div>
                  <div className="bg-gray-100 w-72 p-2 flex items-center rounded-md mb-3 ">
                    <input
                      type="password"
                      name="password"
                      required
                      placeholder="Password"
                      onChange={handleChange}
                      className="bg-gray-100 outline-none text-base pr-12 text-gray-700
                 flex-1 "
                    />
                  </div>
                  <button
                    className="border-2 text-white border-white rounded-full px-12 py-2 inline-block font-bold tracking-wider
                hover:bg-white hover:text-green-500"
                    type="submit"
                  >
                    {!loading ? "Sign Up" : "Signing up..."}
                  </button>
                </div>
                <p className="mt-4 text-sm mb-2 font-semibold text-white">
                  Already have an account?
                  <a
                    href="#"
                    className="font-bold cursor-pointer text-blue-600 "
                    onClick={() => navigate("/")}
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
            <div className="w-1/9  text-white p-2 flex justify-center items-center">
              <img src={svg1} alt="" className="w-full rotate-270 " />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
