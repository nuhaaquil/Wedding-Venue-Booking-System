import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../App.css";
import { NavLink } from "react-router-dom";

import V4_1 from "../Images/V4-Rustique-Wind.jpeg";
import V4_2 from "../Images/V4-Rustique-Wind2.jpeg";
import V4_3 from "../Images/V4-Rustique-Wind4.jpeg";
import V4_4 from "../Images/V4-Rustique-Wind5.jpeg";
// import V4_5 from "../Images/V3-Trisara-Hall5.jpeg";

import review_pic1 from "../Images/review-pic.jpg";
import review_pic2 from "../Images/review-pic2.jpg";
import review_pic3 from "../Images/review-pic3.jpg";
import review_pic4 from "../Images/review-pic4.jpg";
import review_pic5 from "../Images/review-pic5.jpg";

const V4_Rustique_Winds = () => {
    const { hash } = useLocation();

    useEffect(() => {
      if (hash) {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [hash]);
  return (
    <div className="venue-detail-page">
      <Helmet>
        <title>Rustique Winds</title>
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

      <div className="venue-name">RUSTIQUE WINDS</div>
      <div className="venue-pictures">
        <img src={V4_1} alt="Venue 1" className="venue-image" />
        <img src={V4_2} alt="Venue 2" className="venue-image" />
        <img src={V4_3} alt="Venue 3" className="venue-image" />
        <img src={V4_4} alt="Venue 4" className="venue-image" />
      </div>

      <div className="venue-description">
        <h2>About The Venue</h2>
        <p>
        Located in Bangalore, Karnataka, Rustique Winds offers stunning venue and comfortable accommodation 
        provisions. In business since 2021, this place is admired for its cosy and natural filled ambience,
        fulfilling amenities and fabulous hospitality.<br></br>
          <br></br>
          <strong>Capacity/Space available at The Beginning</strong>
          <p>
          The outdoor lawn area can accommodate up to 250 seating and 400 floating guests. They also have 5 
          comfortable rooms.
          </p>
          
        </p>
      </div>

      <div className="venue-price">
        <h2>Price</h2>
        <p>Veg - ₹500</p>
        <p>Non Veg - ₹600</p>
        <p>Rental Per Day - ₹3,50,000</p>
      </div>

      <div className="venue-amenities">
        <h2>Amenities</h2>
        <ul className="list">
          <li>1. 5 Rooms available</li>
          <li>2. 25 Parking</li>
          <li>3. Bridal Room</li>
          <li>4. Wi-Fi</li>
          <li>5. Parking</li>
          <li>6. 2500 Square Feet Capacity</li>
        </ul>
      </div>

      <div className="venue-other-info">
        <h2>Other Information</h2>
        <ul className="list">
          <li>1. Property Type - Lawn</li>
          <li>2. Price Type - Time Based Rent</li>
          <li>3. Decoration - Outside Decorators Allowed</li>
          <li>4. Food - Outside Food Allowed</li>
          <li>5. Allowed Cuisine - Both</li>
        </ul>
      </div>

      <div className="venue-reviews">
  <h2>Reviews</h2>
  <div className="reviews-container">
    <div className="review">
      <div className="review-header">
        <img src={review_pic1} alt="Reviewer" className="reviewer-image" />
        <h3>Neha Gupta</h3>
      </div>
      <p>Rustique Winds was the perfect venue for our wedding. The rustic charm and beautiful surroundings made our day unforgettable.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic2} alt="Reviewer" className="reviewer-image" />
        <h3>Siddharth Mehta</h3>
      </div>
      <p>The staff at Rustique Winds went above and beyond to make our event special. The venue itself is stunning and well-maintained.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic3} alt="Reviewer" className="reviewer-image" />
        <h3>Anjali Rao</h3>
      </div>
      <p>We had an amazing experience at Rustique Winds. The venue's natural beauty and elegant decor were exactly what we wanted.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic4} alt="Reviewer" className="reviewer-image" />
        <h3>Vikas Chatterjee</h3>
      </div>
      <p>Rustique Winds provided an exceptional setting for our celebration. The attention to detail and service were impeccable.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic5} alt="Reviewer" className="reviewer-image" />
        <h3>Megha Kaur</h3>
      </div>
      <p>Our guests couldn't stop raving about Rustique Winds. The venue's unique charm and the friendly staff made our day perfect.</p>
    </div>
  </div>
</div>

{/* Go back */}
<div className="go-back-container">
      <NavLink to={"/VenueList#navBar1"}><button className="go-back-button">Go Back</button></NavLink>
      <NavLink to={"/Booking#navBar1"}><button className="book-venue-button">Book This Venue</button></NavLink>

      </div>


          {/* booking form */}

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
  );
};

export default V4_Rustique_Winds;
