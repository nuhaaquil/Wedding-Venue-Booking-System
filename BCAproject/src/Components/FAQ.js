import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../App.css';
import { NavLink } from 'react-router-dom'



function FAQ(){

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const handleToggle = (event) => {
    const detailsElements = document.querySelectorAll("details");
    detailsElements.forEach((details) => {
      if (details !== event.currentTarget) {
        details.removeAttribute("open");
      }
    });
  };

    return (
        
        <div className="faq-page">
          <Helmet>
        <title>WedSpot - FAQ</title>
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

    <div className="FAQ">
      <h1 className="faq-main-heading">Frequently Asked Questions</h1>
      
      <details className="faq-item" onClick={handleToggle}>
        <summary>What is WedSpot?</summary>
        <p>WedSpot is a comprehensive platform designed to help you find and book the perfect wedding venue. We offer a curated list of venues with detailed information and user reviews to simplify your wedding planning process.</p>
      </details>
      
      <details className="faq-item" onClick={handleToggle}>
        <summary>How does WedSpot work?</summary>
        <p>Simply browse through our list of wedding venues, and view detailed profiles of each venue. Once you find a venue you like, you can contact them directly through our platform to inquire about availability and pricing.</p>
      </details>
      
      <details className="faq-item" onClick={handleToggle}>
        <summary>Is there a cost to use WedSpot?</summary>
        <p>No, using WedSpot to find and book venues is completely free for users. We aim to provide the best service without any hidden fees.</p>
      </details>
      
      <details className="faq-item" onClick={handleToggle}>
        <summary>How do I contact customer support?</summary>
        <p>If you have any questions or need assistance, you can contact our customer support team via email at contact@wedspot.com or call us at +91 72559 83220. We are here to help you with any concerns or queries.</p>
      </details>
      
      <details className="faq-item" onClick={handleToggle}>
        <summary>Can I book venues directly through WedSpot?</summary>
        <p>While you cannot book directly through WedSpot, you can contact the venues via our platform to arrange a booking. We provide all the necessary contact details for you to reach out to the venue directly.</p>
      </details>
      
      <details className="faq-item" onClick={handleToggle}>
        <summary>How do I know if a venue is available?</summary>
        <p>You can check availability by contacting the venue directly through our platform. Each venue listing includes contact information and a form to inquire about dates and availability.</p>
      </details>
      
      <details className="faq-item" onClick={handleToggle}>
        <summary>Can I leave reviews for venues?</summary>
        <p>Yes, we encourage users to leave reviews for venues they have visited. This helps other users make informed decisions and provides valuable feedback to venue owners.</p>
      </details>
      
      <details className="faq-item" onClick={handleToggle}>
        <summary>What should I consider when choosing a wedding venue?</summary>
        <p>Consider factors such as location, capacity, available dates, cost, and amenities when choosing a wedding venue. WedSpot provides detailed information and photos to help you make the best choice.</p>
      </details>
      
      <details className="faq-item" onClick={handleToggle}>
        <summary>Do you offer wedding planning services?</summary>
        <p>WedSpot focuses on venue booking, but we provide resources and recommendations for other wedding planning services such as catering, photography, and decor.</p>
      </details>
      
      <details className="faq-item" onClick={handleToggle}>
        <summary>How do I list my venue on WedSpot?</summary>
        <p>If you are a venue owner and would like to list your venue on WedSpot, please contact us at listyourvenue@wedspot.com. We will guide you through the process and help you create an appealing listing.</p>
      </details>
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

export  default FAQ;