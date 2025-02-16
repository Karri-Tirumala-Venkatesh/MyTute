import React, { useEffect, useState } from "react";
import Image from "../assets/image.jpg";
// import Logo from "../assets/logo.jpg";
import GoogleSvg from "../assets/icons8-google.svg";

const Login = () => {
  const [ showPassword, setShowPassword ] = useState(false);

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          {/* <div className="login-logo">
            <img src={Logo} alt="" />
          </div> */}
          <div className="login-center">
            <h2>Welcome !</h2>
            <p>Create your Account</p>
            <form>
                <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Create Password" />
                <input type={showPassword ? "text" : "password"} placeholder="Confirm Password" />
              </div>
              <div className="login-center-buttons">
                <button type="button">Join</button>
                <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Join with Google
                </button>
              </div>
            </form>
          </div>
          <p className="login-bottom-p">
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
