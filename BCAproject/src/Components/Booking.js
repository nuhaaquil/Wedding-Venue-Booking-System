import React, { useState, useEffect } from "react";
import { useLocation, useNavigate,NavLink } from "react-router-dom";
import "../App.css";
import { Helmet } from 'react-helmet';
import axios from "axios";


function Booking() {
  const { hash } = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);


  const [data, setdata] = useState({
    vname: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const venues = [
    { value: "The Beginning", label: "The Beginning" },
    { value: "Wiwaha", label: "Wiwaha" },
    { value: "Trisara Hall", label: "Trisara Hall" },
    { value: "Rustique Winds", label: "Rustique Winds" },
    { value: "JR Resort", label: "JR Resort" },
    { value: "Aarambha", label: "Aarambha" },
  ];
  
  function handleinput(e) {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  }
  function validateInputs() {
    let isValid = true;
    const newErrors = { email: "", phone: "" };
  
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }
  
    // Phone number validation regex (for a 10-digit number)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(data.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }
  
    setErrors(newErrors);
    return isValid;
  }
  

  function getintouch(e) {
    e.preventDefault();
    console.log(data);
    if (validateInputs()) {
      axios
      .post("http://localhost:8000/Booking", data)
      .then((res) => {
        alert(res.data)
        if (res.data ==="We will soon contact you. \n Thank you for booking with us!") {
          alert("We will soon contact you. \n Thank you for booking with us!");
          navigate('/Home#navBar1'); // Redirect to home page
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
  
  return (
    <div className="booking-page">
      <Helmet>
        <title>Booking</title>
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
      <div>
      <div className="booking-form-container">
        <form className="booking-form">
        <h2>Book A Venue</h2>
        <select name="vname" onChange={handleinput} value={data.vname} required>
            <option value="" disabled>Select a Venue</option>
              {venues.map((venue) => (
                <option key={venue.value} value={venue.value}>
                  {venue.label}
                </option>
              ))}
            </select>
            <input type="text" name="name" onChange={handleinput} placeholder="Name" required />
          <input type="email" name="email" onChange={handleinput} placeholder="Email" required />
          {errors.email && <p className="error-message">{errors.email}</p>}
          <input type="tel" name="phone" onChange={handleinput} placeholder="Phone" required />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
          <input type="date" name="date" onChange={handleinput} required />
          <textarea name="message" onChange={handleinput} placeholder="Message" required />
          <button type="submit" className="book-venue-button" onClick={getintouch}>Book</button>
           <div className="button-container">
             <button className="go-back-button">Go Back</button>
            </div>

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
    </div>
  );
}
export default Booking;
