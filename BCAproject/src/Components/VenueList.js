import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../App.css";
import { NavLink } from "react-router-dom";

import V1Main from '../Images/V1-TheBeginning(main).jpg';
import V2Main from '../Images/V2-Wiwaha2(main).jpg';
import V3Main from '../Images/V3-Trisara-Hall3(main).jpeg';
import V4Main from '../Images/V4-Rustique-Wind3(main).jpeg';
import V5Main from '../Images/V5-JR-Resorts4(main).jpg';
import V6Main from '../Images/V6-Arambha(main).jpg';

const VenueList = () => {
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
    <div className="venue-list-page">
      <Helmet>
        <title>WedSpot - Explore</title>
      </Helmet>
      <div className="navbar" id="navBar1">
        <div className="navbar-brand"><h1>WedSpot</h1></div>
        <div className="navbar-links">
        <NavLink to={"/Home#navBar1"}><a href="#">Home</a></NavLink>
        <NavLink to={"/Booking#navBar1"}><a href="#">Booking</a></NavLink>
        <NavLink to={"/Cancellation#navBar1"}><a href="#">Cancellation</a></NavLink>
        <NavLink to={"/VenueList#navBar1"}><a href="#">Explore</a></NavLink>
        <NavLink to={"/AboutUs#navBar1"}><a href="">About Us</a></NavLink>
        </div>
      </div>
      <h1 className="page-title">Our Venues</h1>
      <div className="venues-container">
        {/* Venue 1 */}
        <div className="venue-card">
          <img src={V1Main} alt="Venue 1" className="main-venue-image" />
          <p className="main-venue-name">The Beginning</p>
          <p className="venue-loc">Sarjapur Main Road</p>
          <NavLink to={"/V1_TheBeginning#navBar1"}><button className="know-more-button">Know More</button></NavLink>
        </div>

        {/* Venue 2 */}
        <div className="venue-card">
          <img src={V2Main} alt="Venue 2" className="main-venue-image" />
          <p className="main-venue-name">Wiwah</p>
          <p className="venue-loc">Sir M Visvesvaraya Rd</p>
          <NavLink to={"/V2_Wiwaha#navBar1"}><button className="know-more-button">Know More</button></NavLink>
        </div>

        {/* Venue 3 */}
        <div className="venue-card">
          <img src={V3Main} alt="Venue 3" className="main-venue-image" />
          <p className="main-venue-name">Trisara Hall</p>
          <p className="venue-loc">Bellary Road</p>
          <NavLink to={"/V3_Trisara_Hall#navBar1"}><button className="know-more-button">Know More</button></NavLink>
        </div>

        {/* Venue 4 */}
        <div className="venue-card">
          <img src={V4Main} alt="Venue 4" className="main-venue-image" />
          <p className="main-venue-name">Rustique Winds</p>
          <p className="venue-loc">Whitefield</p>
          <NavLink to={"/V4_Rustique_Winds#navBar1"}><button className="know-more-button">Know More</button></NavLink>
        </div>

        {/* Venue 5 */}
        <div className="venue-card">
          <img src={V5Main} alt="Venue 5" className="main-venue-image" />
          <p className="main-venue-name">JR Resorts</p>
          <p className="venue-loc">Electronic City</p>
          <NavLink to={"/V5_JR_Resorts#navBar1"}><button className="know-more-button">Know More</button></NavLink>
        </div>

        {/* Venue 6 */}
        <div className="venue-card">
          <img src={V6Main} alt="Venue 6" className="main-venue-image" />
          <p className="main-venue-name">Aarambha</p>
          <p className="venue-loc">Yelahanka</p>
          <NavLink to={"/V6_Aarambha#navBar1"}><button className="know-more-button">Know More</button></NavLink>
        </div>
       
      </div>
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

export default VenueList;
