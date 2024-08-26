import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import { Helmet } from "react-helmet";
import axios from "axios";

function Cancellation() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    date: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function validateInputs() {
    let isValid = true;
    const newErrors = { email: "" };

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  function handleCancellation(e) {
    e.preventDefault();
    if (validateInputs()) {
      axios
        .post("http://localhost:8000/Cancellation", data)
        .then((res) => {
          alert(res.data);
          navigate("/Home#navBar1"); // Redirect to home page
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div className="cancel_page">
      <Helmet>
        <title>Cancellation</title>
      </Helmet>
      <div className="navbar" id="navBar1">
        <div className="navbar-brand">
          <h1>WedSpot</h1>
        </div>
        <div className="navbar-links">
        <NavLink to={"/Home#navBar1"}><a href="#">Home</a></NavLink>
        <NavLink to={"/Booking#navBar1"}><a href="#">Booking</a></NavLink>
        <NavLink to={"/Cancellation#navBar1"}><a href="#">Cancellation</a></NavLink>
        <NavLink to={"/VenueList#navBar1"}><a href="#">Explore</a></NavLink>
        <NavLink to={"/AboutUs#navBar1"}><a href="">About Us</a></NavLink>
        </div>
      </div>
      <div className="cancel-booking-page">
        <div className="cancel-booking-form-container">
          <h2>Cancel Booking</h2>
          <form className="cancel-booking-form">
            <input type="email" name="email" onChange={handleInput} placeholder="Email" required/>
            {errors.email && <p className="error-message">{errors.email}</p>}
            <input type="date" name="date" onChange={handleInput} required />
            <button type="submit" className="cancel-booking-button" onClick={handleCancellation}>
              Cancel Booking
            </button>
          </form>
        </div>
        <div className="button-container">
          <button className="go-back-button" onClick={() => navigate("/Home#navBar1")}>Go Back</button>
        </div>
        <footer class="footer">
          <div className="footercontact">
            <div className="footertext">
              <h3>About Us</h3>
              <p>
                "WedSpot is your go-to platform for discovering and booking the
                perfect wedding venues. Our mission is to simplify your wedding
                planning by connecting you with the best venues tailored to your
                needs and dreams."
              </p>
            </div>
            <div className="footertext">
              <h3>Contact Us</h3>
              <p>
                <b>Call us:</b> +91 72559 83220<br></br>
                <b>Email :</b> contact@wedspot.com<br></br>
                <b>WedSpot Address:</b> No. 789, 3rd Floor, High Rise Towers,
                12th Cross, BTH Layout, Bangalore - 560102, Karnataka, India.
              </p>
            </div>
          </div>

          <div class="footer-container">
            <div class="footer-left">
              <ul class="footer-links">
              <li><NavLink to={"/Home#navBar1"}><a href="#">Home</a></NavLink></li>
              <li><NavLink to={"/Contact#navBar1"}><a href="#">Contact Us</a></NavLink></li>
              <li><NavLink to={"/AboutUs#navBar1"}><a href="#">About Us</a></NavLink></li>
              <li><NavLink to={"/FAQ#navBar1"}><a href="#">FAQs</a></NavLink></li>
              </ul>
            </div>
          </div>
          <p>&copy; 2023 WedSpot. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Cancellation;
