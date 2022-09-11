import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";
import logout from "./logout.gif";
export const Logout = () => {
  const navigate = useNavigate();
  return (
    <div className="logout-main">
      <div className="main-container">
        <div className="gif-container">
          <img src={logout} alt="Success" />
        </div>
        <div className="text">
          <h2 onClick={() => navigate("/")}>Logout Successfull go back</h2>
          <p>Thank you for visiting our website. See you.</p>
        </div>
      </div>
    </div>
  );
};
