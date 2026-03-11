import React from 'react';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import '../../App.css'
function AboutUs() {
 return (
  <>
  <Header/>
    <section className="about-sec">

      <div className="container py-5">

       
        <div className="text-center mb-5">
          <span className="benefit-span">ABOUT OUR COMPANY</span>
          <h1 className="mt-3">Powerful Hosting For Modern Websites</h1>
          <p className="about-p">
            We provide fast, secure and scalable cloud hosting solutions for
            businesses, startups and individuals across the world.
          </p>
        </div>

       
        <div className="row align-items-center g-5">

          <div className="col-lg-6">
            <img
              src="src/assets/img/images/about6-image.png"
              className="img-fluid"
              alt="about"
            />
          </div>

          <div className="col-lg-6">

            <h3 className="mb-3">Who We Are</h3>

            <p>
              FlyWithShub is a trusted cloud hosting provider delivering
              high-performance infrastructure, secure environments and reliable
              uptime for businesses of all sizes.
            </p>

            <p>
              Our mission is to help companies grow online by providing powerful
              hosting technology, modern infrastructure and excellent customer
              support.
            </p>

            <ul className="about-list">
              <li><i className="fa-solid fa-check"></i> 99.9% Server Uptime</li>
              <li><i className="fa-solid fa-check"></i> High Speed Cloud Servers</li>
              <li><i className="fa-solid fa-check"></i> Advanced Security Protection</li>
              <li><i className="fa-solid fa-check"></i> 24/7 Technical Support</li>
            </ul>

          </div>

        </div>

      </div>




      <div className="about-stats">

        <div className="container">

          <div className="row text-center">

            <div className="col-md-3">
              <h2>10K+</h2>
              <p>Happy Customers</p>
            </div>

            <div className="col-md-3">
              <h2>500+</h2>
              <p>Hosted Websites</p>
            </div>

            <div className="col-md-3">
              <h2>99.9%</h2>
              <p>Server Uptime</p>
            </div>

            <div className="col-md-3">
              <h2>24/7</h2>
              <p>Support Available</p>
            </div>

          </div>

        </div>

      </div>

    </section>
    <Footer/>
    </>
  );
}

export default AboutUs;
