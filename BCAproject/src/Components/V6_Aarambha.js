import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../App.css";
import { NavLink } from "react-router-dom";

import V6_1 from "../Images/V6-Arambha2.jpg";
import V6_2 from "../Images/V6-Arambha3.jpg";
import V6_3 from "../Images/V6-Arambha4.jpg";
import V6_4 from "../Images/V6-Arambha5.jpg";
// import V4_5 from "../Images/V3-Trisara-Hall5.jpeg";

import review_pic1 from "../Images/review-pic.jpg";
import review_pic2 from "../Images/review-pic2.jpg";
import review_pic3 from "../Images/review-pic3.jpg";
import review_pic4 from "../Images/review-pic4.jpg";
import review_pic5 from "../Images/review-pic5.jpg";

const V6_Aarambha = () => {
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
        <title>Aarambha</title>
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

      <div className="venue-name">Aarambha</div>
      <div className="venue-pictures">
        <img src={V6_1} alt="Venue 1" className="venue-image" />
        <img src={V6_2} alt="Venue 2" className="venue-image" />
        <img src={V6_3} alt="Venue 3" className="venue-image" />
        <img src={V6_4} alt="Venue 4" className="venue-image" />
      </div>

      <div className="venue-description">
        <h2>About The Venue</h2>
        <p>
        Aarambha, a luscious venue based in Bangalore is perfect for the wedding events.
        Equipped with world-class facilities, the venue is spacious and comfortable. 
        They offer complete event support for all your ceremonies and events.
        With their class apart services, you are ensured that every experience with them is unique, every time.
        This venue is an ideal choice for your wedding events as it can hold lavish as well as a simple and subtle functions.
        Vibrant and progressive, Aarambha retains the warmth and spirit of India while offering a lawn. 
        The services go far above and beyond the conventional venue and catering staples.
         All these services would be customised according to your demands, needs, and budget.<br></br>
          <br></br>
          <strong>Capacity/Space available at The Beginning</strong>
          <p>
          The space is divided into an indoor banquet and resort.
          </p>
          
        </p>
      </div>

      <div className="venue-price">
        <h2>Price</h2>
        <p>Veg - ₹468</p>
        <p>Non Veg - ₹568</p>
        <p>Rental Per Day - ₹4,00,000</p>
      </div>

      <div className="venue-amenities">
        <h2>Amenities</h2>
        <ul className="list">
          <li>1. 100000 Sqare Feet Capacity</li>
          <li>2. 50 Parking</li>
          <li>3. 35 Rooms</li>
          <li>4. 35 Rooms with AC</li>
        </ul>
      </div>

      <div className="venue-other-info">
        <h2>Other Information</h2>
        <ul className="list">
          <li>1. Property Type - Banquet Hall, Resort</li>
          <li>2. Price Type - Cost Per Plate</li>
          <li>3. Decoration - Outside Decorators Not Allowed</li>
          <li>4. Food - Outside Food Not Allowed</li>
          <li>5. Allowed Cuisine - Both</li>
        </ul>
      </div>

      <div className="venue-reviews">
  <h2>Reviews</h2>
  <div className="reviews-container">
    <div className="review">
      <div className="review-header">
        <img src={review_pic2} alt="Reviewer" className="reviewer-image" />
        <h3>Anita Singh</h3>
      </div>
      <p>Aarambha was the perfect venue for our event. The ambiance was serene and the staff was incredibly supportive.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic1} alt="Reviewer" className="reviewer-image" />
        <h3>Rajesh Nair</h3>
      </div>
      <p>Our experience at Aarambha was amazing. The venue's beauty and the excellent service made our day truly special.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic3} alt="Reviewer" className="reviewer-image" />
        <h3>Deepa Rao</h3>
      </div>
      <p>We had a wonderful time at Aarambha. The elegant decor and the friendly staff ensured everything went smoothly.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic4} alt="Reviewer" className="reviewer-image" />
        <h3>Vivek Kumar</h3>
      </div>
      <p>Aarambha exceeded all our expectations. The venue was stunning, and the attention to detail was impressive.</p>
    </div>
    <div className="review">
      <div className="review-header">
        <img src={review_pic5} alt="Reviewer" className="reviewer-image" />
        <h3>Meena Mehta</h3>
      </div>
      <p>Our guests were thrilled with Aarambha. The beautiful surroundings and top-notch service made it a memorable event.</p>
    </div>
  </div>
</div>


{/* Go back */}
<div className="button-container">
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

export default V6_Aarambha;
