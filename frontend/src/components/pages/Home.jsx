import React from 'react'
import '../../App.css';
function Home() {
  return (
    <section className='home-container'>
      
  
<div className="container  col-xxl-8  ">
  <div className="row align-items-center g-5 py-5">
    
 
    
    <div className="col-lg-5">
      <div className="main-heading6">
                  <span className='benefit-span'>
              <img src="src/assets/img/icons/span6.svg" alt="" />
              CLOUD HOSTING UP TO 75% OFF</span>
      <h1 className="home-h1  mt-4">
        Achieve More <br />
with the Power <br />
of Cloud <br/>
Hosting

      </h1>
      <p className="lead home-p">
        Take your business to the next level with powerful cloud hosting designed for speed, security, & scalability.
      </p>
      
      <div className=" gap-2  justify-content-md-start">
        <button type="button" className="home-btn1 my-2 me-2  btn btn-lg px-2" data-aos="fade-right">
          Get Started Now 
          <span className="arrow1"><i className="fa-solid fa-arrow-right"></i></span>

        </button>
        <button type="button" className=" home-btn2 btn btn-lg  px-2" data-aos="fade-right">
           Explore Cloud Hosting
           <span className="arrow1"><i className="fa-solid fa-arrow-right"></i></span>

        </button>
      </div>
      </div>
    </div>


       <div className="col-10 col-sm-8 col-lg-6">
      <img src="src/assets/img/images/cta6-image.png" 
           className="d-block mx-lg-auto img-fluid hero-float" 
           alt="Bootstrap Themes" 
           width="700" 
           height="500" 
           loading="lazy"/>
    </div>
    
  </div>
</div>
  </section>

  )
}

export default Home;
