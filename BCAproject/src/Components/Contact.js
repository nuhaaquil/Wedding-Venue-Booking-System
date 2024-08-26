import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import { Helmet } from 'react-helmet';
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Contact() {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const navigateTo = useNavigate();
  const [data, setdata] = useState({
    cname: "",
    email_id: "",
    phone_number: "",
    pincode: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email_id: "",
    phone_number: "",
    pincode: "",
  });
  
  function handleinput(e) {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  }
  function validateInputs() {
    let isValid = true;
    const newErrors = { email_id: "", phone_number: "", pincode: "" };
  
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email_id)) {
      newErrors.email_id = "Invalid email format";
      isValid = false;
    }
  
    // Phone number validation regex (for a 10-digit number)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(data.phone_number)) {
      newErrors.phone_number = "Phone number must be 10 digits";
      isValid = false;
    }
  
    // Pin code validation regex (for a 6-digit number)
    const pincodeRegex = /^[0-9]{6}$/;
    if (!pincodeRegex.test(data.pincode)) {
      newErrors.pincode = "Pin code must be 6 digits";
      isValid = false;
    }
  
    setErrors(newErrors);
    return isValid;
  }
  

  function getintouch(e) {
    e.preventDefault();
    console.log(data);
    if(validateInputs()){
    axios
      .post("http://localhost:8000/Contact", data)
      .then((res) => {
        alert(res.data)
        if (res.data ==="We will soon contact you. \n Thank you for contacting us!") {
          alert("We will soon contact you. \n Thank you for contacting us!");
          navigateTo("/Home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
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
      <div className="contactdiv">
      
        <form className="contactform">
          <h1>GET IN TOUCH</h1>
          <input type="text" placeholder="Name" name="cname" onChange={handleinput} required/>
          <input type="email" placeholder="Email" name="email_id" onChange={handleinput} required/>
          {errors.email_id && <p className="error-message">{errors.email_id}</p>}

          <input type="tel" placeholder="Phone" name="phone_number" onChange={handleinput} required/>
          {errors.phone_number && <p className="error-message">{errors.phone_number}</p>}

          <input type="number" placeholder="Enter your pincode" name="pincode" onChange={handleinput} required/>
          {errors.pincode && <p className="error-message">{errors.pincode}</p>}
          <textarea placeholder="Message" onChange={handleinput} name="message" required></textarea>
          <button type="submit" onClick={getintouch}>Get in Touch</button>
        </form>
      </div>
      <footer class="footer">
        <div className="footercontact">
          <div className="footertext">
            <h3>About Us</h3>
            <p>
              "WedSpot is your go-to platform for discovering and booking the perfect wedding venues. Our mission is to simplify your wedding planning by connecting you with the best venues tailored to your needs and dreams."
            </p>
          </div>
          <div className="footertext">
            <h3>Contact Us</h3>
            <p>
              <b>Call us:</b> +91 72559 83220<br></br>
              <b>Email :</b> contact@wedspot.com<br></br>
              <b>WedSpot Address:</b> No. 789, 3rd Floor, High Rise
              Towers, 12th Cross, BTH Layout, Bangalore - 560102, Karnataka,
              India.
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
  );
}
export default Contact;
