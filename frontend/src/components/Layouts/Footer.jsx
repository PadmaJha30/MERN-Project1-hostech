import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
<footer className='footer-section'>
 <div>
    <div className="container">
      <div className="row">
        <div className='col-xl-3 col-lg-3 col-md-6'>
          <div className='footer-col'>
          <div className='footer-logo'>
            <img src="src/assets/img/logo/header-logo6.png" alt="" />
          </div>
          <div className='mt-16 footer-head'>
             <p>Take control of your online presence with to top-tier web hosting solutions. Whether you're
                           launching your first.</p>
          </div>
          <div className=' footer-social-icon text-start'>
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
          </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="footer-Quick-links">
             <h4>Quick Links</h4>
             <div className='footer-list'>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/services">Service</Link></li>
                <li><Link to="/benefits">Benefits</Link></li>
                <li><Link to="/profile">My Account</Link></li>
              </ul>
              
             </div>
          </div>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-6'>
          <div className='footer-Quick-links mb-50 ml-0 md:ml-0 sm:ml-0'>
            <h4>Useful Links</h4>
            <div className="footer-list">
              <ul>
                <li><a href="">Cloud Hosting</a></li>
                <li><a href="">VPS Hosting</a></li>
                <li><a href="">Shared Hosting</a></li>
                <li><a href="">WP Hosting</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-8 col-sm-6">
          <div className="footer-subscribe mb-50 ml-30 sm:ml-0 md:ml-0">
            <h4>Newsletter</h4>
            <div className="footer-heading-p">
              <p>Subscribe Our Newletter</p>
            </div>
            <form action="#" className="_relative">
              <input type="email" placeholder='Enter Email Address' />
              <div className="button footer-btn-class">
                <button className=' home-btn1' type='submit'>Subscribe
                  <span className="arrow1"><i className="fa-solid fa-arrow-right"></i></span>                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="container">
         <div className="row copyright-sec align-items-center">
            <div className="col-lg-6">
               <p>Copyright 2025 HOSTC - Pratiksha | All Right Reserved</p>
            </div>
            <div className="col-lg-6">
               <div className="payment-options">
                  <a href="#"><img src="src/assets/img/others/payment6-2.jpg" alt=""/></a>
                  <a href="#"><img src="src/assets/img/others/payment6-1.jpg" alt=""/></a>
                  <a href="#"><img src="src/assets/img/others/payment6-3.jpg" alt=""/></a>
               </div>
            </div>
         </div>
      </div>
</footer>
  )
}

export default Footer;
