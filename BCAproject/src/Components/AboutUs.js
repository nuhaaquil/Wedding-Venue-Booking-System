import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import { NavLink } from 'react-router-dom'

import Vision from '../Images/OurVision.jpg';
import { Helmet } from 'react-helmet';


function AboutUs() {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);


  return (
    
    <div className="AU-mainDiv">
     <Helmet>
        <title>WedSpot - About Us</title>
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


      <div className="AU-top-div">
        <h1>About Us</h1>
        <p> WedSpot is your ultimate destination for discovering and booking the perfect wedding venue. 
          Our platform offers a curated selection of venues with detailed information, 
          user reviews, and beautiful photos to help you make an informed decision. 
          We are dedicated to making your wedding planning process seamless and enjoyable, 
          ensuring that your special day is everything you dreamed it would be.</p>

      </div>
      <div className="AU-content-div">
        <div className="AU-image-container">
          <img src={Vision} alt="About Us Image" />
        </div>
        <div className="AU-text-container2">
          <h2>Our Vision</h2>
          <p>
            Our vision at WedSpot is to revolutionize the wedding planning experience
            by providing an intuitive and comprehensive platform for booking the perfect wedding venues. 
            We aim to bring together the best venues and resources under one roof,
            making the process seamless, enjoyable, and stress-free for couples.
            By leveraging innovative technology and exceptional customer service, 
            we strive to become the leading destination for all wedding venue needs.
          </p>
        </div>
      </div>
      <div className="AU-boxes-container2">
        <div className="AU-box2">
          <h3>Vast Selection</h3>
          <p>
          We offer a diverse range of wedding venues, 
          ensuring couples find the perfect setting for their special day.</p>
        </div>
        <div className="AU-box2">
          <h3>Personalized Service</h3>
          <p>
          Our dedicated team provides personalized assistance, 
          guiding couples through the booking process and offering tailored recommendations 
          to match their unique preferences.
          </p>
        </div>
        <div className="AU-box2">
          <h3>Seamless Experience</h3>
          <p>
          With our intuitive platform, couples can effortlessly explore venues, and secure bookings, saving time and eliminating stress.
          </p>
        </div>
        <div className="AU-box2">
          <h3>Creating Memories</h3>
          <p>
          We take pride in helping couples create unforgettable moments, ensuring their wedding day reflects their vision and leaves a lasting impression on guests.
          </p>
        </div>
      </div>
      <div className="AU-background-div">
        <h2 className="AU-main-heading">What Are We Good At?</h2>
        <div className="AU-row">
          <div className="good-box">
            <h3>Curated Venue Listings</h3>
            <p>
            We provide detailed descriptions, high-resolution photos, and real user reviews for each venue, giving couples all the information they need to make an informed choice.
            </p>
          </div>
          <div className="good-box">
          <h3>User Reviews and Ratings</h3>
          <p> We feature genuine reviews and ratings from couples who have previously booked and used our venues, providing valuable insights and helping new users make informed decisions.</p>
          </div>
        </div>
        <div className="AU-row">
          <div className="good-box">
          <h3>User Reviews and Ratings</h3>
          <p> We feature genuine reviews and ratings from couples who have previously booked and used our venues, providing valuable insights and helping new users make informed decisions.</p>
          </div>
          <div className="good-box">
          <h3>Customer Satisfaction</h3>
          <p>Customer satisfaction is our top priority. We go the extra mile to make sure your wedding day is nothing short of perfect.</p>
          </div>
        </div>
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
  )
}

export default AboutUs;