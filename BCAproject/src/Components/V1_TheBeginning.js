import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../App.css";
import { NavLink } from "react-router-dom";

import V1_1 from "../Images/V1-TheBeginning(main).jpg";
import V1_2 from "../Images/V1-TheBeginning2.jpg";
import V1_3 from "../Images/V1-TheBeginning3.jpg";
import V1_4 from "../Images/V1-TheBeginning4.jpg";
import V1_5 from "../Images/V1-TheBeginning5.jpg";

import review_pic1 from "../Images/review-pic.jpg";
import review_pic2 from "../Images/review-pic2.jpg";
import review_pic3 from "../Images/review-pic3.jpg";
import review_pic4 from "../Images/review-pic4.jpg";
import review_pic5 from "../Images/review-pic5.jpg";

const V1_TheBeginning = () => {
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
        <title>The Beginning</title>
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

      <div className="venue-name">THE BEGINNING</div>
      <div className="venue-pictures">
        <img src={V1_1} alt="Venue 1" className="venue-image" />
        <img src={V1_2} alt="Venue 2" className="venue-image" />
        <img src={V1_3} alt="Venue 3" className="venue-image" />
        <img src={V1_4} alt="Venue 4" className="venue-image" />
        <img src={V1_5} alt="Venue 5" className="venue-image" />
      </div>

      <div className="venue-description">
        <h2>About The Venue</h2>
        <p>
          The Beginning is a luxurious resort that offers accommodation and
          venue space in Bangalore, Karnataka. Operating since 2020, this lovely
          venue space is committed to craft the most memorable experiences for
          their clients through their unparalleled service and stellar
          provisions.<br></br>
          <br></br>
          <strong>Capacity/Space available at The Beginning</strong>
          <p>
            Adorned with elegant interiors and serene surroundings , this resort
            has-{" "}
          </p>
          <ul className="list-type">
            <li>
              Indoor The Euphoria Hall - 1000 seating and 2000 floating capacity
            </li>
            <li>
              Indoor The Tavern Hall - 150 seating and 300 floating capacity
            </li>
            <li>
              Indoor The Topeina Hall - 100 seating and 300 floating capacity
            </li>
            <li>
              Outdoor Serene Courtyard - 800 seating and 1500 floating capacity
            </li>
            <li>
              Indoor & Outdoor The Azure - 100 seating and 300 floating capacity
              <br></br>
              Additionally there are also 10 well provided rooms.{" "}
            </li>
          </ul>
        </p>
      </div>

      <div className="venue-price">
        <h2>Price</h2>
        <p>Veg - ₹600</p>
        <p>Non Veg - ₹750</p>
        <p>Rental Per Day - ₹6,00,000</p>
      </div>

      <div className="venue-amenities">
        <h2>Amenities</h2>
        <ul className="list">
          <li>1. 14 Rooms available</li>
          <li>2. 16 AC Rooms</li>
          <li>3. 10500 Square Feet Capacity</li>
          <li>4. 50 Parking</li>
          <li>5. Electricity Back-up</li>
          <li>6. Bridal Room</li>
          <li>7. Airport Pick-up/Drop</li>
          <li>8. Conference Center</li>
        </ul>
      </div>

      <div className="venue-other-info">
        <h2>Other Information</h2>
        <ul className="list">
          <li>1. Property Type - Banquet Hall</li>
          <li>2. Price Type - Time Based Rent</li>
          <li>3. Decoration - Outside Decorators Not Allowed</li>
          <li>4. Dj - Outside DJ Not Allowed</li>
          <li>5. Food - Outside Food Not Allowed</li>
          <li>6. Is Room Available - Yes</li>
          <li>7. Valet Parking - Yes</li>
          <li>8. Allowed Cuisine - Both</li>
        </ul>
      </div>

      <div className="venue-reviews">
        <h2>Reviews</h2>
        <div className="reviews-container">
          <div className="review">
            <div className="review-header">
              <img
                src={review_pic1}
                alt="Reviewer 1"
                className="reviewer-image"
              />
              <h3>Rohan Mehta</h3>
            </div>
            <p>
              "The Beginning" was the perfect venue for our wedding. The
              ambiance was beautiful, and the staff was incredibly helpful.
              Highly recommend!
            </p>
          </div>
          <div className="review">
            <div className="review-header">
              <img
                src={review_pic2}
                alt="Reviewer 2"
                className="reviewer-image"
              />
              <h3>Aarti Sharma</h3>
            </div>
            <p>
              The venue exceeded our expectations in every way. The decorations
              were stunning, and our guests were very impressed. Thank you for
              making our day special!
            </p>
          </div>
          <div className="review">
            <div className="review-header">
              <img
                src={review_pic3}
                alt="Reviewer 3"
                className="reviewer-image"
              />
              <h3>Vikram Singh</h3>
            </div>
            <p>
              Beautiful venue with excellent facilities. The staff was very
              accommodating and ensured everything went smoothly. It was a
              memorable experience for all of us.
            </p>
          </div>
          <div className="review">
            <div className="review-header">
              <img
                src={review_pic4}
                alt="Reviewer 4"
                className="reviewer-image"
              />
              <h3>Pooja Rao</h3>
            </div>
            <p>
              We couldn't have asked for a better venue for our wedding. The
              location, services, and overall experience were top-notch. We
              received so many compliments from our guests!
            </p>
          </div>
          <div className="review">
            <div className="review-header">
              <img
                src={review_pic5}
                alt="Reviewer 5"
                className="reviewer-image"
              />
              <h3>Amit Patel</h3>
            </div>
            <p>
              The Beginning provided an unforgettable backdrop for our special
              day. The venue was spacious, well-decorated, and the staff went
              above and beyond to cater to our needs.
            </p>
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

export default V1_TheBeginning;
