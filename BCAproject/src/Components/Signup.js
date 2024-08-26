import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../Images/logo+text-nobg.png";

function Signup() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);


  const navigate = useNavigate();
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleinput(e) {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  }

  function handleSignup(e) {
    e.preventDefault();
     // Reset previous errors
     setUsernameError("");
     setEmailError("");
     setPasswordError("");
 
     // Validation checks
     let isValid = true;
 
     if (data.username.length < 3 || data.username.length > 10) {
       setUsernameError("Username must be between 3 and 10 characters.");
       isValid = false;
     }
 
     if (!/\S+@\S+\.\S+/.test(data.email)) {
       setEmailError("Invalid email address.");
       isValid = false;
     }
 
     if (data.password.length !== 8) {
       setPasswordError("Password must be exactly 8 characters.");
       isValid = false;
     }
     if(isValid){
    axios
      .post("http://localhost:8000/Signup", data)
      .then((res) => {
        alert(res.data);
        if (res.data === "Account created successfully!!") {
          navigate("/Home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  return (
    <div className="login-page">
      <div className="bg-container">
        <div className="header">
          <div className="logo-container">
            <img src={logo} alt="WedSpot Logo" className="logo" />
            <div className="company-name">SignUp</div>
          </div>
        </div>

        <div className="login-container">
          <div className="login-content">
            <div className="login-text">
              <h3>Welcome to WedSpot</h3>
              <br></br>
              <p>
                <span
                  style={{ color: "rgb(184, 139, 24)", fontWeight: "bold" }}
                >
                  SAY YES
                </span>
                TO SEAMLESS VENUE SELECTION
              </p>
            </div>
            <div className="login-form">
              <form onSubmit={handleSignup}>
                <div className="form-group">
                  <label htmlFor="email">User Name</label>
                  <input
                    type="text"
                    placeholder="UserName"
                    name="username"
                    value={data.username}
                    onChange={handleinput}
                    required
                  />
                  {usernameError && <p className="error-message">{usernameError}</p>}

                </div>
                <div className="form-group">
                  <label htmlFor="password">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={data.email}
                    onChange={handleinput}
                    required
                  />
                  {emailError && <p className="error-message">{emailError}</p>}

                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    onChange={handleinput}
                    required
                  />
                  {passwordError && <p className="error-message">{passwordError}</p>}

                  <p>Account Exists?</p>
                  <NavLink to="/">
                    <a href="#">Login</a>
                  </NavLink>
                  <br />
                </div>
                <button type="submit">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
