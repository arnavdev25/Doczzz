import React, { useState } from "react";
import svgs from "./svgs.svg";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getLoginToken } from "../../redux/auth/action";
import { useNavigate } from "react-router-dom";
const Login = () => {
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
  const handleLogin = (e) => {
    e.preventDefault();
    if (FormData) {
      dispatch(getLoginToken(FormData));
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div>
      <div className="flex bg-[#d1e0ec]  flex-col items-center justify-center  min-h-screen  m-auto  w-full">
        <div className="text-left font-bold text-red-600">Quiz App</div>
        <form
          className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center "
          onSubmit={handleLogin}
        >
          <div className="bg-[#13193c] rounded-2xl shadow shadow-gray-500/40 grid lg:grid-cols-2 md:grid-cols-1 md:w-2/3  sm:w-11/12 max-w-4xl ">
            <div className="py-0">
              <h2 className="text-3xl font-bold text-white-600 mb-2 mt-5">
                Login
              </h2>
              <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
              <div className="md:w-3/9 p-2">
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-72 p-2 flex items-center mb-3 rounded-md">
                    <FaRegEnvelope className="text-gray-400 mr-2" />
                    <input
                      type="email"
                      required
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      className="bg-gray-100 outline-none text-base min-w-fit pr-12 text-gray-700 font-semibold
                  flex-1"
                    />
                  </div>
                  <div className="bg-gray-100 w-72 p-2 flex items-center justify-center rounded-md mb-3 ">
                    <MdLockOutline className="text-gray-400 mr-2" />
                    <input
                      type="password"
                      name="password"
                      required
                      placeholder="Password"
                      onChange={handleChange}
                      className="bg-gray-100 outline-none text-base pr-12 text-gray-700
                  flex-1"
                    />
                  </div>
                  <button
                    className="border-2 border-white rounded-full px-12 py-2 inline-block font-bold tracking-wider 
                 hover:bg-white hover:text-green-500"
                    type="submit"
                  >
                    {loading ? "Logging in..." : "Log In"}
                  </button>
                </div>
                <p className="mt-4 text-sm mb-2 font-semibold">
                  Don't have an account?
                  <a
                    href="#"
                    className="font-bold cursor-pointer text-blue-600 "
                    onClick={() => navigate("/register")}
                  >
                    Log In
                  </a>
                </p>
              </div>
            </div>
            <div className=" md:w-full m-auto  text-white p-2 flex justify-center items-center">
              <img src={svgs} alt="a" className=" w-full rotate-270 " />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
