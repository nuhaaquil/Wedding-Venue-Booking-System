import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import Signup from "./Signup";
import logo from "../Images/logo+text-nobg.png";

function Login() {
  const navigateTo = useNavigate();
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  function handleinput(e) {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  }
  function validateInputs() {
    let isValid = true;
    const newErrors = { username: "", password: "" };
  
    if (data.username.length <= 3 || data.username.length >= 10) {
      newErrors.username = "Username must be > 3 and < 10 characters";
      isValid = false;
    }
    if (data.password.length !== 8) {
      newErrors.password = "Password must be exactly 8 characters";
      isValid = false;
    }
  
    setErrors(newErrors);
    return isValid;
  }
  function getintouch(e) {
    e.preventDefault();
    console.log(data);
    if(validateInputs){
    axios
      .post("http://localhost:8000/Login", data)
      .then((res) => {
        alert(res.data);
        if (
          res.data ===
          "Welcome to our website"
        ) {
          alert(
            "Welcome to our website"
          );
          navigateTo("/Home");
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
            <div className="company-name">Login</div>
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
                </span>{" "}
                TO SEAMLESS VENUE SELECTION
              </p>
            </div>
            <div className="login-form">
              <form>
                <div className="form-group">
                  <label htmlFor="email">User Name</label>
                  <input
                    type="text"
                    placeholder="UserName"
                    name="username"
                    onChange={handleinput}
                    required
                  />
                  {errors.username && <p className="error-message">{errors.username}</p>}

                </div>
              
                  <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleinput}
                    required
                  />
                  {errors.password && <p className="error-message">{errors.password}</p>}

                  <p>No Account?</p>
                  <NavLink to="/SignUp">
                    <a href="#">Register</a>
                  </NavLink>
                  <br />
                </div>
                <button type="submit" onClick={getintouch}>
            Log In
          </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
