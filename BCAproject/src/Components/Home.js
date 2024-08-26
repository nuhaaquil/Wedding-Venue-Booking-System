import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../App.css";
import { NavLink } from "react-router-dom";
import mainVid from "../Images/mainVid.mp4";
import home2 from "../Images/home2.jpg";
import saveMoney from "../Images/save_money.svg";
import verified from "../Images/Verified.svg";
import hassleFree from "../Images/hassle_free.svg";

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return(
  <div className="mainDiv">
  <Helmet>
        <title>WedSpot - Home</title>
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
        <NavLink to={"/"}>
          <a href="">Login</a>
        </NavLink>
        </div>
        </div>
  {/* Video */}
   <div className="video-section">
      <video autoPlay muted loop className="background-video">
        <source src={mainVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-text">
        <h1>Crafting Unforgettable Beginnings</h1>
      </div>
    </div>
  {/* 3 boxes */}
  <div className="boxes-container">
    <div className="box">
      <h2>CELEBRATE</h2>
      <p>
        Make memories that last a lifetime in venues that are just right for
        sharing joy and happiness.
      </p>
    </div>
    <div className="box">
      <h2>CHERISH</h2>
      <p>
        Create lasting memories in venues that feel welcoming and cozy, where
        each moment together is like a warm hug.
      </p>
    </div>
    <div className="box">
      <h2>DISCOVER</h2>
      <p>
        Embark on a journey of discovery, finding hidden gems and enchanting
        spaces that speak to your heart.
      </p>
    </div>
  </div>
  <div className="content-container">
    <div className="text-content">
      <h2>LET'S FIND YOUR DREAM VENUE</h2>
      <p>
        Embark on a journey to discover breathtaking venues featuring some of
        the most enchanting spaces available
      </p>
    </div>
    <div className="image-content">
      <img src={home2} alt="Description of image" />
    </div>
  </div>
  {/* 3 sections */}
  <div className="main-container">
    <h2>WHY US?</h2>
    <div className="horizontal-boxes">
      <div className="why-box">
        <img src={saveMoney} alt="Image 1" />
        <p>Save Money</p>
        <h4>Lowest Price Guaranteed</h4>
      </div>
      <div className="why-box">
        <img src={verified} alt="Image 2" />
        <p>Verified Listing</p>
        <h4>Dependable &amp; Accurate</h4>
      </div>
      <div className="why-box">
        <img src={hassleFree} alt="Image 3" />
        <p>Hassle Free Booking</p>
        <h4>Convenient</h4>
      </div>
    </div>
  </div>
  
  {/* footer */}
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
  )
}
export default Home;