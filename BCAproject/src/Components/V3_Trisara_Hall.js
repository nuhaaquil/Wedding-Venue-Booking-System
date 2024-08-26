import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../App.css";
import { NavLink } from "react-router-dom";

import V3_1 from "../Images/V3-Trisara-Hall.jpeg";
import V3_2 from "../Images/V3-Trisara-Hall2.jpeg";
import V3_3 from "../Images/V3-Trisara-Hall3(main).jpeg";
import V3_4 from "../Images/V3-Trisara-Hall4.jpeg";
import V3_5 from "../Images/V3-Trisara-Hall5.jpeg";

import review_pic1 from "../Images/review-pic.jpg";
import review_pic2 from "../Images/review-pic2.jpg";
import review_pic3 from "../Images/review-pic3.jpg";
import review_pic4 from "../Images/review-pic4.jpg";
import review_pic5 from "../Images/review-pic5.jpg";

const V3_Trisara_Hall = () => {
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
        <title>Trisara Hall</title>
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

      <div className="venue-name">TRISARA HALL</div>
      <div className="venue-pictures">
        <img src={V3_1} alt="Venue 1" className="venue-image" />
        <img src={V3_2} alt="Venue 2" className="venue-image" />
        <img src={V3_3} alt="Venue 3" className="venue-image" />
        <img src={V3_4} alt="Venue 4" className="venue-image" />
      </div>

      <div className="venue-description">
        <h2>About The Venue</h2>
        <p>
        Trisara, the contemporary event space in Bangalore, 
        is the ideal destination for couples looking to celebrate their big day in style. 
        This venue, which opened its doors in 2015, boasts a modern interior and an elegant exterior
         that will leave your guests in awe.<br></br>
          <br></br>
          <strong>Capacity/Space available at The Beginning</strong>
          <p>
          With two areas available for events, Trisara can accommodate both indoor and outdoor Weddings.
          The indoor banquet hall can hold around 700-1000 guests, while the outdoor lawn can accommodate upto 200-300 guests.
          Whether you're planning an intimate affair or a grand celebration, Trisara can cater to your needs.
          The duplex banquet hall, spanning over 14,000 sq ft, is a unique feature of Trisara.
          With skylights, landscapes, and mezzanines offering beautiful backdrops, this space is perfect
          for capturing stunning photographs and creating unforgettable memories.
          </p>
          
        </p>
      </div>

      <div className="venue-price">
        <h2>Price</h2>
        <p>Veg - ₹700</p>
        <p>Non Veg - ₹900</p>
        <p>Rental Per Day - ₹5,50,000</p>
      </div>

      <div className="venue-amenities">
        <h2>Amenities</h2>
        <ul className="list">
          <li>1. 32 Rooms available</li>
          <li>2. 50 Parking</li>
          <li>3. Bridal Room</li>
          <li>4. Wi-Fi</li>
          <li>5. Parking</li>
        </ul>
      </div>

      <div className="venue-other-info">
        <h2>Other Information</h2>
        <ul className="list">
          <li>1. Property Type - Banquet Hall, Lawn</li>
          <li>2. Price Type - Cost Per Plate</li>
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
        <h3>Kavita Joshi</h3>
      </div>
      <p>Trisara Hall provided an elegant and beautiful venue for our wedding. The staff was incredibly helpful and attentive.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic2} alt="Reviewer" className="reviewer-image" />
        <h3>Amit Patel</h3>
      </div>
      <p>Our experience at Trisara Hall was nothing short of amazing. The ambiance was perfect and everything went smoothly.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic3} alt="Reviewer" className="reviewer-image" />
        <h3>Sunita Reddy</h3>
      </div>
      <p>We had a fantastic time at Trisara Hall. The venue was beautifully decorated and the service was excellent.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic4} alt="Reviewer" className="reviewer-image" />
        <h3>Rahul Deshmukh</h3>
      </div>
      <p>Trisara Hall exceeded our expectations. The staff was professional and the setting was absolutely stunning.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic5} alt="Reviewer" className="reviewer-image" />
        <h3>Priya Nair</h3>
      </div>
      <p>We couldn't have asked for a better venue than Trisara Hall. Everything was perfect and our guests loved it.</p>
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

export default V3_Trisara_Hall;
