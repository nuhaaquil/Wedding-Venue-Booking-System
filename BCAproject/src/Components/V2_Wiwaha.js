import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../App.css";
import { NavLink } from "react-router-dom";

import V2_1 from "../Images/V2-Wiwaha.jpg";
import V2_2 from "../Images/V2-Wiwaha2(main).jpg";
import V2_3 from "../Images/V2-Wiwaha3.jpg";
import V2_4 from "../Images/V2-Wiwaha4.jpg";
import V2_5 from "../Images/V2-Wiwaha5.jpg";

import review_pic1 from "../Images/review-pic.jpg";
import review_pic2 from "../Images/review-pic2.jpg";
import review_pic3 from "../Images/review-pic3.jpg";
import review_pic4 from "../Images/review-pic4.jpg";
import review_pic5 from "../Images/review-pic5.jpg";

const V2_Wiwaha = () => {
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
        <title>Wiwaha</title>
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

      <div className="venue-name">WIWAHA</div>
      <div className="venue-pictures">
        <img src={V2_1} alt="Venue 1" className="venue-image" />
        <img src={V2_2} alt="Venue 2" className="venue-image" />
        <img src={V2_3} alt="Venue 3" className="venue-image" />
        <img src={V2_4} alt="Venue 4" className="venue-image" />
        <img src={V2_5} alt="Venue 5" className="venue-image" />
      </div>

      <div className="venue-description">
        <h2>About The Venue</h2>
        <p>
        Wiwaha - The Boutique Venue is a premier venue located in North Bangalore of Karnataka
        and is ideal for hosting a variety of functions and events. 
        This breathtaking space is a treat for the eyes and makes a dreamy backdrop to celebrate 
        the joyous moments of life.<br></br>
          <br></br>
          <strong>Capacity/Space available at The Beginning</strong>
          <p>
          This spacious venue is a combination of an indoor banquet and outdoor lawn with 1000 seating
            and 1500 floating guest capacity making it suitable for holding large gatherings.
            Additionally the venue also has 32 air conditioned rooms and separate bridal suites to ensure 
            a relaxing stay for everyone. 
          </p>
          
        </p>
      </div>

      <div className="venue-price">
        <h2>Price</h2>
        <p>Veg - ₹650</p>
        <p>Non Veg - ₹800</p>
        <p>Rental Per Day - ₹6,00,000</p>
      </div>

      <div className="venue-amenities">
        <h2>Amenities</h2>
        <ul className="list">
          <li>1. 32 Rooms available</li>
          <li>2. 12000 Square Feet Capacity</li>
          <li>3. 250 Parking</li>
          <li>4. Electricity Back-up</li>
          <li>5. Wi-Fi</li>
          <li>6. Parking</li>
        </ul>
      </div>

      <div className="venue-other-info">
        <h2>Other Information</h2>
        <ul className="list">
          <li>1. Property Type - Banquet Hall, Lawn</li>
          <li>2. Price Type - Time Based Rent</li>
          <li>3. Decoration - Outside Decorators Allowed</li>
          <li>4. Food - Outside Food Allowed</li>
          <li>5. Valet Parking - Yes</li>
          <li>6. Allowed Cuisine - Both</li>
        </ul>
      </div>

      <div className="venue-reviews">
  <h2>Reviews</h2>
  <div className="reviews-container">
    <div className="review">
      <div className="review-header">
        <img src={review_pic1} alt="Reviewer" className="reviewer-image" />
        <h3>Aryan Sharma</h3>
      </div>
      <p>The Wiwaha venue was absolutely stunning! The service was top-notch and the ambiance was perfect for our special day.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic2} alt="Reviewer" className="reviewer-image" />
        <h3>Ananya Iyer</h3>
      </div>
      <p>We had an amazing experience at Wiwaha. The decor was beautiful and the staff were incredibly helpful.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic3} alt="Reviewer" className="reviewer-image" />
        <h3>Rohan Verma</h3>
      </div>
      <p>Wiwaha exceeded our expectations in every way. The venue was elegant and the catering was delicious.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic4} alt="Reviewer" className="reviewer-image" />
        <h3>Meera Kapoor</h3>
      </div>
      <p>The atmosphere at Wiwaha was enchanting. It was the perfect setting for our wedding.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic5} alt="Reviewer" className="reviewer-image" />
        <h3>Vikram Singh</h3>
      </div>
      <p>From start to finish, our experience at Wiwaha was wonderful. The staff made everything run smoothly.</p>
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

export default V2_Wiwaha;
