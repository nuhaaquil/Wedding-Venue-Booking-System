import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../App.css";
import { NavLink } from "react-router-dom";

import V5_1 from "../Images/V5-JR-Resorts.jpg";
import V5_2 from "../Images/V5-JR-Resorts3.jpg";
import V5_3 from "../Images/V5-JR-Resorts4(main).jpg";
import V5_4 from "../Images/V5-JR-Resorts5.jpg";
// import V4_5 from "../Images/V3-Trisara-Hall5.jpeg";

import review_pic1 from "../Images/review-pic.jpg";
import review_pic2 from "../Images/review-pic2.jpg";
import review_pic3 from "../Images/review-pic3.jpg";
import review_pic4 from "../Images/review-pic4.jpg";
import review_pic5 from "../Images/review-pic5.jpg";

const V5_JR_Resorts = () => {
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
        <title>JR Resorts</title>
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

      <div className="venue-name">JR RESORTS</div>
      <div className="venue-pictures">
        <img src={V5_1} alt="Venue 1" className="venue-image" />
        <img src={V5_2} alt="Venue 2" className="venue-image" />
        <img src={V5_3} alt="Venue 3" className="venue-image" />
        <img src={V5_4} alt="Venue 4" className="venue-image" />
      </div>

      <div className="venue-description">
        <h2>About The Venue</h2>
        <p>
        JR Resort is nestled in Bangalore of Karnataka and provides venue as well as accommodation 
        provisions from 2020. Posing as an embodiment of simplicity and elegance, this place is an idyllic
        venue to host a variety of functions and events. <br></br>
          <br></br>
          <strong>Capacity/Space available at The Beginning</strong>
          <p>
          The space is divided into an indoor banquet and outdoor lawn with 200 seating and 300 floating
            guest capacity so it is quite ideal for small and mid size gatherings.
          </p>
          
        </p>
      </div>

      <div className="venue-price">
        <h2>Price</h2>
        <p>Veg - ₹450</p>
        <p>Non Veg - ₹650</p>
        <p>Rental Per Day - ₹3,70,000</p>
      </div>

      <div className="venue-amenities">
        <h2>Amenities</h2>
        <ul className="list">
          <li>1. 20000 Sqare Feet Capacity</li>
          <li>2. 500 Parking</li>
          <li>3. Bridal Room</li>
          <li>4. Pool</li>
          <li>5. Parking</li>
          <li>6. Electricity Back-up</li>
        </ul>
      </div>

      <div className="venue-other-info">
        <h2>Other Information</h2>
        <ul className="list">
          <li>1. Property Type - Banquet Hall, Lawn, Resort, Wedding Venue, Destination Wedding</li>
          <li>2. Price Type - Time Based Rent</li>
          <li>3. Decoration - Outside Decorators Allowed</li>
          <li>4. Food - Outside Food Not Allowed</li>
          <li>5. Allowed Cuisine - Both</li>
        </ul>
      </div>

      <div className="venue-reviews">
  <h2>Reviews</h2>
  <div className="reviews-container">
    <div className="review">
      <div className="review-header">
        <img src={review_pic1} alt="Reviewer" className="reviewer-image" />
        <h3>Ayesha Khan</h3>
      </div>
      <p>JR Resorts was an incredible choice for our wedding. The scenic beauty and impeccable service made it a day to remember.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic3} alt="Reviewer" className="reviewer-image" />
        <h3>Ravi Shankar</h3>
      </div>
      <p>We couldn't have asked for a better venue than JR Resorts. The facilities were top-notch and the staff were very accommodating.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic2} alt="Reviewer" className="reviewer-image" />
        <h3>Simran Gill</h3>
      </div>
      <p>Our wedding at JR Resorts was perfect. The elegant decor and serene environment made it a truly magical experience.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic4} alt="Reviewer" className="reviewer-image" />
        <h3>Arjun Thakur</h3>
      </div>
      <p>JR Resorts exceeded our expectations. The venue was beautiful, and the staff went above and beyond to make our day special.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic5} alt="Reviewer" className="reviewer-image" />
        <h3>Priya Desai</h3>
      </div>
      <p>We had an amazing time at JR Resorts. The ambiance was wonderful and the service was exceptional. Highly recommended!</p>
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

export default V5_JR_Resorts;
